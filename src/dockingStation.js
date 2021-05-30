class DockingStation {



    constructor(capacity = 20){
        this.bikes = []
        this.capacity = capacity
    }

    releaseABike(bikeToRelease){
        
        if (this._dockIsEmpty()){
            return ("No bikes available")
        } else if(this._isBroken(bikeToRelease)){
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

    changeCapacity(num){
        return this.capacity = num
    }

    getFixedBikeFromVan(fixedBike){
        this.bikes.push(fixedBike)
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

    _isBroken(bikeToRelease){
        if (bikeToRelease.isWorking() == false){
            return true
        }
    }

}
module.exports = DockingStation;