

export const harvestPlants = (plantsArray) => {
    let seedsHarvested = []
   

for (const plant of plantsArray) {
    
    if (plant.length > 1) {
        for (const corn of plant) {
            for(let plantOutput = 0; plantOutput < (corn.output / 2); plantOutput++) {
                seedsHarvested.push(corn)
        }
        
        }
    }
    else {
        for(let plantOutput = 0; plantOutput < plant.output; plantOutput++) {
            seedsHarvested.push(plant)
        }
    }
}

    return seedsHarvested
}