
import { getIconPrompts } from "../constants/prompts"
import { IconStyleEnum } from "../types/icon_styles"

export const usePrompt = (
    iconObject: string | null,
    state: string | null,
    color: string,
    iconStyle: IconStyleEnum | null
) => {
    const icon = `${iconObject as string} that is ${state as string}`
    const iconPrompts = getIconPrompts(icon, color)
    if (Object.prototype.hasOwnProperty.call(iconPrompts, iconStyle as IconStyleEnum)) {
        return iconPrompts[iconStyle as IconStyleEnum]
    }
}