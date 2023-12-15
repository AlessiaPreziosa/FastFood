const Food = require('../models/food');

module.exports = {

    getMenu: (req, res) => {

        Food.find({}).sort({foodId: 1})
            .then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}));
        },

    addMenu: (req,res,next)=>{
        let newFood = new Food({
            foodId: req.body.foodId,
            name:(req.body.name).toUpperCase(),
            value:req.body.value,
            price:req.body.price,
            calories:req.body.calories,
            fats:req.body.fats,
            carbs:req.body.carbs,
            protein:req.body.protein,
            desc:req.body.desc
        });
        newFood.save()
            .then((saved)=>{res.json('saved');console.log(saved)})
            .catch((err)=>res.json(err));
    },

    updateMenu : (req,res,next)=>{
        let query = {name: (req.body.name).toUpperCase()};
        let newValues=query;
        if (req.body.value){
            newValues={value: req.body.value}
            update(query, newValues)
        }
        if (req.body.price){
            newValues={price: req.body.price}
            update(query, newValues)
        }
        if (req.body.calories){
            newValues={calories: req.body.calories}
            update(query, newValues)
        }
        if (req.body.fats){
            newValues={fats: req.body.fats}
            update(query, newValues)
        }
        if (req.body.carbs){
            newValues={carbs: req.body.carbs}
            update(query, newValues)
        }
        if (req.body.protein){
            newValues={protein: req.body.protein}
            update(query, newValues)
        }
        if (req.body.desc){
            newValues={desc: req.body.desc}
            update(query, newValues)
        }

        function update (query, newValues){
            Food.updateOne(query, newValues , (err,doc) =>{
                if (err) {
                    res.json(err)
                    console.log("Something wrong when updating data!");
                }else{
                    console.log(doc);
                }
            })
        }
    },

    deleteMenu : (req,res,next)=>{
        Food.deleteOne({foodId:req.body.foodId},(err,doc)=>{
            if(err){
                console.log("Something went wrong");
            }else{
                console.log(doc);
            }
        })
    }



}