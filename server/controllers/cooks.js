const Order = require('../models/order');

module.exports = {

    getOrders: (req, res) => {

        Order.find({}).sort({date: 1})
            .then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}));
    },

    updateCarico : (req,res,next)=>{

            Order.updateOne({_id: (req.body._id)}, {isTaken:true} , (err,doc) => {
                if (err) {
                    res.json(err)
                    console.log("Something wrong when updating data!");
                } else {
                    console.log(doc);
                }
            })
    },

    updateConcludi : (req,res,next)=>{

        Order.updateOne({_id: (req.body._id)}, {isFinished:true} , (err,doc) => {
            if (err) {
                res.json(err)
                console.log("Something wrong when updating data!");
            } else {
                console.log(doc);
            }
        })
    }

}