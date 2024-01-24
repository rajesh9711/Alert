const express  =  require('express')
const mailchimp = require('@mailchimp/mailchimp_marketing');
const router = require('./routes/route')
const PORT = process.env.PORT || 5000;
const app = express();
require('dotenv').config();

app.use(express.json());

app.use('/',router)

app.listen(PORT, () => {
    console.log(`Server Running at Port ${PORT}`)
})
