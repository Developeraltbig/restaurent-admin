const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const app = express();
const PORT  = process.env.PORT;

app.use(cors({
    origin:'http://localhost:3000',
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection error:", err));



  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    })
  }


app.get('/', (req, res) => {
    res.send("API Is running....");
})

app.post('/api/auth/login', async(req,res) => {
  try{
      const { email, password } = req.body;

      if(!email || !password){
        return(
          res.status(400).json({status. 'fail'})
        )
      }
  }catch(err){
    console.error("api not responding",err);
  }
})



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})