const DockingStation = require('../src/dockingStation')
const Van = require('../src/van')
const Garage = require('../src/garage')

// in Jest, if you are using a variable inside of a mock, it MUST start with mock____
// so the variable isWorking becomes mockIsWorking etc

let mockIsWorking = true
let mockReportBroken = jest.fn()

// jest.mock("modulePath", () => { ALWAYS A FUNCTION })

const mockNewBike = jest.fn().mockImplementation(() => {
    return {
        isWorking: () => mockIsWorking,
        reportBroken: mockReportBroken,
        reportFix: () => mockIsWorking = true
    }// jest has no way to mock the NEW keyword, so we return an object with the bike characteristic
})


describe("Docking Station", () => {

    let dockingStation;
    let bike;

    beforeEach(() => {
        dockingStation = new DockingStation()
        bike = mockNewBike(),
        van = new Van()
        garage = new Garage()
    })

    it("releaseABike removes the bike from the station", ()=>{
        dockingStation.dock(bike)

        expect(dockingStation.bikes.length).toEqual(1)

        dockingStation.releaseABike(bike)

        expect(dockingStation.bikes.length).toEqual(0)
    })

    it("Returns the bike that was docked after docking", () => {
        expect(dockingStation.dock(bike)).toBe(bike)
    })

    it("Returns error if there are no bike available", () => {
        expect(dockingStation.releaseABike()).toBe("No bikes available") // by default no bikes, so no bikes available
    })

    it("Returns an error if we reach the maximum docking station capacity", () => {
        dockingStation = new DockingStation(2) // set the capacity to 2
        dockingStation.dock(bike)
        dockingStation.dock(bike)
        expect(dockingStation.dock(bike)).toBe("Docking station full") // the third bike should fail
    })    

    it("Has a default capacity", () => {
        expect(dockingStation.capacity).toBe(20)
    })

    it("Changes the capacity", ()=> {
        dockingStation.changeCapacity(35)
        expect(dockingStation.capacity).toBe(35)
    })

    it("Not release a broken bike", () =>{
    
        mockIsWorking = false;

        dockingStation.dock(bike)

        const action = dockingStation.releaseABike(bike)
        
        expect(action).toEqual("Can't release broken bike")
        
    })
    // was working just because in REPL the var name collide
    // use const and not let 
    // npm run test --watch

    it("Can receive a fixed bike fron the van", () => {
        // mockIsWorking = false // mocking broken bike // "false" will be active for the others tests too
        // van.takeBrokenBike(bike)
        // expect(van.bikes.length).toBe(1)
        // van.sendToGarage(bike)
        // expect(van.bikes.length).toBe(0)
        // garage.acquireBrokenBike(bike)
        // expect(garage.storage.length).toBe(1)
        // garage.fixBike()
        // expect(bike.isWorking()).toBe(true)
        // expect(garage.storage.length).toBe(0)
        // expect(garage.fixedBike.length).toBe(1)
        // garage.releaseFixedBike(bike)
        // van.acquireFromGarage(bike)
        // expect(van.bikes.length).toBe(1) // fixed bike collected 
        // van.sendToTheDockingStation(bike)
        // expect(van.bikes.length).toBe(0)
        // expect(dockingStation.bikes.length).toBe(0)
        dockingStation.getFixedBikeFromVan(bike)
        expect(dockingStation.bikes.length).toBe(1)
    })
})

//npm run test -- dockingStation.test.js      isolate just one file test
//npm run test --watch    