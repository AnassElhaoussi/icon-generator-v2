
import { GetColorName } from "hex-color-to-color-name"
import { getIconPrompts } from "../constants/prompts"
import { IconStyleEnum } from "../types/icon_styles"

export const getPrompt = (
    iconObject: string | null,
    state: string | null,
    chosenColor: string | null,
    iconStyle: IconStyleEnum | null
) => {
    const iconObjectDescription = `${iconObject as string}, ${state as string}`
    const colorName = GetColorName(chosenColor as string) as string
    const iconPrompts = getIconPrompts(iconObjectDescription, colorName)
    if (
        Object.prototype.hasOwnProperty
            .call(iconPrompts, iconStyle as IconStyleEnum)
    ) {
        return iconPrompts[iconStyle as IconStyleEnum]
    }
}