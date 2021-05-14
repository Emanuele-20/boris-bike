const Bike = require('../src/bike')
const DockingStation = require('../src/dockingStation')
jest.mock("../src/bike.js")

beforeEach(() => {
    dockingStation = new DockingStation()
    bike = new Bike()
})

describe("Docking Station", () => {

    xtest("Returns a bike when a releaseABike() method is called", ()=>{
        let newDockingStation =  new DockingStation()
        let bike = newDockingStation.releaseABike()
        expect(bike).toBeInstanceOf(Bike)
        expect(Bike).toHaveBeenCalledTimes(1) //jest.mock("../src/bike.js")
    })

    it("Returns a specific docked bikes", () => {
        let redBike = new Bike()
        expect(dockingStation.dock(redBike)).toBe(redBike)
    })

    it("Returns error if there are no bike available", () => {
        expect(dockingStation.releaseABike()).toBe("No bikes available")
        //Assuming we start with an empty dock 
    })

    xit("Returns an error if we reach the maximum docking station capacity", () => {
        let newDockingStation =  new DockingStation()  
        let bike = new Bike()
        newDockingStation.dock(bike)
        newDockingStation.dock(bike)
        expect(newDockingStation.dock(bike)).toBe("Docking station full")
        //Assuming we had an two bike dock limit
    })

    it("Return an error if we want to dock a bike in a full docking station", () =>{
        let newDockingStation =  new DockingStation()  
        let bike = new Bike()
        for (let i = 0; i <= newDockingStation.capacity; i++){
            console.log(newDockingStation.dock(bike))
        }
        expect(newDockingStation.dock(bike)).toBe("Docking station full")
    })

    it("Has a default capacity", () => {
        expect(dockingStation.capacity).toBe(20)
    })

    it("Changes the capacity", ()=> {
        dockingStation.changeCapacity(35)
        expect(dockingStation.capacity).toBe(35)
    })

    
})