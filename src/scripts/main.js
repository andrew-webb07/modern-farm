import { createPlan } from "./plan.js"
import {usePlants} from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"




const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plants = usePlants()


const newFoodArray = harvestPlants(plants)

const mainContainer = document.querySelector(".container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Catalog(newFoodArray)
}

renderAllHTML()

