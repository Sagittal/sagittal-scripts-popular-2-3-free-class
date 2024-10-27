import { Cents, Maybe, Vector } from "@sagittal/general"
import { CommaClassId } from "@sagittal/system"

interface BestNotatingCommaProperties {
    bestNotatingCommaCents: Cents
    bestNotatingCommaVector: Vector<{ rational: true }>
    bestNotatingCommaMaybeCommaClassId: Maybe<CommaClassId>
}

export { BestNotatingCommaProperties }
