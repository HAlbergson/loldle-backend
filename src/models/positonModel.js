import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../scripts/database/database.js";
import Champion from "./championModel.js";

const Position = sequelize.define("Position", {
  top: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  jungle: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  mid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  adc: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  support: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Position.belongsToMany(Champion, { through: "ChampionPosition" });
Champion.belongsToMany(Position, { through: "ChampionPosition" });

export default Position;