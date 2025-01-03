import {
    Copfr,
    Decimal,
    Grade,
    Max,
    Vector,
    Name,
    Prime,
    Rank,
    Ranked,
    ScalaPopularityStat,
    Sopfr,
    Two3FreeClass,
    two3FreeClassFixture,
    Rough,
    Integer,
    Rational,
    Super,
} from "@sagittal/general"
import { N2D3P9, Two3FreeClassAnalysis } from "@sagittal/system"
import { Popular23FreeClass, SharedPopular23FreeClassProperties } from "../../../src/types"

const two3FreeClassAnalysisFixture: Two3FreeClassAnalysis = {
    two3FreeClass: two3FreeClassFixture,
    name: "" as Name<Two3FreeClass>,
    two3FreePrimeLimit: 1 as Max<Prime<Rough<5>>>,
    two3FreeCopfr: 0 as Copfr<Rough<5>>,
    two3FreeSopfr: 0 as Sopfr<Rough<5>>,
    n2d3p9: 1 as N2D3P9,
}

const rankedPopular23FreeClassFixture: Ranked<SharedPopular23FreeClassProperties> = {
    two3FreePrimeLimit: 1 as Max<Prime<Rough<5>>>,
    two3FreeCopfr: 0 as Copfr<Rough<5>>,
    two3FreeSopfr: 0 as Sopfr<Rough<5>>,
    name: "{7/5}₂,₃" as Name<Two3FreeClass>,
    rank: 4 as Rank<Popular23FreeClass>,
    n2d3p9: 2 as N2D3P9,
    votes: 7 as Decimal<Integer> & Grade<ScalaPopularityStat>,
    popularityRank: 3 as Rank<ScalaPopularityStat>,
    two3FreeClass: {
        vector: [0, 0, -1, 1] as Vector<Rational & Super & Rough<5>>,
    } as Two3FreeClass,
}

export { two3FreeClassAnalysisFixture, rankedPopular23FreeClassFixture }
