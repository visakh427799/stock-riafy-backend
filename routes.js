 const express = require('express');
 const router = express.Router();
 const axios  = require('axios');
 const cron = require('node-cron')

 router.get('/',(req,res)=>{


    let headers={
        authority: "cdn-api.co-vin.in",
        method: 'GET',
        path: "/api/v2/appointment/sessions/public/calendarByPin?pincode=686653&date=02-06-2021",
        scheme: 'https',
        origin: "https://cowin-mern-app.herokuapp.com",
        referer: "https://cowin-mern-app.herokuapp.com/",
       
        
        }


    cron.schedule("*/10 * * * * *", async function() {



        await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=686653&date=02-06-2021',{headers})
        .then((resp)=>{console.log(resp.data)
            if(resp.data){
                let centers=resp.data.centers;
                if(centers.length<1){
                    res.send("No vaccination centers available right now in this pincode")
                }

            }

            
        })
        .catch((error)=>console.log(error));
   
    })
       
    });

    
        

 module.exports=router;
