import {Direction, Max, Pev, Two3FreeClass} from "@sagittal/general"
import {N2D3P9} from "@sagittal/system"
import {computeMaybePopular23FreeClass} from "../../src/maybe"

describe("computeMaybePopular23FreeClass", (): void => {
    it("returns a popular 2,3-free class if the N2D3P9 is under the max and the pev is super", (): void => {
        const two3FreePev = [0, 0, 1] as Pev<{rational: true, rough: 5, direction: Direction.SUPER}>
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computeMaybePopular23FreeClass({pev: two3FreePev} as Two3FreeClass, maxN2D3P9)

        expect(actual).toBeDefined()
    })

    it("returns undefined if the N2D3P9 is over the max", (): void => {
        const two3FreePev = [0, 0, 1] as Pev<{rational: true, rough: 5, direction: Direction.SUPER}>
        const maxN2D3P9 = 1 as Max<N2D3P9>

        const actual = computeMaybePopular23FreeClass({pev: two3FreePev} as Two3FreeClass, maxN2D3P9)

        expect(actual).toBeUndefined()
    })
})
