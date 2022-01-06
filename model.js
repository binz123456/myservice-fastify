
//http://localhost:3000/bicycle/1 - when we go to this url, we get the response in json format

// out put is like this
// {"brand":"hero","color":"green"}   
"use strict"

module.exports = {

    bicycle : bicycleModel()
}

function bicycleModel() {

const db = {
    1: { brand : "hero" , color : "green"} ,
    2: { brand : "bata" , color : "white"}
}

return {
    read
}


function read(id , cb){
    // when error throws
    //put an iivalid id
    //err object is used
    if(!(db.hasOwnProperty(id))) {
const err = Error("not found")
// setImmediate(() => cb(err))

setImmediate(() => cb(Error())) 
return

    }
//  setImmediate(() => cb(null , db[id]))   
setImmediate(() => cb(Error())) 

}

}