const Bike = require('../src/bike')
const DockingStation = require('../src/dockingStation')

beforeEach(() => {
    dockingStation = new DockingStation()
    bike = new Bike()
})

describe("Boris Bike", () => {
    it("Returns 0 as a default capacity value", () => {
        expect(dockingStation.attualCapacity()).toBe(0)
    })
    
    it("Tests if I can dock a bike", () => {
        dockingStation.dock(bike)
        expect(dockingStation.attualCapacity()).toBe(1)
    })

    it("Tests if I can release a bike", () => {
        dockingStation.dock(bike)
        expect(dockingStation.bikes.length).toEqual(1)
        dockingStation.releaseABike(bike)
        expect(dockingStation.bikes.length).toEqual(0)
    })

    it("Return an error if we want to dock a bike in a full docking station", () =>{
        let newDockingStation =  new DockingStation()  
        let bike = new Bike()
        for (let i = 0; i <= newDockingStation.capacity; i++){
           newDockingStation.dock(bike)
        }
        expect(newDockingStation.dock(bike)).toBe("Docking station full")
    })
})