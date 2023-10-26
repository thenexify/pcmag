const express = require('express');
const app = express()
const port = 9000
const { engine } = require('express-handlebars');

app.use('/static', express.static('static'));
app.use('/', require('./routes/routess'))
app.set('views', './views');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.listen(port, () => {
  console.log(`PCMag app running on port http://localhost:${port}`);
})