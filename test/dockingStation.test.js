const { expect, test } = require('@jest/globals')
const Bike = require('../src/bike')
const DockingStation = require('../src/dockingStation')
jest.mock("../src/bike.js")



describe("Docking Station", () => {

    xtest("Returns a bike when a releaseABike() method is called", ()=>{
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

    it("Returns error if there are no bike available", () => {
        let newDockingStation =  new DockingStation()  
        expect(newDockingStation.releaseABike()).toBe("No bikes available")
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
        for (let i = 0; i <= 20; i++){
            console.log(newDockingStation.dock(bike))
        }
        expect(newDockingStation.dock(bike)).toBe("Docking station full")
    })



})