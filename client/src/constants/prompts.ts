
export function getIconPrompts(icon: string, color: string) {
    return {
        "Metallic Style": `an icon of a ${icon} in ${color} metallic iridescent material, 3D render isometric perspective on dark background`,
        "3D": `Very tiny ${color} ${icon} that looks like the iOS emoji and has the same colors, 3D clay render, 4k UHD, white background, isometric top down left view, diffuse lighting, zoomed out very far`,
        "Pixar": `Cute ${icon}, pixar, mascot icon, ${color} split-lighting, digital art, cally3d`,
        "Polygon": `A ${color} coloured, detailed icon of a ${icon}, 3D low poly render, isometric perspective on white background, ultra HD`,
        "2D Mascot": `cute ${icon} searching computer, digital art, mascot, icon, split-lighting, of ${color} color`,
        "Pop Art": `A ${icon} riding a banana, pop art`,
        "Oil Painting": `A impressionist ${color} oil painting of a ${icon} as an exploding nebula`,
        "Vector Style": `${icon} in vector style,${color} split-lighting`,
        "Pixel Art": `pixel art of a ${icon}, ${color} color`
    }
}