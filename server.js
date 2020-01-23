const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const app = express()
app.use(cors())
app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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

//Port set
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port ${port} `))

