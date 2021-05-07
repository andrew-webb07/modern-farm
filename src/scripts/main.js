import { createPlan } from "./plan.js"

import {getPlants} from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"



const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plants = getPlants()


console.log(harvestPlants(plants))



