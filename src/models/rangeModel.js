import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../scripts/database/database.js";

const Range = sequelize.define("Range", {
  ranged: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  melee: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
Range.belongsToMany(Champion, { through: "ChampionRange" });
Champion.belongsToMany(Range, { through: "ChampionRange" });

export default Range;
