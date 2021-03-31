import {
    arePevsEqual,
    computeRoughRationalPev,
    invertPev,
    isUndefined,
    Spev,
    TWO_3_FREE,
} from "@sagittal/general"
import {
    CommaClassId,
    getCommaClass,
    JI_NOTATION_COMMA_CLASS_IDS,
    SYMBOL_CLASSES,
    SymbolClass,
    SymbolClassId,
} from "@sagittal/system"

// Different than findNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeNotatingSymbolClassIds = ({pev}: Spev<{rational: true}>): SymbolClassId[] => {
    const notatingSymbolClassIds: SymbolClassId[] = []
    const two3FreeRationalPev = computeRoughRationalPev(pev, TWO_3_FREE)

    JI_NOTATION_COMMA_CLASS_IDS.forEach((commaClassId: CommaClassId): void => {
        const commaClass = getCommaClass(commaClassId)
        const commaClassTwo3FreePev = computeRoughRationalPev(commaClass.pitch.pev, TWO_3_FREE)

        if (
            arePevsEqual(two3FreeRationalPev, commaClassTwo3FreePev) ||
            arePevsEqual(two3FreeRationalPev, invertPev(commaClassTwo3FreePev))
        ) {
            const symbolClassEntries = Object.entries(SYMBOL_CLASSES) as Array<[SymbolClassId, SymbolClass]>
            const symbolClassEntry = symbolClassEntries
                .find(([_, symbolClass]: [SymbolClassId, SymbolClass]): boolean => {
                    return symbolClass.commaClassId === commaClassId
                })
            if (isUndefined(symbolClassEntry)) throw new Error(`Did not find a symbol class with this comma class`)
            notatingSymbolClassIds.push(symbolClassEntry[0])
        }
    })

    return notatingSymbolClassIds
}

export {
    computeNotatingSymbolClassIds,
}
