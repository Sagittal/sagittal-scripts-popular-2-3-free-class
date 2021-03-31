import {Cents, Maybe, Pev} from "@sagittal/general"
import {CommaClassId} from "@sagittal/system"

interface BestNotatingCommaProperties {
    bestNotatingCommaCents: Cents,
    bestNotatingCommaPev: Pev<{rational: true}>,
    bestNotatingCommaMaybeCommaClassId: Maybe<CommaClassId>,
}

export {
    BestNotatingCommaProperties,
}
