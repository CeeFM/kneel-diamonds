import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const buildOrderListItem = (order) => {
    const metals = getMetals()
    const styles = getStyles()
    const sizes = getSizes()

// Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
         return metal.id === order.metalId
        }
    )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    let name = "ring"
    let totalCost = foundMetal.price
    totalCost += foundSize.price
    totalCost += foundStyle.price

    if (order.typeId === 2) {
        totalCost = totalCost * 2
        name = "earring"
    } else if (order.typeId === 3) {
        totalCost = totalCost * 4
        name = "necklace"
    }
    
    let costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString} (${foundMetal.metal}, ${foundStyle.style}, ${foundSize.carets} caret ${name})
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

