const Bike = require("./bike.js");
class DockingStation {

    constructor(){
        this.capacity = []
    }

    releaseABike(){

        if (this.dockIsEmpty()){
            return ("No bikes available")
        } else {
            return this.capacity.pop()
        }
        
    }
    
    dock(bike){

        if(this.dockIsFull()){
            return "Docking station full"
        } else {
            this.capacity.push(bike)
        }
        return bike
    }


    checkCapacity(){

        return this.capacity.length

    }


    dockIsFull(){

        if(this.capacity.length >= 20){
            return true
        }

    }

    dockIsEmpty(){

        if(this.capacity.length  === 0 ){
            return true
        }
        
    }

}

module.exports = DockingStation;