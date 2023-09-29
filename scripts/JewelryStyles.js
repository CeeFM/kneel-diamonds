import { getStyles, setStyle, database } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    for (const style of styles)
        if(database.orderBuilder.styleId === style.id) {
        html += `<li>
        <input type="radio" name="style" id="style-${style.id}" value=${style.id} checked/> ${style.style}
        </li>
        `
        } else {
        html += `<li>
        <input type="radio" name="style" id="style-${style.id}" value=${style.id} /> ${style.style}
        </li>
        `
        }
// Join all of the strings in the array into a single string
    html += "</ul>"
    return html
}

