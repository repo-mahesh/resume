import express, { json, urlencoded } from 'express';
import { join } from 'path';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();

// exclusing dotenv config from production, this allows to use process.env
if (process.env.NODE_ENV !== 'production') dotenv.config();

// CORS Middleware
app.use(cors());

// express middleware handling the body parsing 
app.use(json());

// express middleware handling the form parsing
app.use(urlencoded({extended: false}));

// middleware for handling sample api routes
//app.use('/api/v1', require('./routes/api/crud'));

// create static assets from react code for production only
// if (process.env.NODE_ENV === 'production') {
//     app.use(static( 'client/build' ));

//     app.get('*', (req, res) => {
//         res.sendFile(join(__dirname, 'client', 'build', 'index.html'));
//     });
// }

// use port from environment variables for production
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})