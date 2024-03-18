const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
  res.send("Hello World!");
})

const template = {
    "is_success" : true,
    "user_id" : "Saiyad_Ali_28082002",
    "email" : "md2455.be21@chitkara.edu.in",
    "roll_number":"2110992455",
    "odd_numbers": [],
    "even_numbers": [],
    "alphebets": [],
  }

app.post('/bfhl', (req, res)=>{
  const {data} = req.body;
  const response = structuredClone(template);

  try{
    for(var i=0; i<data.length; i++){
      var ele = parseInt(data[i]);
      if(isNaN(ele)){
        response.alphebets.push(data[i].toUpperCase());
      }else{
        if(ele%2==0){
          response.even_numbers.push(ele);
        }else{
          response.odd_numbers.push(ele);
        }
      }
    }  
    res.json(response);
  }catch(error){
    response.is_success = false;
    res.json(response);
  }
})

app.listen(8000, () => {
  console.log('server started');
})
