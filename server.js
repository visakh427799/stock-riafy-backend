const express= require('express')
const router = require('./routes');
const app    = express();
const PORT   = process.env.PORT||8000;

app.use(router);




app.listen(PORT,(error)=>{

    !error?console.log("server is listening on port 8000"):console.log(error);
})