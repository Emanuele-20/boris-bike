class Van {

    constructor(capacity = 5){
        this.bikes = []
        
    }

    takeBrokenBike(brokenBike){
        if(this._isBroken(brokenBike)){
            this.bikes.push(brokenBike)
        } else if(!this._isBroken(brokenBike)){
            return "This bike is not broken"
        }
    }   

    _isBroken(bikeToCheck){
        if (bikeToCheck.isWorking() == false){
            return true
        }
    }




}

module.exports = Van;