const Bike = require('../src/bike')

beforeEach( ()=> {
    bike = new Bike()
})

describe("Bike class", () => {


    it("Has a bike class object", () =>{
        expect(typeof bike).toBe("object")
    })

    it("Has a bike class object and respond to a isWorking method", () =>{
        expect(bike.isWorking()).toBe(true)
    })

    it("Report a broken bike when return it", () => {
        expect(typeof bike.reportBroken).toBe('function')
        bike.reportBroken()
        expect(bike.working).toBe(false)
    })





})