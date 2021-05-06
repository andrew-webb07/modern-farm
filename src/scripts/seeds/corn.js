

export const createCorn = () => {
    let corn = {}
    corn.type = "Corn"
    corn.height = 180
    corn.output = 6

    return [corn, corn]
}

const corn = createCorn()

console.log(Array.isArray(corn))