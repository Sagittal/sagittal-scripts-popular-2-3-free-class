import {
    Cents,
    Copfr,
    Decimal,
    EMPTY_VECTOR,
    Grade,
    Index,
    Max,
    Vector,
    Name,
    Prime,
    Rank,
    Ranked,
    ScalaPopularityStat,
    Sopfr,
    Two3FreeClass,
    Rational,
    Super,
    Rough,
    Integer,
} from "@sagittal/general"
import { CommaClassId, N2D3P9, SymbolClassId, SymbolSubsetId } from "@sagittal/system"
import { popular23FreeClassesScriptGroupSettings } from "../../src/globals"
import { computePopular23FreeClasses } from "../../src/popular23FreeClasses"
import { Popular23FreeClass } from "../../src/types"

describe("computePopular23FreeClasses", (): void => {
    it("returns a ranked (and sorted) list of the most popular 2,3-free classes with N2D3P9 less than the requested max", (): void => {
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computePopular23FreeClasses(maxN2D3P9)

        const expected = [
            {
                name: "{1}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 1 as Max<Prime<Rough<5>>>,
                two3FreeSopfr: 0 as Sopfr<Rough<5>>,
                two3FreeCopfr: 0 as Copfr<Rough<5>>,
                n2d3p9: 1.0 as N2D3P9,
                two3FreeClass: {
                    vector: EMPTY_VECTOR as Vector<Rational & Super & Rough<5>>,
                } as Two3FreeClass,
                popularityRank: 1 as Rank<ScalaPopularityStat>,
                votes: 7624 as Decimal<Integer> & Grade<ScalaPopularityStat>,
                notatingSymbolClassIds: [SymbolClassId.NULL, SymbolClassId.TICK_AND_LEFT_BARB],
                notatingSymbolClassSmallestSymbolSubsetIndices: [0, 5] as Index<SymbolSubsetId>[],
                rank: 1 as Rank<Popular23FreeClass>,
            },
            {
                name: "{5}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 5 as Max<Prime<Rough<5>>>,
                two3FreeSopfr: 5 as Sopfr<Rough<5>>,
                two3FreeCopfr: 1 as Copfr<Rough<5>>,
                n2d3p9: 1.388888 as N2D3P9,
                two3FreeClass: {
                    vector: [0, 0, 1] as Vector<Rational & Super & Rough<5>>,
                } as Two3FreeClass,
                popularityRank: 2 as Rank<ScalaPopularityStat>,
                votes: 5371 as Decimal<Integer> & Grade<ScalaPopularityStat>,
                notatingSymbolClassIds: [SymbolClassId.TICK, SymbolClassId.LEFT_BARB],
                notatingSymbolClassSmallestSymbolSubsetIndices: [5, 1] as Index<SymbolSubsetId>[],
                rank: 2 as Rank<Popular23FreeClass>,
            },
            {
                name: "{7}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 7 as Max<Prime<Rough<5>>>,
                two3FreeSopfr: 7 as Sopfr<Rough<5>>,
                two3FreeCopfr: 1 as Copfr<Rough<5>>,
                n2d3p9: 2.722222 as N2D3P9,
                two3FreeClass: {
                    vector: [0, 0, 0, 1] as Vector<Rational & Super & Rough<5>>,
                } as Two3FreeClass,
                popularityRank: 3 as Rank<ScalaPopularityStat>,
                votes: 3016 as Decimal<Integer> & Grade<ScalaPopularityStat>,
                notatingSymbolClassIds: [SymbolClassId.RIGHT_ARC, SymbolClassId.TICK_BARB_AND_ARC],
                notatingSymbolClassSmallestSymbolSubsetIndices: [1, 5] as Index<SymbolSubsetId>[],
                rank: 3 as Rank<Popular23FreeClass>,
            },
            {
                name: "{25}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 5 as Max<Prime<Rough<5>>>,
                two3FreeSopfr: 10 as Sopfr<Rough<5>>,
                two3FreeCopfr: 2 as Copfr<Rough<5>>,
                n2d3p9: 3.472222 as N2D3P9,
                two3FreeClass: {
                    vector: [0, 0, 2] as Vector<Rational & Super & Rough<5>>,
                } as Two3FreeClass,
                popularityRank: 4 as Rank<ScalaPopularityStat>,
                votes: 1610 as Decimal<Integer> & Grade<ScalaPopularityStat>,
                notatingSymbolClassIds: [
                    SymbolClassId.ANTITICK_AND_LEFT_BARB,
                    SymbolClassId.DOUBLE_LEFT_BARB,
                ],
                notatingSymbolClassSmallestSymbolSubsetIndices: [5, 1] as Index<SymbolSubsetId>[],
                rank: 4 as Rank<Popular23FreeClass>,
            },
            {
                name: "{7/5}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 7 as Max<Prime<Rough<5>>>,
                two3FreeSopfr: 12 as Sopfr<Rough<5>>,
                two3FreeCopfr: 2 as Copfr<Rough<5>>,
                n2d3p9: 4.537037 as N2D3P9,
                two3FreeClass: {
                    vector: [0, 0, -1, 1] as Vector<Rational & Super & Rough<5>>,
                } as Two3FreeClass,
                popularityRank: 5 as Rank<ScalaPopularityStat>,
                votes: 1318 as Decimal<Integer> & Grade<ScalaPopularityStat>,
                notatingSymbolClassIds: [SymbolClassId.RIGHT_SCROLL, SymbolClassId.TICK_AND_RIGHT_ARC],
                notatingSymbolClassSmallestSymbolSubsetIndices: [1, 5] as Index<SymbolSubsetId>[],
                rank: 5 as Rank<Popular23FreeClass>,
            },
        ] as Ranked<Popular23FreeClass>[]
        expect(actual).toBeCloseToObject(expected)
    })

    it("also works when asked to return the best notating commas for each popular 2,3-free class", (): void => {
        const maxN2D3P9 = 5 as Max<N2D3P9>

        popular23FreeClassesScriptGroupSettings.useBestNotatingCommas = true
        const actual = computePopular23FreeClasses(maxN2D3P9)

        const expected = [
            {
                name: "{1}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 1 as Max<Prime<Rough<5>>>,
                two3FreeSopfr: 0 as Sopfr<Rough<5>>,
                two3FreeCopfr: 0 as Copfr<Rough<5>>,
                n2d3p9: 1.0 as N2D3P9,
                two3FreeClass: {
                    vector: EMPTY_VECTOR as Vector<Rational & Super & Rough<5>>,
                } as Two3FreeClass,
                popularityRank: 1 as Rank<ScalaPopularityStat>,
                votes: 7624 as Decimal<Integer> & Grade<ScalaPopularityStat>,
                bestNotatingCommaCents: 0 as Cents,
                bestNotatingCommaVector: EMPTY_VECTOR,
                bestNotatingCommaMaybeCommaClassId: CommaClassId._1_u,
                rank: 1 as Rank<Popular23FreeClass>,
            },
            {
                name: "{5}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 5 as Max<Prime<Rough<5>>>,
                two3FreeSopfr: 5 as Sopfr<Rough<5>>,
                two3FreeCopfr: 1 as Copfr<Rough<5>>,
                n2d3p9: 1.388888 as N2D3P9,
                two3FreeClass: {
                    vector: [0, 0, 1] as Vector<Rational & Super & Rough<5>>,
                } as Two3FreeClass,
                popularityRank: 2 as Rank<ScalaPopularityStat>,
                votes: 5371 as Decimal<Integer> & Grade<ScalaPopularityStat>,
                bestNotatingCommaCents: 21.50629 as Cents,
                bestNotatingCommaVector: [-4, 4, -1] as Vector,
                bestNotatingCommaMaybeCommaClassId: CommaClassId._1_V_5_C,
                rank: 2 as Rank<Popular23FreeClass>,
            },
            {
                name: "{7}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 7 as Max<Prime<Rough<5>>>,
                two3FreeSopfr: 7 as Sopfr<Rough<5>>,
                two3FreeCopfr: 1 as Copfr<Rough<5>>,
                n2d3p9: 2.722222 as N2D3P9,
                two3FreeClass: {
                    vector: [0, 0, 0, 1] as Vector<Rational & Super & Rough<5>>,
                } as Two3FreeClass,
                popularityRank: 3 as Rank<ScalaPopularityStat>,
                votes: 3016 as Decimal<Integer> & Grade<ScalaPopularityStat>,
                bestNotatingCommaCents: 27.264092 as Cents,
                bestNotatingCommaVector: [6, -2, 0, -1] as Vector,
                bestNotatingCommaMaybeCommaClassId: CommaClassId._1_V_7_C,
                rank: 3 as Rank<Popular23FreeClass>,
            },
            {
                name: "{25}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 5 as Max<Prime<Rough<5>>>,
                two3FreeSopfr: 10 as Sopfr<Rough<5>>,
                two3FreeCopfr: 2 as Copfr<Rough<5>>,
                n2d3p9: 3.472222 as N2D3P9,
                two3FreeClass: {
                    vector: [0, 0, 2] as Vector<Rational & Super & Rough<5>>,
                } as Two3FreeClass,
                popularityRank: 4 as Rank<ScalaPopularityStat>,
                votes: 1610 as Decimal<Integer> & Grade<ScalaPopularityStat>,
                bestNotatingCommaCents: 19.552569 as Cents,
                bestNotatingCommaVector: [11, -4, -2] as Vector,
                bestNotatingCommaMaybeCommaClassId: CommaClassId._1_V_25_C,
                rank: 4 as Rank<Popular23FreeClass>,
            },
            {
                name: "{7/5}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 7 as Max<Prime<Rough<5>>>,
                two3FreeSopfr: 12 as Sopfr<Rough<5>>,
                two3FreeCopfr: 2 as Copfr<Rough<5>>,
                n2d3p9: 4.537037 as N2D3P9,
                two3FreeClass: {
                    vector: [0, 0, -1, 1] as Vector<Rational & Super & Rough<5>>,
                } as Two3FreeClass,
                popularityRank: 5 as Rank<ScalaPopularityStat>,
                votes: 1318 as Decimal<Integer> & Grade<ScalaPopularityStat>,
                bestNotatingCommaCents: 29.217813 as Cents,
                bestNotatingCommaVector: [-9, 6, 1, -1] as Vector,
                bestNotatingCommaMaybeCommaClassId: CommaClassId._5_V_7_C,
                rank: 5 as Rank<Popular23FreeClass>,
            },
        ] as Ranked<Popular23FreeClass>[]
        expect(actual).toBeCloseToObject(expected)
    })
})
