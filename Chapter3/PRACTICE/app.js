
/*
ENGLISH: This is the main server file that handles routing and middleware
HINGLISH: Ye main server file hai jo routing aur middleware ko handle karta hai

ENGLISH: Import required modules
HINGLISH: Jaruri modules ko import karna
*/
const express = require('express')
const app = express();

const path = require('path');
const rootDir = require('./utils/path');

// ENGLISH: Parse URL-encoded bodies (as sent by HTML forms)
// HINGLISH: HTML forms dwara bheje gaye data ko parse karne ke liye
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(rootDir, 'public')));
// ENGLISH: Import and use home router
// HINGLISH: Home router ko import aur use karna
const HOMEROUTER = require('./routes/home');
app.use(HOMEROUTER);


// ENGLISH: Import and use contact router
// HINGLISH: Contact router ko import aur use karna
const CONTACTROUTER = require('./routes/contactus');
app.use(CONTACTROUTER);

// ENGLISH: Handle 404 page not found
// HINGLISH: 404 page not found ko handle karna
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404NOTFOUND.html'))
});

// ENGLISH: Start server on port 3001
// HINGLISH: Server ko port 3001 par start karna
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
