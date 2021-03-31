import {
    Cents,
    Decimal,
    Direction,
    Grade,
    Index,
    Pev,
    Rank,
    ScalaPopularityStat,
    Two3FreeClass,
} from "@sagittal/general"
import {CommaClassId, N2D3P9, SymbolClassId, SymbolSubsetId, Two3FreeClassAnalysis} from "@sagittal/system"
import {popular23FreeClassesScriptGroupSettings} from "../../src/globals"
import {computePopular23FreeClass} from "../../src/popular23FreeClass"
import {Popular23FreeClass} from "../../src/types"
import {two3FreeClassAnalysisFixture} from "../helpers/src/fixtures"

describe("computePopular23FreeClass", (): void => {
    const two3FreeClassAnalysis: Two3FreeClassAnalysis = {
        ...two3FreeClassAnalysisFixture,
        n2d3p9: 1.388889 as N2D3P9,
        two3FreeClass: {
            pev: [0, 0, 1] as Pev<{rational: true, rough: 5, direction: Direction.SUPER}>,
        } as Two3FreeClass,
    }

    it("assembles helpful information about a 2,3-free class, given a valid 2,3-free pev & its N2D3P9", (): void => {
        const actual = computePopular23FreeClass(two3FreeClassAnalysis)

        const expected: Popular23FreeClass = {
            ...two3FreeClassAnalysis,
            popularityRank: 2 as Rank<ScalaPopularityStat>,
            votes: 5371 as Decimal<{integer: true}> & Grade<ScalaPopularityStat>,
            notatingSymbolClassIds: [SymbolClassId.TICK, SymbolClassId.LEFT_BARB],
            notatingSymbolClassSmallestSymbolSubsetIndices: [5, 1] as Array<Index<SymbolSubsetId>>,
        }
        expect(actual).toEqual(expected)
    })

    it("also works when associating the popular 2,3-free class with its best notating comma", (): void => {
        popular23FreeClassesScriptGroupSettings.useBestNotatingCommas = true
        const actual = computePopular23FreeClass(two3FreeClassAnalysis)

        const expected: Popular23FreeClass = {
            ...two3FreeClassAnalysis,
            popularityRank: 2 as Rank<ScalaPopularityStat>,
            votes: 5371 as Decimal<{integer: true}> & Grade<ScalaPopularityStat>,
            bestNotatingCommaCents: 21.506290 as Cents,
            bestNotatingCommaPev: [-4, 4, -1] as Pev<{rational: true}>,
            bestNotatingCommaMaybeCommaClassId: CommaClassId._1_V_5_C,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
