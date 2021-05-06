

export const harvestPlants = (plantsArray) => {
    let seedsHarvested = []

    for(let i = 0; i < plantsArray.length; i++) {
        if (plantsArray[i].type === "corn") {
            for(let ouptut = 0; output < (plantsArray[i].output / 2); output++) {
                seedsHarvested.push(plantsArray[i])
            }
        }
        else {
            for(let ouptut = 0; output < plantsArray[i].output; output++) {
                seedsHarvested.push(plantsArray[i])
            }
        }
    }
    return seedsHarvested
}