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
        //console.log(bikeToFix)
        bikeToFix.reportFix()
        //bikeToFix.working = true
        this.fixedBike.push(bikeToFix)
    }

    releaseFixedBike(fixedBike){
        fixedBike = this.fixedBike.pop()
    }

}

module.exports = Garage;