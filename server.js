const mongoose = require('mongoose');
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const config = require('config');
const session = require('express-session');
const authController = require('./controllers/auth');
const tweetController = require('./controllers/tweet');
const userController = require('./controllers/user');
// const db = 'mongodb://localhost/twitter-react';
const db = config.get('mongoURI');
const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(session({
  secret: 'moving to Tokyo next Sunday',
  resave: false,
  saveUninitialized: false
}))


mongoose
	.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log('MongoDB is connected...'))
	.catch(err => console.log(err))


app.use('/api/auth', authController);
app.use('/api/tweets', tweetController);
app.use('/api/users', userController);



if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	})
}

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running...')	
})
