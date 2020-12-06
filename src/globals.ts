import {DEFAULT_POPULAR_2_3_FREE_CLASSES_SCRIPTS_SETTINGS} from "./constants"
import {Popular23FreeClassesScriptGroupSettings} from "./types"

const popular23FreeClassesScriptGroupSettings: Popular23FreeClassesScriptGroupSettings =
    JSON.parse(JSON.stringify(DEFAULT_POPULAR_2_3_FREE_CLASSES_SCRIPTS_SETTINGS))

export {
    popular23FreeClassesScriptGroupSettings,
}
