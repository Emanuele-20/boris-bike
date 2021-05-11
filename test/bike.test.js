const Bike = require('../src/bike')

describe("Bike class", () => {
    it("Has a bike class object", () =>{
        bike = new Bike()
        expect(typeof bike).toBe("object")
    })

    it("Has a bike class object and respond to a isWorking method", () =>{
        bike = new Bike()
        expect(bike.isWorking()).toBe(true)
    })

})