const Order = require("../models/order");

exports.create = (req, res) =>{
    console.log(req.body);
    const order = new Order(req.body);
    order.save()
        .then((order)=>{
            console.log(order)
            return res.json({order})
        })
        .catch((error)=>{
            console.log(error);
            return res.status(400).json({error})
        })
}
