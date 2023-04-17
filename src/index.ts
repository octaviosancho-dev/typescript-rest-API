import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const app = express();

// App setup
app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// Server
const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on PORT: 8080')
})

// MongoDB
const MONGO_URL = 'mongodb+srv://osancho:osancho@cluster0.pds9srg.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());