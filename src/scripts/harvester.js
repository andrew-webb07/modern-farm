export const harvestPlants = (plantsArray) => {
  let seedsHarvested = [];

  for (const plant of plantsArray) {
    if (plant.type === "Corn") {
      for (let plantOutput = 0; plantOutput < (plant.output / 2); plantOutput++) {
        seedsHarvested.push(plant);
      }
    } else {
      for (let plantOutput = 0; plantOutput < plant.output; plantOutput++) {
        seedsHarvested.push(plant);
      }
    }
  }

  return seedsHarvested;
};
