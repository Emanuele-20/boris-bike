const DockingStation = require('../src/dockingStation')

describe("Docking Station", ()=> {
    test("Checking if the Docking station is an object", () => {
        let newDockingStation =  new DockingStation()
        expect(typeof newDockingStation).toBe("object")
    })

    test("Check if a new istance of DockinsgStation accepts a releaseABike() method", () => {
        let newDockingStation =  new DockingStation()
        expect(typeof newDockingStation).toBe("object")
    })
    
})