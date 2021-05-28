class Garage {

    constructor(){
        this.storage = []
    }

    acquireBrokenBike(brokenBike){
        this.storage.push(brokenBike)
    }
}

module.exports = Garage;