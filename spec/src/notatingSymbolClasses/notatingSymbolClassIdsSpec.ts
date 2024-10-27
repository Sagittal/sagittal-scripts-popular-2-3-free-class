import { ScaledVector } from "@sagittal/general"
import { SymbolClassId } from "@sagittal/system"
import { computeNotatingSymbolClassIds } from "../../../src/notatingSymbolClasses/notatingSymbolClassIds"

describe("computeNotatingSymbolClassIds", (): void => {
    it("returns a list of symbol class IDs whose comma classes notate this pitch relative to a skeleton of Pythagorean nominals", (): void => {
        const jiPitch = { vector: [0, -2, 0, 0, 1] } as ScaledVector<{ rational: true }>

        const actual = computeNotatingSymbolClassIds(jiPitch)

        const expected = [
            SymbolClassId.ANTITICK_ARC_AND_SCROLL,
            SymbolClassId.DOUBLE_BARB,
        ] as SymbolClassId[]
        expect(actual).toEqual(expected)
    })

    it("another example", (): void => {
        const jiPitch = { vector: [0, 0, 1, 1] } as ScaledVector<{ rational: true }>

        const actual = computeNotatingSymbolClassIds(jiPitch)

        const expected = [
            SymbolClassId.ANTITICK_AND_RIGHT_ARC,
            SymbolClassId.WING_ANTITICK_AND_DOUBLE_LEFT_BARB,
            SymbolClassId.BARB_AND_ARC,
        ] as SymbolClassId[]
        expect(actual).toEqual(expected)
    })
})
