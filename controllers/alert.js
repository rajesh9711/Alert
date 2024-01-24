const {AlertSlack,AlertTelegram} = require('../utils/message')

exports.Alert = async (req,res)=>{
    try{
        AlertSlack(req.body.message);
        AlertTelegram(req.body.message);
        res.status(200).json({
            status:true,
            message:"Mesage send"
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            status:true,
            message:"Mesage Not Send"
        })
    }
}
