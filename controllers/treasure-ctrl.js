

// const treasures = [
//     {
//         id:  100,
//         latitude: "14.54376481",
//         longitude: "121.0199117",
//         name: "T1"
//     },    
//     {
//         id:  101,
//         latitude: "14.55320766",
//         longitude: "121.0557745",
//         name: "T2"
//     },
//     {
//         id:  102,
//         latitude: "14.54464357",
//         longitude: "121.0203656",
//         name: "T3"
//     },
//     {
//         id:  103,
//         latitude: "14.58726159",
//         longitude: "120.9795048",
//         name: "T4"
//     },
//     {
//         id:  104,
//         latitude: "14.57320327",
//         longitude: "121.023090",
//         name: "T5"
//     },
//     {
//         id:  105,
//         latitude: "14.52311313",
//         longitude: "121.0194573",
//         name: "T6"
//     },
//     {
//         id:  106,
//         latitude: "14.60242292",
//         longitude: "121.0115134",
//         name: "T7"
//     },
//     {
//         id:  107,
//         latitude: "14.60857463",
//         longitude: "121.0185514",
//         name: "T8"
//     },
//     {
//         id:  108,
//         latitude: "14.49111434",
//         longitude: "121.0437482",
//         name: "T9"
//     },
//     {
//         id:  109,
//         latitude: "14.54455953",
//         longitude: "121.1060883",
//         name: "T10"
//     }
// ]


// const amounts = [
//     {
//         id: 1,
//         treasureId: 100,
//         amt: 15
//     },
//     {
//         id: 2,
//         treasureId: 101,
//         amt: 10
//     },
//     {
//         id: 3,
//         treasureId: 102,
//         amt: 15
//     },
//     {
//         id: 4,
//         treasureId: 103,
//         amt: 15
//     },
//     {
//         id: 5,
//         treasureId: 104,
//         amt: 10
//     },
//     {
//         id: 6,
//         treasureId: 105,
//         amt: 15
//     },
//     {
//         id: 7,
//         treasureId: 106,
//         amt: 15
//     },
//     {
//         id: 8,
//         treasureId: 107,
//         amt: 10
//     },
//     {
//         id: 9,
//         treasureId: 108,
//         amt: 15
//     },
//     {
//         id: 10,
//         treasureId: 109,
//         amt: 15
//     },
//     {
//         id: 11,
//         treasureId: 110,
//         amt: 10
//     },
//     {
//         id: 12,
//         treasureId: 111,
//         amt: 15
//     },
//     {
//         id: 13,
//         treasureId: 112,
//         amt: 15
//     },
//     {
//         id: 14,
//         treasureId: 113,
//         amt: 10
//     },
//     {
//         id: 15,
//         treasureId: 114,
//         amt: 15
//     },
//     {
//         id: 16,
//         treasureId: 115,
//         amt: 15
//     },
//     {
//         id: 17,
//         treasureId: 116,
//         amt: 10
//     },
//     {
//         id: 18,
//         treasureId: 117,
//         amt: 15
//     },
//     {
//         id: 19,
//         treasureId: 100,
//         amt: 20
//     },
//     {
//         id: 20,
//         treasureId: 101,
//         amt: 25
//     },
//     {
//         id: 21,
//         treasureId: 102,
//         amt: 20
//     },    
//     {
//         id: 22,
//         treasureId: 103,
//         amt: 25
//     },
//     {
//         id: 23,
//         treasureId: 107,
//         amt:30
//     },
//     {
//         id: 24,
//         treasureId: 108,
//         amt:30
//     },
//     {
//         id: 25,
//         treasureId: 109,
//         amt:30
//     },
// ]

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
        if(params.latitude && params.longitude && params.distance){//check required fields
            if(params.prize || params.prize == 0){
                if(params.prize >= 10 && params.prize <=30 && params.prize%1 == 0){ // check prize if valid
                    if(params.distance == 1 || params.distance == 10){   //check distance if valid
                        return {
                            error: false,
                            prize: params.prize
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
                message: "Please make sure to enter all required fields (latitude, longitude and distance)."
            }
        }
    }


}






