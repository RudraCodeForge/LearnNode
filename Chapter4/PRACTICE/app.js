/* Question:- 4 Reuse the Last app from the assignment:-
1. ADD MORE FIELDS IN ADDHI E PAGE LIKE PRICE PER NIGHT, LOCATION, RATING, PHOTO.
2. DEAIGN THE HOME CARD TO SHOW ALL OF THIS INFORMATION.
3. MAKE SELECTED TAB ACTIVE ON TOP*/
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

const path = require("path");
const rootDir = require("./utils/path");

// ENGLISH: Parse URL-encoded bodies (as sent by HTML forms)
// HINGLISH: HTML forms dwara bheje gaye data ko parse karne ke liye
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(rootDir, "public")));
// ENGLISH: Import and use home router
// HINGLISH: Home router ko import aur use karna
const USERROUTER = require("./routes/userrouter");
app.use(USERROUTER);

// ENGLISH: Import and use contact router
// HINGLISH: Contact router ko import aur use karna
const { HOSTROUTER } = require("./routes/hostrouter");
app.use(HOSTROUTER);

// ENGLISH: Handle 404 page not found
// HINGLISH: 404 page not found ko handle karna
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404NOTFOUND.html"));
});

// ENGLISH: Start server on port 3001
// HINGLISH: Server ko port 3001 par start karna
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
