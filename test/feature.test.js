const Bike = require('../src/bike')
const DockingStation = require('../src/dockingStation')

describe("Feature Tests",()=> {

    it("Release a bike", ()=> {
        let station = new DockingStation()
        let bike = station.releaseABike()
        expect(bike).toBeInstanceOf(Bike)

    })
    
})