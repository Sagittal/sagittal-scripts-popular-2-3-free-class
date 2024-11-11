import { Cents, Vector, Two3FreeClass } from "@sagittal/general"
import { CommaClassId } from "@sagittal/system"
import {
    BestNotatingCommaProperties,
    computeBestNotatingCommaProperties,
} from "../../../src/bestNotatingComma"

describe("computeBestNotatingCommaProperties", (): void => {
    it("returns, for the given 2,3-free class, the best notating comma's vector, cents, and comma class ID (if any)", (): void => {
        const two3FreeClass = { vector: [0, 0, -1, 1] } as Two3FreeClass

        const actual = computeBestNotatingCommaProperties(two3FreeClass)

        const expected: BestNotatingCommaProperties = {
            bestNotatingCommaCents: 29.217813 as Cents,
            bestNotatingCommaVector: [-9, 6, 1, -1] as Vector,
            bestNotatingCommaMaybeCommaClassId: CommaClassId._5_V_7_C,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
