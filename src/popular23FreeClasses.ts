import {
    computeKeyPath,
    DEFAULT_PRECISION,
    doForEachRationalVector,
    isVectorSub,
    isUndefined,
    LogTarget,
    Max,
    Maybe,
    Vector,
    rank,
    Ranked,
    RankStrategy,
    saveLog,
    stringify,
    Two3FreeClass,
} from "@sagittal/general"
import {
    computePrimeCountExtremasGivenMaxN2D3P9,
    MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN,
    N2D3P9,
} from "@sagittal/system"
import { popular23FreeClassesScriptGroupSettings } from "./globals"
import { computeKnownPopular23FreeClasses } from "./known23FreeClasses"
import { computePopular23FreeClassesFromKnownNumerators } from "./knownNumerators"
import { computeMaybePopular23FreeClass } from "./maybe"
import { Popular23FreeClass } from "./types"

// "Super" as in "not sub", not as in "super popular!"
const computeMaybeSuperPopular23FreeClass = (
    two3FreeRationalVectorForWork: Vector,
    maxN2D3P9: Max<N2D3P9>,
): Maybe<Popular23FreeClass> => {
    const maybeSuperPopular23FreeClass = !isVectorSub(two3FreeRationalVectorForWork)
        ? computeMaybePopular23FreeClass(
              { vector: two3FreeRationalVectorForWork } as Two3FreeClass,
              maxN2D3P9,
          )
        : undefined

    if (!isUndefined(maybeSuperPopular23FreeClass)) {
        saveLog(stringify(maybeSuperPopular23FreeClass), LogTarget.PROGRESS)

        return maybeSuperPopular23FreeClass
    }

    return undefined
}

const computePopular23FreeClasses = (maxN2D3P9: Max<N2D3P9>): Ranked<Popular23FreeClass>[] => {
    let popular23FreeClasses: Popular23FreeClass[]
    if (popular23FreeClassesScriptGroupSettings.useKnown) {
        popular23FreeClasses = computeKnownPopular23FreeClasses()
    } else {
        saveLog("About to calculate prime count extremas given max N2D3P9", LogTarget.PROGRESS)

        if (maxN2D3P9 > MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN) {
            const primeCountExtremasGivenMaxN2D3P9 = computePrimeCountExtremasGivenMaxN2D3P9(maxN2D3P9)

            popular23FreeClasses = doForEachRationalVector(
                primeCountExtremasGivenMaxN2D3P9,
                computeMaybeSuperPopular23FreeClass,
                maxN2D3P9,
            )
        } else {
            popular23FreeClasses = computePopular23FreeClassesFromKnownNumerators(maxN2D3P9)
        }
    }

    return rank(popular23FreeClasses, {
        by: computeKeyPath("n2d3p9"),
        strategy: RankStrategy.FRACTIONAL,
        precision: DEFAULT_PRECISION,
    })
}

export { computePopular23FreeClasses }
