import {
    areMonzosEqual,
    computeRoughRationalMonzo,
    invertMonzo,
    isUndefined,
    Scamon,
    TWO_3_FREE,
} from "@sagittal/general"
import {
    CommaClassId,
    getCommaClass,
    JI_NOTATION_COMMA_CLASS_IDS,
    SymbolClass,
    SymbolClassId,
    SYMBOL_CLASSES,
} from "@sagittal/system"

// Different than findNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeNotatingSymbolClassIds = ({monzo}: Scamon<{rational: true}>): SymbolClassId[] => {
    const notatingSymbolClassIds: SymbolClassId[] = []
    const two3FreeRationalMonzo = computeRoughRationalMonzo(monzo, TWO_3_FREE)

    JI_NOTATION_COMMA_CLASS_IDS.forEach((commaClassId: CommaClassId): void => {
        const commaClass = getCommaClass(commaClassId)
        const commaClassTwo3FreeMonzo = computeRoughRationalMonzo(commaClass.pitch.monzo, TWO_3_FREE)

        if (
            areMonzosEqual(two3FreeRationalMonzo, commaClassTwo3FreeMonzo) ||
            areMonzosEqual(two3FreeRationalMonzo, invertMonzo(commaClassTwo3FreeMonzo))
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
