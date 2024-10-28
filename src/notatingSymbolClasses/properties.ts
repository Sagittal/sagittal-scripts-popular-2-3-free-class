import { Index, Two3FreeClass, indexOf } from "@sagittal/general"
import {
    getSmallestSymbolSubsetId,
    SIZE_SORTED_SYMBOL_SUBSET_IDS,
    SymbolClassId,
    SymbolSubsetId,
} from "@sagittal/system"
import { computeNotatingSymbolClassIds } from "./notatingSymbolClassIds"
import { NotatingSymbolClassesProperties } from "./types"

const computeNotatingSymbolClassesProperties = (
    two3FreeClass: Two3FreeClass,
): NotatingSymbolClassesProperties => {
    const notatingSymbolClassIds = computeNotatingSymbolClassIds(two3FreeClass)

    const smallestSymbolSubsetIndices = notatingSymbolClassIds.map(
        (symbolClassId: SymbolClassId): Index<SymbolSubsetId> => {
            // This used to not include Trojan, and the tables that have been shared on the forum reflect that.
            return indexOf(SIZE_SORTED_SYMBOL_SUBSET_IDS, getSmallestSymbolSubsetId(symbolClassId))
        },
    )

    return {
        notatingSymbolClassIds,
        notatingSymbolClassSmallestSymbolSubsetIndices: smallestSymbolSubsetIndices,
    }
}

export { computeNotatingSymbolClassesProperties }
