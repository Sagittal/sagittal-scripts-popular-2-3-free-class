import {setAllPropertiesOfObjectOnAnother} from "@sagittal/general"
import {DEFAULT_POPULAR_2_3_FREE_CLASSES_SCRIPT_GROUP_SETTINGS} from "../../../src/constants"
import {popular23FreeClassesScriptGroupSettings} from "../../../src/globals"

afterEach((): void => {
    setAllPropertiesOfObjectOnAnother({
        objectToChange: popular23FreeClassesScriptGroupSettings,
        objectWithProperties: DEFAULT_POPULAR_2_3_FREE_CLASSES_SCRIPT_GROUP_SETTINGS,
    })
})
