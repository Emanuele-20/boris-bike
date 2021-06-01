class Garage {

    constructor(){
        this.storage = []
        this.fixedBikes = []
    }

    acquireBrokenBike(brokenBike){
        this.storage.push(brokenBike)
    }

    fixBike(){
        let bikeToFix = this.storage.pop();
        bikeToFix.fix()
        this.fixedBikes.push(bikeToFix)
    }

    releaseFixedBike(fixedBike){
        fixedBike = this.fixedBikes.pop()
    }

}

module.exports = Garage;