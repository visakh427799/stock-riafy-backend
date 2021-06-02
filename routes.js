 const express = require('express');
 const router = express.Router();
 const axios  = require('axios');
 const cron = require('node-cron')

 router.get('/',(req,res)=>{


    cron.schedule("*/10 * * * * *", async function() {

        await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=686653&date=02-06-2021')
        .then((res)=>{console.log(res.data)})
        .catch((error)=>console.log(error));
   
    })
       
    });

    
        

 module.exports=router;
