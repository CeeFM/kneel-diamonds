import { getSizes, setSize, database } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    for (const size of sizes) {
        if (database.orderBuilder.sizeId === size.id) {
        html += `<li>
            <input type="radio" name="size" value="${size.id}" checked/> ${size.carets}
        </li>`} else {
            html += `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
        }
    }

    html += "</ul>"

    return html
}


