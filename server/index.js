import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/post',postRoutes);
app.use('/api/dalle',dalleRoutes);

app.get('/',async(req,res)=>{
    res.send("Hello from DALL-E");
})

const startServer = async()=>{
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=>console.log('server has started on port https://dall-e-yp2s.onrender.com/'));
    }
    catch(error) {
        console.log(error);
    }
    
}

startServer();