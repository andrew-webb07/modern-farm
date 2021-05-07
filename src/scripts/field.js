
const allPlants = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const corn of seed) {
            allPlants.push(corn)
        }
    }
    allPlants.push(seed)
}

export const usePlants = () => {
    return [...allPlants]
}