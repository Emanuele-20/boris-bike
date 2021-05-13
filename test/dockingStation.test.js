const { expect, test } = require('@jest/globals')
const Bike = require('../src/bike')
const DockingStation = require('../src/dockingStation')
jest.mock("../src/bike.js")



describe("Docking Station", () => {

    test("Returns a bike when a releaseABike() method is called", ()=>{
        let newDockingStation =  new DockingStation()
        let bike = newDockingStation.releaseABike()
        expect(bike).toBeInstanceOf(Bike)
        expect(Bike).toHaveBeenCalledTimes(1) //jest.mock("../src/bike.js")
    })

    it("Returns docked bikes", () => {
        const newDockingStation =  new DockingStation()  
        let redBike = new Bike() //or new Bike()
        newDockingStation.dock(redBike)
        expect(newDockingStation.dock(redBike)).toBe(redBike)
    })

})