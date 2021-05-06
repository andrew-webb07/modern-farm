import { createPlan } from "./plan.js"

import {getPlants} from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"

const plants = getPlants()


const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

console.log(harvestPlants(plants))



