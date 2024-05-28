const express = require('express');
const cloudinaryConnect = require('./cludinary');
const resumeRouter = require('./routers/resumeRtr');
const cors = require ('cors');
const bodyParser = require('body-parser');


// const db = require('./Db')

require('dotenv').config()
const app = express();
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send(" sucees");
    
})
cloudinaryConnect();

const origin = process.env.CORS_ORIGIN
app.use(cors({
    credentials:true,
    origin
}))


app.use('/resume',resumeRouter);
// app.use('/resume',resumeRouter);
app.use('/sendmail', resumeRouter);


app.listen(process.env.PORT ,()=>{
    console.log("app is lestenig on", process.env.PORT);
})
