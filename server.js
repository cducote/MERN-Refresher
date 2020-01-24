const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require("body-parser");
const logger = require('morgan');
const listingRoutes = require('./routes/listings')
// const cookieParser = require('cookie-parser');
const app = express()
app.use(cors())
app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Mongoose Connexxion
mongoose.connect(db, { useNewUrlParser: true }).then(() => {
    
    console.log('MongoDB Connected')
})
.catch(err => {
    console.log(err)
    console.log('\x1b[31m\x1b[1m MongoDB Not Connected')
})


//Quick view
app.get('/', (req, res) => res.send("BETTY BLOCKS SECRET PROJECT"))

//Routes
app.use('/listings', listingRoutes)

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });

//Port set
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port} `))

