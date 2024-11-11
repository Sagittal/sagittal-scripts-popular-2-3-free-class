import { Cents, Maybe, Vector } from "@sagittal/general"
import { CommaClassId } from "@sagittal/system"

interface BestNotatingCommaProperties {
    bestNotatingCommaCents: Cents
    bestNotatingCommaVector: Vector
    bestNotatingCommaMaybeCommaClassId: Maybe<CommaClassId>
}

export { BestNotatingCommaProperties }
