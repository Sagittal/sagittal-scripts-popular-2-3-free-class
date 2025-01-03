import { computeCentsFromPitch, Two3FreeClass, Rational, ScaledVector } from "@sagittal/general"
import { computeMaybeCommaClassId, findNotatingCommas } from "@sagittal/system"
import { computeBestNotatingComma } from "./bestNotatingComma"
import { BestNotatingCommaProperties } from "./types"

const computeBestNotatingCommaProperties = (two3FreeClass: Two3FreeClass): BestNotatingCommaProperties => {
    const notatingCommas = findNotatingCommas(two3FreeClass as ScaledVector<Rational>)
    const bestNotatingComma = computeBestNotatingComma(notatingCommas)
    const maybeCommaClassId = computeMaybeCommaClassId(bestNotatingComma)

    return {
        bestNotatingCommaCents: computeCentsFromPitch(bestNotatingComma),
        bestNotatingCommaVector: bestNotatingComma.vector,
        bestNotatingCommaMaybeCommaClassId: maybeCommaClassId,
    }
}

export { computeBestNotatingCommaProperties }
