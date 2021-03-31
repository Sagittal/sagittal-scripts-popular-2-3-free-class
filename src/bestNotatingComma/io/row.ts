import {BLANK, format23FreeClass, formatCents, formatPev, isUndefined, Ranked, Row} from "@sagittal/general"
import {formatCommaClass} from "@sagittal/system"
import {Popular23FreeClass} from "../../types"
import {BestNotatingCommaProperties} from "../types"

const computePopular23FreeClassWithBestNotatingCommaRow = (
    rankedPopular23FreeClassWithBestNotatingComma: Ranked<Popular23FreeClass & BestNotatingCommaProperties>,
): Row<{of: Popular23FreeClass & BestNotatingCommaProperties, header: true}> => {
    const {
        two3FreeClass,
        rank: estimatedRank,
        bestNotatingCommaCents,
        bestNotatingCommaPev,
        bestNotatingCommaMaybeCommaClassId,
    } = rankedPopular23FreeClassWithBestNotatingComma

    return [
        format23FreeClass(two3FreeClass),
        estimatedRank.toString(),
        formatCents(bestNotatingCommaCents, {align: true}),
        formatPev(bestNotatingCommaPev),
        isUndefined(bestNotatingCommaMaybeCommaClassId) ?
            BLANK :
            formatCommaClass(bestNotatingCommaMaybeCommaClassId),
    ] as Row<{of: Popular23FreeClass & BestNotatingCommaProperties, header: true}>
}

export {
    computePopular23FreeClassWithBestNotatingCommaRow,
}
