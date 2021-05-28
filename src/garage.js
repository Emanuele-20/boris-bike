class Garage {

    constructor(){
        this.storage = []
        this.fixedBike = []
    }

    acquireBrokenBike(brokenBike){
        this.storage.push(brokenBike)
    }

    fixBike(){
        let bikeToFix = this.storage.pop();
        bikeToFix.reportFix()
        this.fixedBike.push(bikeToFix)
    }


}

module.exports = Garage;