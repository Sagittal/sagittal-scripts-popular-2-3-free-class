import { Comma } from "@sagittal/general"
import { computeBestNotatingComma } from "../../../src/bestNotatingComma/bestNotatingComma"
import { popular23FreeClassesScriptGroupSettings } from "../../../src/globals"

describe("computeBestNotatingComma", (): void => {
    it("returns, of the notating commas, the 'best' one (with the LAAS (least abs apotome slope))", (): void => {
        const notatingCommas = [{ vector: [10, -6, 1, -1] }, { vector: [-9, 6, 1, -1] }] as Comma[]

        const actual = computeBestNotatingComma(notatingCommas)

        const expected = { vector: [-9, 6, 1, -1] } as Comma
        expect(actual).toEqual(expected)
    })

    it("also works for LATE (least abs 3-exponent", (): void => {
        const notatingCommas = [{ vector: [10, -6, 1, -1] }, { vector: [-9, 6, 1, -1] }] as Comma[]

        popular23FreeClassesScriptGroupSettings.useLate = true
        const actual = computeBestNotatingComma(notatingCommas)

        const expected = { vector: [10, -6, 1, -1] } as Comma
        expect(actual).toEqual(expected)
    })
})
