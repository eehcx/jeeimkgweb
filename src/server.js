const express = require('express');
const convertPugToHtml = require('./public/js/converter');

// Convert Pug views to HTML
convertPugToHtml();

const app = require('./app/app');

app.listen(app.get("port"), () => {
    console.log(`Server running on port ${app.get("port")}`);
});
