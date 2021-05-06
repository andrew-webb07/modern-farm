
const allPlants = []

export const addPlant = (seed) => {
    allPlants.push(seed)
}

export const getPlants = () => {
    return [...allPlants]
}