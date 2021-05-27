const Bike = require('../src/bike')
const DockingStation = require('../src/dockingStation')
const Van = require('../src/van')

let mockIsWorking = true
let mockReportBroken = jest.fn()

const mockNewBike = jest.fn().mockImplementation(() => {
    return {
        isWorking: () => mockIsWorking,
        reportBroken: mockReportBroken
    }
})


describe("Van", () => {

    let dockingStation;
    let bike;
    let van;


    beforeEach(() => {
        dockingStation = new DockingStation()
        van = new Van()
        bike = mockNewBike()
    })

    it("Can brings broken bike from docking station", () => {
        mockIsWorking = false // mocking broken bike
        dockingStation.dock(bike)
        van.takeBrokenBike(bike)
        expect(van.bikes.length).toBe(1)
    })

    it("Can brings JUST broken bike from docking station", () => {
        mockIsWorking = true //mocking a good bike
        dockingStation.dock(bike)
        expect(van.takeBrokenBike(bike)).toBe("This bike is not broken")
    })

    xit("Returns an error if we reach the maximum van's capacity", () => {
        mockIsWorking = false
        dockingStation = new DockingStation(3)
        dockingStation.dock(bike)
        dockingStation.dock(bike)
        dockingStation.dock(bike)
        expect(dockingStation.bikes.length).toBe(3)
        van = new Van(3)
        van.takeBrokenBike(bike)
        van.takeBrokenBike(bike)
        van.takeBrokenBike(bike)
        expect(van.bikes.length).toBe(3)
        
    })  


})