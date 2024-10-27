import { Comma } from "@sagittal/general"
import { isLate } from "../../../src/bestNotatingComma/isLate"

describe("isLate", (): void => {
    it("return false if the comma does not have less ATE than the existing best comma", (): void => {
        const notatingComma = { vector: [-9, 6, 1, -1] } as Comma
        const bestNotatingComma = { vector: [10, -6, 1, -1] } as Comma

        const actual = isLate(notatingComma, bestNotatingComma)

        expect(actual).toBeFalsy()
    })

    it("return true if the comma has less ATE than the existing best comma", (): void => {
        const notatingComma = { vector: [10, -6, 1, -1] } as Comma
        const bestNotatingComma = { vector: [-9, 6, 1, -1] } as Comma

        const actual = isLate(notatingComma, bestNotatingComma)

        expect(actual).toBeTruthy()
    })
})
