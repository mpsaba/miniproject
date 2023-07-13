var db = require('./db/mysql');

db.initConnection();

// var table = require('./models/user.model');
// table.sync({ force: true }).then(() => {
//     return table.create({
//         id: 3000,
//         name: "U1",
//         age: 21,
//         password: "123123",
//         email: "u1@kitra.abc"
//     }).then ( ()=> {
//         return table.create({
//             id: 3001,
//             name: "U2",
//             age: 51,
//             password: "234234",
//             email: "u2@kitra.abc"
//         }).then ( ()=> {
//             return table.create({
//                 id: 3002,
//                 name: "U3",
//                 age: 31,
//                 password: "345345",
//                 email: "u3@kitra.abc"
//             }).then ( ()=> {
//                 return table.create({
//                     id: 3003,
//                     name: "U4",
//                     age: 18,
//                     password: "456456",
//                     email: "u4@kitra.abc"
//                 }).then ( ()=> {
//                     return table.create({
//                         id: 3004,
//                         name: "U5",
//                         age: 21,
//                         password: "567567",
//                         email: "u5@kitra.abc"
//                     }).then ( ()=> {
//                         console.log("created ./models/user.model'");
//                         return table.create({
//                             id: 3005,
//                             name: "U6",
//                             age: 35,
//                             password: "678678",
//                             email: "u6@kitra.abc"
//                         });
//                     }); 
//                 });  
//             });  
//         });
//     }); 
// });




// var treasureTable = require('./models/treasure.model');
// treasureTable.sync({ force: true }).then(() => {
//     return treasureTable.create({
//         id:  100,
//         latitude: "14.54376481",
//         longitude: "121.0199117",
//         name: "T1"
//     }).then ( ()=> {
//         return treasureTable.create({
//             id:  101,
//             latitude: "14.55320766",
//             longitude: "121.0557745",
//             name: "T2"
//         }).then ( ()=> {
//             return treasureTable.create({
//                 id:  102,
//                 latitude: "14.54464357",
//                 longitude: "121.0203656",
//                 name: "T3"
//             }).then ( ()=> {
//                 return treasureTable.create({
//                     id:  103,
//                     latitude: "14.58726159",
//                     longitude: "120.9795048",
//                     name: "T4"
//                 }).then ( ()=> {
//                     return treasureTable.create({
//                         id:  104,
//                         latitude: "14.57320327",
//                         longitude: "121.0230904",
//                         name: "T5"
//                     }).then ( ()=> {
//                         return treasureTable.create({
//                             id:  105,
//                             latitude: "14.52311313",
//                             longitude: "121.0194573",
//                             name: "T6" 
//                         }).then ( ()=> {
//                             return treasureTable.create({
//                                 id:  106,
//                                 latitude: "14.60242292",
//                                 longitude: "121.0115134",
//                                 name: "T7"
//                             }).then ( ()=> {
//                                 return treasureTable.create({
//                                     id:  107,
//                                     latitude: "14.60857463",
//                                     longitude: "121.0185514",
//                                     name: "T8"
//                                 }).then ( ()=> {
//                                     return treasureTable.create({
//                                         id:  108,
//                                         latitude: "14.49111434",
//                                         longitude: "121.0437482",
//                                         name: "T9"
//                                     }).then ( ()=> {
//                                         return treasureTable.create({
//                                             id:  109,
//                                             latitude: "14.54455953",
//                                             longitude: "121.1060883",
//                                             name: "T10"
//                                         }).then ( ()=> {
//                                             return treasureTable.create({
//                                                 id:  110,
//                                                 latitude: "14.5879814",
//                                                 longitude: "121.058208",
//                                                 name: "T11"
//                                             }).then ( ()=> {
//                                                 return treasureTable.create({   
//                                                     id:  111,
//                                                     latitude: "14.54886493",
//                                                     longitude: "121.0336393",
//                                                     name: "T12"
//                                                 }).then ( ()=> {
//                                                     return treasureTable.create({
//                                                         id:  112,
//                                                         latitude: "14.53715059",
//                                                         longitude: "120.9904302",
//                                                         name: "T13"
//                                                     }).then ( ()=> {
//                                                         return treasureTable.create({
//                                                             id:  113,
//                                                             latitude: "14.52579666",
//                                                             longitude: "121.0208688",
//                                                             name: "T14"
//                                                         }).then ( ()=> {
//                                                             return treasureTable.create({
//                                                                 id:  114,
//                                                                 latitude: "14.51709988",
//                                                                 longitude: "120.9810021",
//                                                                 name: "T15"
//                                                             }).then ( ()=> {
//                                                                 return treasureTable.create({
//                                                                     id:  115,
//                                                                     latitude: "4.50200687",
//                                                                     longitude: "120.9916181",
//                                                                     name: "T16"
//                                                                 }).then ( ()=> {
//                                                                     return treasureTable.create({
//                                                                         id:  116,
//                                                                         latitude: "14.52112441",
//                                                                         longitude: "121.0427714",
//                                                                         name: "T17"                                                                            
//                                                                     }).then ( ()=> {
//                                                                         console.log("created ./models/treasure.model'");
//                                                                         return treasureTable.create({
//                                                                             id:  117,
//                                                                             latitude: "14.47720766",
//                                                                             longitude: "120.9867927",
//                                                                             name: "T18"
//                                                                         });
//                                                                     }); 
//                                                                 });
//                                                             }); 
//                                                         }); 
//                                                     }); 
//                                                 }); 
//                                             }); 
//                                         }); 
//                                     }); 
//                                 }); 
//                             }); 
//                         }); 
//                     }); 
//                 }); 
//             });  
//         });  
//     });
// });


