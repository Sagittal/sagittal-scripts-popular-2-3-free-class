import {
    areVectorsEqual,
    computeRoughRationalVector,
    invertVector,
    isUndefined,
    Rational,
    ScaledVector,
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
const computeNotatingSymbolClassIds = ({ vector }: ScaledVector<Rational>): SymbolClassId[] => {
    const notatingSymbolClassIds: SymbolClassId[] = []
    const two3FreeRationalVector = computeRoughRationalVector(vector, TWO_3_FREE)

    JI_NOTATION_COMMA_CLASS_IDS.forEach((commaClassId: CommaClassId): void => {
        const commaClass = getCommaClass(commaClassId)
        const commaClassTwo3FreeVector = computeRoughRationalVector(commaClass.pitch.vector, TWO_3_FREE)

        if (
            areVectorsEqual(two3FreeRationalVector, commaClassTwo3FreeVector) ||
            areVectorsEqual(two3FreeRationalVector, invertVector(commaClassTwo3FreeVector))
        ) {
            const symbolClassEntries = Object.entries(SYMBOL_CLASSES) as [SymbolClassId, SymbolClass][]
            const symbolClassEntry = symbolClassEntries.find(
                ([_, symbolClass]: [SymbolClassId, SymbolClass]): boolean => {
                    return symbolClass.commaClassId === commaClassId
                },
            )
            if (isUndefined(symbolClassEntry))
                throw new Error(`Did not find a symbol class with this comma class`)
            notatingSymbolClassIds.push(symbolClassEntry[0])
        }
    })

    return notatingSymbolClassIds
}

export { computeNotatingSymbolClassIds }
