const Garage = require('../src/garage')



let mockIsWorking = false
let mockReportBroken = jest.fn()

const mockNewBike = jest.fn().mockImplementation(() => {
    return {
        isWorking: () => mockIsWorking,
        reportBroken: mockReportBroken,
        reportFix: () => mockIsWorking = true
    }
})


describe("Garage", () => {

    let garage;
    let bike;

    beforeEach(() => {
        garage = new Garage()
        bike = mockNewBike()
    })

    it("It has a storage", () => {
        expect(garage.storage.length).toBe(0)
    })

    it("Can stores a broken bike", () => {
        garage.acquireBrokenBike(bike)
        garage.acquireBrokenBike(bike)
        expect(garage.storage.length).toBe(2)
    })

    it("Can fix a bike", () => {
        garage.acquireBrokenBike(bike)
        expect(garage.storage.length).toBe(1)
        garage.fixBike()
        expect(bike.isWorking()).toBe(true)
        expect(garage.storage.length).toBe(0)
        expect(garage.fixedBike.length).toBe(1)
    })
})