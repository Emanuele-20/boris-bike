const Bike = require("./bike.js");
class DockingStation {

    releaseABike(){
        return new Bike()
    }
    
    dock(bike){
        return bike
    }

}

module.exports = DockingStation;