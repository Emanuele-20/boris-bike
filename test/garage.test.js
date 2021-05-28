const Garage = require('../src/garage')

describe("Garage", () => {
    it("It has a storage", () => {
        const garage = new Garage()
        expect(garage.storage.length).toBe(0)
    })
})