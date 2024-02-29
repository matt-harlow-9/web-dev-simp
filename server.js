// Import required modules
import express from 'express';
import indexRouter from './routes/index.js';

// Create Express application
const app = express();

app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port: ', process.env.PORT || 3000)
});