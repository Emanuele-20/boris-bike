class DockingStation {
    constructor(capacity = 20){
        this.bikes = []
        this.capacity = capacity
    }

    releaseABike(){
        if (this._dockIsEmpty()){
            return ("No bikes available")
        } else {
            return this.bikes.pop()
        }
    }
    
    dock(bike){
        if(this._dockIsFull()){
            return "Docking station full"
        } else {
            this.bikes.push(bike)
        }
        return bike
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
        if(this.bikes.length  === 0 ){
            return true
        }
    }

    changeCapacity(num){
        return this.capacity = num
    }

}
module.exports = DockingStation;