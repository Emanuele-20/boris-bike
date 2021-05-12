const Bike = require('../src/bike')
const DockingStation = require('../src/dockingStation')
jest.mock("../src/bike.js")

describe("Docking Station", () => {

    test("Checking if the Docking station is an object", () => {
        let newDockingStation =  new DockingStation()
        expect(typeof newDockingStation).toBe("object")
    })

    xtest("Check if a new istance of DockinsgStation accepts a releaseABike() method", () => {
        let newDockingStation =  new DockingStation()
        expect(newDockingStation.releaseABike()).toBe(true)
    })

    test("Returns a working bike when a releaseABike() metdhos is called", ()=>{
        let newDockingStation =  new DockingStation()
        let bike = newDockingStation.releaseABike()
        expect(bike).toBeInstanceOf(Bike)
        expect(Bike).toHaveBeenCalledTimes(1) //jest.mock("../src/bike.js")
    })
    
})