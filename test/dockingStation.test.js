const Bike = require('../src/bike')
const DockingStation = require('../src/dockingStation')
jest.mock("../src/bike.js")



describe("Docking Station", () => {

    xtest("Checking if the Docking station is an object", () => {
        let newDockingStation =  new DockingStation()
        expect(typeof newDockingStation).toBe("object")
    })

    xtest("Check if a new istance of DockinsgStation accepts a releaseABike() method", () => {
        let newDockingStation =  new DockingStation()
        expect(newDockingStation.releaseABike()).toBe(true)
    })

    test("Returns a bike when a releaseABike() method is called", ()=>{
        let newDockingStation =  new DockingStation()
        let bike = newDockingStation.releaseABike()
        expect(bike).toBeInstanceOf(Bike)
        expect(Bike).toHaveBeenCalledTimes(1) //jest.mock("../src/bike.js")
    })
    
    
    xit("Return a working new bike", () => {
        let newDockingStation =  new DockingStation()
        let bike = newDockingStation.releaseABike()
        expect(bike).toBeInstanceOf(Bike)
        //let mockBike = bike.mock.isWorking;
        expect(mockBike).toHaveBeenCalledTimes(1)
    })

    xit("Return a dock method with one argumen", () => {
        const newDockingStation =  new DockingStation()   
        const newDock = newDockingStation.dock()
        expect(newDock).toBe(bike)
    })

    it("Returns docked bikes", () => {
        const newDockingStation =  new DockingStation()  
        let redBike = newDockingStation.releaseABike() //or new Bike()
        newDockingStation.dock(redBike)
        expect(newDockingStation.dock(redBike)).toBe(redBike)
    })

})