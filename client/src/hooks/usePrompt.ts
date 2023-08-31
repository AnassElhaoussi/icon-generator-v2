
import { getIconPrompts } from "../constants/prompts"

export enum IconStyleEnum {
    "Metallic Style" = "Metallic Style",
    "3D" = "3D",
    "Pixar" = "Pixar",
    "Polygon" = "Polygon",
    "2D Mascot" = "2D Mascot",
    "Pop Art" = "Pop Art",
    "Oil Painting" = "Oil Painting",
    "Vector Style" = "Vector Style",
    "Pixel Art" = "Pixel Art"
}

export default function usePrompt(iconObject: string, state: string, color: string, iconStyle: IconStyleEnum){
    const icon = `${iconObject} that is ${state}`
    const iconPrompts = getIconPrompts(icon, color)
    if(Object.prototype.hasOwnProperty.call(iconPrompts, iconStyle)){
        return iconPrompts[iconStyle]
    }
}