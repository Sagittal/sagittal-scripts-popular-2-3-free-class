import { Cents, IRRATIONAL_SCALED_VECTOR_BASE_VECTOR, Ranked, Row } from "@sagittal/general"
import { CommaClassId } from "@sagittal/system"
import {
    BestNotatingCommaProperties,
    computePopular23FreeClassWithBestNotatingCommaRow,
} from "../../../../src/bestNotatingComma"
import { Popular23FreeClass } from "../../../../src/types"
import { rankedPopular23FreeClassFixture } from "../../../helpers/src/fixtures"

describe("computePopular23FreeClassWithBestNotatingCommaRow", (): void => {
    it("works", (): void => {
        const rankedPopular23FreeClassWithBestNotatingComma: Ranked<
            Popular23FreeClass & BestNotatingCommaProperties
        > = {
            ...rankedPopular23FreeClassFixture,
            bestNotatingCommaCents: 5 as Cents,
            bestNotatingCommaVector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            bestNotatingCommaMaybeCommaClassId: CommaClassId._19_V_5_P_4_7_s,
        } as Ranked<Popular23FreeClass & BestNotatingCommaProperties>

        const actual = computePopular23FreeClassWithBestNotatingCommaRow(
            rankedPopular23FreeClassWithBestNotatingComma,
        )

        /* eslint-disable prettier/prettier */
        const expected = [
            "{7/5}₂,₃",         // 2,3-free class name
            "4",                // Estimated rank
            "         5.000¢",  // Best notating comma cents
            "[   1 ⟩",          // Best notating comma vector
            "   ,)|  ",         // Best notating comma maybe flacco
        ] as Row<{ of: Popular23FreeClass & BestNotatingCommaProperties; header: true }>
        /* eslint-enable prettier/prettier */

        expect(actual).toEqual(expected)
    })
})
