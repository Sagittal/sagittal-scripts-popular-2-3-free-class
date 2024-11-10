import { Cents, Maybe, Rational, Vector } from "@sagittal/general"
import { CommaClassId } from "@sagittal/system"

interface BestNotatingCommaProperties {
    bestNotatingCommaCents: Cents
    bestNotatingCommaVector: Vector<Rational>
    bestNotatingCommaMaybeCommaClassId: Maybe<CommaClassId>
}

export { BestNotatingCommaProperties }
