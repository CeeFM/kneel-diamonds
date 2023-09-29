import { setType, getTypes, database } from "./database.js";

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)

export const Types = () => {
    let html = `<ul class="type-list">`
    for (const type of types) {
        if (database.orderBuilder.typeId === type.id) {
            html += `<li>
            <input type="radio" name="type" value="${type.id}" checked/> ${type.type}
            </li>`
        } else {
            html += `<li>
            <input type="radio" name="type" value="${type.id}" /> ${type.type}
            </li>`
        }
    }
    html += `</ul>`
    return html
}