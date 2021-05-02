// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Handlebars.registerPartial('myPartial', '{{prefix}}');
app.use(express.static(path.join(__dirname, 'public')));


// Routes
// =============================================================

app.get('/', (req, res) => {

  res.render('map');
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});
