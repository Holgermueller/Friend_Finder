let path = require('path');

//GET route to /survey
module.exports = function(app) {
    app.get('/survey', (req, res) => res.sendFile(path.join(__dirname, '/../public/survey.html')));

    //default catch-all route that leads to home.html
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "/../public/home.html"))
    });
};