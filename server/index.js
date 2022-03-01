import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import PostRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', PostRoutes);

app.use('/', (req, res) => {
    res.send("Hello There")
});
const CONN_URL = 'mongodb://localhost:27017/memories';
// const CONN_URL = 'mongodb+srv://Jimmyab:Jimmy1978@memories.zwzie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}) 
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);