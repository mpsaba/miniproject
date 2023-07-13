const geolib = require('geolib');


module.exports = {

    findTreasure: function (req, res) {
        if(!global.userInfo){
            res.json({
                error: true,
                message: "No player detected. Please login."
            });
        }else{

            var checkRequired = this.checkRequiredFields(req.body);

            if(checkRequired.error == false){
                db.models.MoneyValue.findAll({
                    include:[
                        {
                            model: db.models.Treasure,
                            as: "treasure",
                            attributes: ['id','name', 'latitude', 'longitude']
                        },
                    ],
                    attributes: ['id','amt','treasureId']
                }).then(money_values => {

                    db.models.Treasure.findAll({
                        attributes: ['id','name', 'latitude', 'longitude']
                    }).then(treasures => {

                        req.body.prize = checkRequired.prize;
                        var boxes = this.findBoxes(treasures, money_values, req.body);    

                        res.json({
                            error: false,
                            message: "Welcome to Kitra, " + global.userInfo.name + "!",
                            nearbyTreasuresA: boxes.nearbyTreasuresA,
                            nearbyTreasuresB: boxes.nearbyTreasuresB
                        });

                    }).catch(error => {
                        console.log(error);
                        res.json({
                            error: true,
                            message: error
                        });
                    });
                }).catch(error => {
                    console.log(error);
                    res.json({
                        error: true,
                        message: error
                    });
                });
            }else{
                res.json(checkRequired);
            }
        }
    },


    findBoxes: function(treasures, money_values, params){

        try{

            var nearbyTreasuresA = [];
            var nearbyTreasuresB = [];
    
            for (var x=0; x<treasures.length; x++){
                var distance = geolib.getDistance(params, { latitude: treasures[x].latitude, longitude: treasures[x].longitude });
    
                if(distance/1000 < params.distance){ // check if distance is within 1 / 10 KM
        
                    treasures[x].prizes = [];
                    for (var y=0; y<money_values.length; y++){

                        if(money_values[y].treasureId == treasures[x].id){  

                            treasures[x].prizes.push({
                                amt: money_values[y].amt
                            });
                            
                            if(money_values[y].amt > 10){ // checks treasure boxes that has more than $10 prize value
    
                                if(params.prize){

                                    if(nearbyTreasuresB.some(treasure => treasure.id == money_values[y].treasureId)){

                                        var t = nearbyTreasuresB.pop(money_values[y].treasureId);
                                        if(money_values[y].amt == 10 || money_values[y].amt == 20 || money_values[y].amt == 30){  //If a treasure has prize value $10, $20, $30. Only the minimum value must be considered. 
                                            
                                            if(t.amt < money_values[y].amt){
                                                nearbyTreasuresB.push({
                                                    id: t.id,
                                                    name: t.name,
                                                    amt: t.amt
                                                });

                                            }else{
                                                nearbyTreasuresB.push({
                                                    id: treasures[x].id,
                                                    name: treasures[x].name,
                                                    amt: money_values[y].amt
                                                });
                                            }
                                        }
                                    } else{
                                        nearbyTreasuresB.push({
                                            id: treasures[x].id,
                                            name: treasures[x].name,
                                            amt: money_values[y].amt
                                        });
                                    }      
                                }     
                            }
                        }
                    }

                    nearbyTreasuresA.push({
                        id: treasures[x].id,
                        name: treasures[x].name,
                        prizes: treasures[x].prizes
                    });
                }
            }

    
            return {
                nearbyTreasuresA: nearbyTreasuresA,
                nearbyTreasuresB: nearbyTreasuresB
            }

        }catch(err){
            console.log(err)
            return {
                message: err
            }
        }
    },

    checkRequiredFields: function(params){
        console.log("checkRequiredFields");
        console.log(params);
        if(params.latitude && params.longitude && params.distance){//check required fields
            if(params.distance == 1 || params.distance == 10){   //check distance if valid
                if(params.prize || params.prize == 0){
                    if(params.prize >= 10 && params.prize <=30 && params.prize%1 == 0){ // check prize if valid
                        return {
                            error: false,
                            prize: params.prize
                        }
                    }else{
                        return {
                            error: true,
                            message: "The prize value only accepts a range of $10 to $30 and only whole numbers."
                        }
                    }
                }else{
                    return {
                        error: false,
                        prize: undefined
                    }
                }

            }else{
                return {
                    error: true,
                    message: "Please enter valid distance. It can only be 1 or 10."
                }
            } 
        }else{
            return {
                error: true,
                message: "Please make sure to enter all required fields (latitude, longitude and distance)."
            }
        }
    }
}