// var moneyTable = require('./models/money_value.model');
// moneyTable.sync({ force: true }).then(() => {
//     return moneyTable.create({
//         id: 1,
//         treasureId: 100,
//         amt: 15
//     }).then ( ()=> {
//         return moneyTable.create({
//             id: 2,
//             treasureId: 101,
//             amt: 10
//         }).then ( ()=> {
//             return moneyTable.create({
//                 id: 3,
//                 treasureId: 102,
//                 amt: 15
//             }).then ( ()=> {
//                 return moneyTable.create({
//                     id: 4,
//                     treasureId: 103,
//                     amt: 15
//                 }).then ( ()=> {
//                     return moneyTable.create({
//                         id: 5,
//                         treasureId: 104,
//                         amt: 10
//                     }).then ( ()=> {
//                         return moneyTable.create({
//                             id: 6,
//                             treasureId: 105,
//                             amt: 15
//                         }).then ( ()=> {
//                             return moneyTable.create({
//                                 id: 7,
//                                 treasureId: 106,
//                                 amt: 15
//                             }).then ( ()=> {
//                                 return moneyTable.create({
//                                     id: 8,
//                                     treasureId: 107,
//                                     amt: 10
//                                 }).then ( ()=> {
//                                     return moneyTable.create({
//                                         id: 9,
//                                         treasureId: 108,
//                                         amt: 15
//                                     }).then ( ()=> {
//                                         return moneyTable.create({
//                                             id: 10,
//                                             treasureId: 109,
//                                             amt: 15
//                                         }).then ( ()=> {
//                                             return moneyTable.create({
//                                                 id: 11,
//                                                 treasureId: 110,
//                                                 amt: 10
//                                             }).then ( ()=> {
//                                                 return moneyTable.create({
//                                                     id: 12,
//                                                     treasureId: 111,
//                                                     amt: 15
//                                                 }).then ( ()=> {
//                                                     return moneyTable.create({
//                                                         id: 13,
//                                                         treasureId: 112,
//                                                         amt: 15
//                                                     }).then ( ()=> {
//                                                         return moneyTable.create({
//                                                             id: 14,
//                                                             treasureId: 113,
//                                                             amt: 10
//                                                         }).then ( ()=> {
//                                                             return moneyTable.create({
//                                                                 id: 15,
//                                                                 treasureId: 114,
//                                                                 amt: 15
//                                                             }).then ( ()=> {
//                                                                 return moneyTable.create({
//                                                                     id: 16,
//                                                                     treasureId: 115,
//                                                                     amt: 15
//                                                                 }).then ( ()=> {
//                                                                     return moneyTable.create({
//                                                                         id: 17,
//                                                                         treasureId: 116,
//                                                                         amt: 10                                                  
//                                                                     }).then ( ()=> {
//                                                                         return moneyTable.create({
//                                                                             id: 18,
//                                                                             treasureId: 117,
//                                                                             amt: 15                                                                                
//                                                                         }).then ( ()=> {
//                                                                             return moneyTable.create({
//                                                                                 id: 19,
//                                                                                 treasureId: 100,
//                                                                                 amt: 20
//                                                                             }).then ( ()=> {
//                                                                                 return moneyTable.create({
//                                                                                     id: 20,
//                                                                                     treasureId: 101,
//                                                                                     amt: 25
//                                                                                 }).then ( ()=> {
//                                                                                     return moneyTable.create({
//                                                                                         id: 21,
//                                                                                         treasureId: 102,
//                                                                                         amt: 20
//                                                                                     }).then ( ()=> {
//                                                                                         return moneyTable.create({
//                                                                                             id: 22,
//                                                                                             treasureId: 103,
//                                                                                             amt: 25
//                                                                                         }).then ( ()=> {
//                                                                                             return moneyTable.create({
//                                                                                                 id: 23,
//                                                                                                 treasureId: 107,
//                                                                                                 amt:30
//                                                                                             }).then ( ()=> {
//                                                                                                 return moneyTable.create({
//                                                                                                     id: 24,
//                                                                                                     treasureId: 108,
//                                                                                                     amt:30
//                                                                                                 }).then ( ()=> {
//                                                                                                     console.log("created ./models/money_value.model'");
//                                                                                                     return moneyTable.create({
//                                                                                                         id: 25,
//                                                                                                         treasureId: 109,
//                                                                                                         amt:30
//                                                                                                     });
//                                                                                                 });
//                                                                                             });
//                                                                                         });
//                                                                                     });
//                                                                                 });
//                                                                             });
//                                                                         });
//                                                                     }); 
//                                                                 });
//                                                             }); 
//                                                         }); 
//                                                     }); 
//                                                 }); 
//                                             }); 
//                                         }); 
//                                     }); 
//                                 }); 
//                             }); 
//                         }); 
//                     }); 
//                 }); 
//             });  
//         }); 
//     });     
// });






// table.sync({ force: false }).then(() => {
//     return table.create({
//         id: 3000,
//         name: "U1",
//         age: 21,
//         password: "123123",
//         email: "u1@kitra.abc"
//     }).then ( ()=> {
//         return table.create({
//             id: 3001,
//             name: "U2",
//             age: 51,
//             password: "234234",
//             email: "u2@kitra.abc"
//         }).then ( ()=> {
//             return table.create({
//                 id: 3002,
//                 name: "U3",
//                 age: 31,
//                 password: "345345",
//                 email: "u3@kitra.abc"
//             }).then ( ()=> {
//                 return table.create({
//                     id: 3003,
//                     name: "U4",
//                     age: 18,
//                     password: "456456",
//                     email: "u4@kitra.abc"
//                 }).then ( ()=> {
//                     return table.create({
//                         id: 3004,
//                         name: "U5",
//                         age: 21,
//                         password: "567567",
//                         email: "u5@kitra.abc"
//                     }).then ( ()=> {
//                         console.log("created ./models/user.model'");
//                         return table.create({
//                             id: 3005,
//                             name: "U6",
//                             age: 35,
//                             password: "678678",
//                             email: "u6@kitra.abc"
//                         });
//                     });  
//                 })
//             })
//         })
//     })
// });