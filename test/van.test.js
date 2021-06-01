const DockingStation = require('../src/dockingStation')
const Van = require('../src/van')
const Garage = require('../src/garage')

let mockIsWorking = true
let mockReportBroken = jest.fn()

const mockNewBike = jest.fn().mockImplementation(() => {
    return {
        isWorking: () => mockIsWorking,
        reportBroken: mockReportBroken,
        fix: () => mockIsWorking = true
    }
})

describe("Van", () => {

    let dockingStation;
    let bike;
    let van;
    let garage;


    beforeEach(() => {
        dockingStation = new DockingStation()
        van = new Van()
        bike = mockNewBike()
        garage = new Garage()
    })

    it("Can brings broken bike from docking station", () => {
        mockIsWorking = false // mocking broken bike // "false" will be active for the others tests too
        dockingStation.dock(bike)
        van.takeBrokenBike(bike)
        expect(van.bikes.length).toBe(1)
    })

    it("Can brings JUST broken bike from docking station", () => {
        mockIsWorking = true //mocking a working bike
        dockingStation.dock(bike)
        expect(van.takeBrokenBike(bike)).toBe("This bike is not broken")
    })    

    it("Cannot store more than 5 bikes", () => {
        mockIsWorking = false
        for(let i = 0; i < 6 ; i++){
            dockingStation.dock(bike)
        }
        for(let i = 0; i < 5 ; i++){
            van.takeBrokenBike(bike)
        }
        expect(van.bikes.length).toBe(5)
        expect(van.takeBrokenBike(bike)).toBe("No more space for other bikes")
    })

    it("Sends bikes to the garage", ()=> {
        // mockIsWorking = false // mocking broken bike // "false" will be active for the others tests too
        // dockingStation.dock(bike)
        // van.takeBrokenBike(bike)
        // expect(van.bikes.length).toBe(1)
        van.sendToGarage(bike)
        expect(van.bikes.length).toBe(0)
        garage.acquireBrokenBike(bike)
        expect(garage.storage.length).toBe(1)
    })

    it("Can collect working bikes from the garage", () => {
        // mockIsWorking = false // mocking broken bike // "false" will be active for the others tests too
        // dockingStation.dock(bike)
        // van.takeBrokenBike(bike)
        // expect(van.bikes.length).toBe(1)
        // van.sendToGarage(bike)
        // expect(van.bikes.length).toBe(0)
        // garage.acquireBrokenBike(bike)
        // expect(garage.storage.length).toBe(1)
        // //console.log(garage.storage)
        // garage.fixBike()
        // expect(bike.isWorking()).toBe(true)
        // expect(garage.storage.length).toBe(0)
        // expect(garage.fixedBikes.length).toBe(1)
        // garage.releaseFixedBike(bike)
        van.acquireFromGarage(bike)
        expect(van.bikes.length).toBe(1) // fixed bike collected 
    })

    it("Can distribuite to the docking station a fixed bike", () => {
        // mockIsWorking = false // mocking broken bike // "false" will be active for the others tests too
        // dockingStation.dock(bike)
        // van.takeBrokenBike(bike)
        // expect(van.bikes.length).toBe(1)
        // van.sendToGarage(bike)
        // expect(van.bikes.length).toBe(0)
        // garage.acquireBrokenBike(bike)
        // expect(garage.storage.length).toBe(1)
        // garage.fixBike()
        // expect(bike.isWorking()).toBe(true)
        // expect(garage.storage.length).toBe(0)
        // expect(garage.fixedBikes.length).toBe(1)
        // garage.releaseFixedBike(bike)
        // van.acquireFromGarage(bike)
        // expect(van.bikes.length).toBe(1) // fixed bike collected 
        van.sendToTheDockingStation(bike)
        expect(van.bikes.length).toBe(0)
    })
})