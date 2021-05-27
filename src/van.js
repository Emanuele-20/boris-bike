class Van {

    constructor(capacity = 5){
        this.bikes = []
        this.capacity = capacity
    }

    takeBrokenBike(brokenBike){
        if(this.bikes.length < this.capacity){
            this.bikes.push(brokenBike)
        } else {
            return "The van is full"
        }
    }




}

module.exports = Van;