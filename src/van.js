class Van {

    constructor(capacity = 5){
        this.bikes = []
        this.capacity = capacity
    }

    takeBrokenBike(brokenBike){
        if((this._isBroken(brokenBike)) && (this.bikes.length < this.capacity)){
            this.bikes.push(brokenBike)
        } else if((this._isBroken(brokenBike)) && (this.bikes.length = this.capacity)){
            return "No more space for other bikes"
        } else {
            if(!this._isBroken(brokenBike)){
            return "This bike is not broken"
            }
        }
    }   

    _isBroken(bikeToCheck){
        if (bikeToCheck.isWorking() == false){
            return true
        }
    }

    // _vanIsFull(){
    //     if(this.bikes.length >= this.capacity){
    //         return true
    //     }
    // }



}

module.exports = Van;