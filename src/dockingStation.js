const Bike = require("./bike.js");

class DockingStation {


    releaseABike(){
        return new Bike
    }
    //method that returns an istance of another class, returns other objects

    dock(bike){
        return bike
    }
    // method that dock a bike instance

}

module.exports = DockingStation;