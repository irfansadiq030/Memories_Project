const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(express.json());
// Importing Route

const postRoutes = require('./routes/postRoutes');

app.use('/posts',postRoutes);

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


// DB Config

const CONNECTION_URL = 'mongodb://localhost:27017/Memories_Project';
const PORT = process.env.PORT || 5000;


try {
    mongoose.connect(CONNECTION_URL)
    console.log('DB connected');

    // Setting Up Server
    app.listen(PORT,()=>{
        console.log('Server Runing at PORT:'+PORT);
    })

} catch (error) {
    console.log(error)
}