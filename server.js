// dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.envPORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store); // Documentation: https://www.npmjs.com/package/connect-session-sequelize

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

//initializing handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// initializing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // a method inbuilt in express to recognize the incoming Request Object as strings or arrays Source: https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
