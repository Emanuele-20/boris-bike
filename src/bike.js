class Bike {

    constructor(){
        this.broken = false
    }

    isWorking(){
        return true 
    }

    reportBroken(){
        this.broken = true
    }

    
}
module.exports = Bike;