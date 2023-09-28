import { setType } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)

export const Types = () => {
    let html = `<ul class="type-list">
    <li>
    <input type="radio" name="type" value="1"/> Ring
    </li>
    <li>
    <input type="radio" name="type" value="2"/> Earring
    </li>
    <li>
    <input type="radio" name="type" value="3"/> Necklace
    </li>
    </ul>`
    return html
}