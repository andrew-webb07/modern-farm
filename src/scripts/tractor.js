
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import {addPlant} from "./field.js"



export const plantSeeds = (yearPlan) => {
    for (const row of yearPlan) {
        for(const plantString of row) {
            if (plantString === "Asparagus") {
               const asparagusSeed = createAsparagus()
               addPlant(asparagusSeed)
            }
            else if (plantString === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed)
            }
            else if (plantString === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (plantString === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (plantString === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (plantString === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }        
        }
    }
}