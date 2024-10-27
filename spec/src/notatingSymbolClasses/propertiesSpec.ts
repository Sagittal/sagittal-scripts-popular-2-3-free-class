import { Index, Two3FreeClass } from "@sagittal/general"
import { SymbolClassId, SymbolSubsetId } from "@sagittal/system"
import {
    computeNotatingSymbolClassesProperties,
    NotatingSymbolClassesProperties,
} from "../../../src/notatingSymbolClasses"

describe("computeNotatingSymbolClassesProperties", (): void => {
    it("returns, for the given 2,3-free class, all notating symbol class's IDs (if any), as well as the corresponding list of indices of the smallest symbol subsets these comma classes appear in", (): void => {
        const two3FreeClass = { vector: [0, 0, -1, 1] } as Two3FreeClass

        const actual = computeNotatingSymbolClassesProperties(two3FreeClass)

        const expected: NotatingSymbolClassesProperties = {
            notatingSymbolClassIds: [SymbolClassId.RIGHT_SCROLL, SymbolClassId.TICK_AND_RIGHT_ARC],
            notatingSymbolClassSmallestSymbolSubsetIndices: [1, 5] as Array<Index<SymbolSubsetId>>,
        }
        expect(actual).toEqual(expected)
    })
})
