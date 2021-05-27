const Bike = require('../src/bike')
class DockingStation {

    constructor(capacity = 20){
        this.bikes = []
        this.capacity = capacity
    }

    releaseABike(bikeToRelease){
        
        if (this._dockIsEmpty()){
            return ("No bikes available")
        } else if(bikeToRelease.isWorking() == false){
            return "Can't release broken bike"
        } else {
            return this.bikes.pop() // returns the element removed from the array.
        }
    }
    
    dock(bikeToDock){
        if(this._dockIsFull()){
            return "Docking station full"
        } else {
            this.bikes.push(bikeToDock)
            //modify the capacity
        }
        return bikeToDock
    }

    attualCapacity(){
        return this.bikes.length
    }

    _dockIsFull(){
        if(this.bikes.length >= this.capacity){
            return true
        }
    }

    _dockIsEmpty(){
        if(this.bikes.length === 0 ){
            return true
        }
    }

    // _isBroken(){
    //     if (this.bikes[0].working == false){
    //         return true
    //     }
    // }

    changeCapacity(num){
        return this.capacity = num
    }

}
module.exports = DockingStation;