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

})