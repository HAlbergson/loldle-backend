import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../scripts/database/database.js";

const Species = sequelize.define("Species", {
    human: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    yordle:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    vastayan:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    voidborn:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    celestial:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    darkin:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    spirit:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    demon:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    undead:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    dragon:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    robot:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    magicborn:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    magically_altered:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    iceborn:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    golem:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    aspect:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    troll:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    god_warrior:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    chemically_altered:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    cyborg:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
})

Species.belongsToMany(Champion, { through: "ChampionSpecies" });
Champion.belongsToMany(Species, { through: "ChampionSpecies" });