import {
    Filename,
    Io,
    LogTarget,
    NEWLINE,
    program,
    saveLog,
    scriptSettings,
    setupScriptAndIo,
    sumTexts,
    time,
} from "@sagittal/general"
import {DEFAULT_MAX_N2D3P9} from "@sagittal/system"
import {popular23FreeClassesScriptGroupSettings} from "../globals"
import {computePopular23FreeClassesOutput} from "../io"
import {computePopular23FreeClasses} from "../popular23FreeClasses"

program
    .option("--max-n2d3p9 <maxN2D3P9>", "max N2D3P9", parseFloat)
    .option("--use-known", "use known popular 2,3-free classes")
    .option("--use-late", "use LATE (instead of LAAS)")
    .option("--use-best-notating-commas", "use best notating comma (instead of notating symbol classes)")

setupScriptAndIo("popular23FreeClasses" as Filename)

const maxN2D3P9 = program.maxN2d3p9 || DEFAULT_MAX_N2D3P9
popular23FreeClassesScriptGroupSettings.useKnown = !!program.useKnown
popular23FreeClassesScriptGroupSettings.useBestNotatingCommas = !!program.useBestNotatingCommas

const popular23FreeClasses = computePopular23FreeClasses(maxN2D3P9)
const popular23FreeClassesOutput: Io = computePopular23FreeClassesOutput(popular23FreeClasses, maxN2D3P9)
saveLog(popular23FreeClassesOutput, LogTarget.FINAL)

if (scriptSettings.time) saveLog(sumTexts(NEWLINE, `took ${time()}`), LogTarget.FINAL)
