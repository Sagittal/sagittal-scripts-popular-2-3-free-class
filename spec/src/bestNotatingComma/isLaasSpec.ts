import {Comma} from "@sagittal/general"
import {isLaas} from "../../../src/bestNotatingComma/isLaas"

describe("isLaas", (): void => {
    it("return true if the comma has less AAS than the existing best comma", (): void => {
        const notatingComma = {pev: [-9, 6, 1, -1]} as Comma
        const bestNotatingComma = {pev: [10, -6, 1, -1]} as Comma

        const actual = isLaas(notatingComma, bestNotatingComma)

        expect(actual).toBeTruthy()
    })

    it("return false if the comma does not have less AAS than the existing best comma", (): void => {
        const notatingComma = {pev: [10, -6, 1, -1]} as Comma
        const bestNotatingComma = {pev: [-9, 6, 1, -1]} as Comma

        const actual = isLaas(notatingComma, bestNotatingComma)

        expect(actual).toBeFalsy()
    })
})
