

export const Catalog = (harvestedFoodArray) => {
    
    let html = ""

    for (const harvestedFood of harvestedFoodArray) {
    
        html += `
        <section class="plant">${harvestedFood.type}</section>
        `
    }

    return html
}