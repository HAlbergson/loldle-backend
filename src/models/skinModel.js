import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../scripts/database/database.js";
import Champion from "./championModel.js"; // Importer Champion-model

const Skin = sequelize.define("Skin", {
  skin_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  skin_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  skin_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Skin.belongsTo(Champion, { foreignKey: "champion_id" });
Champion.hasMany(Skin, { foreignKey: "champion_id" });

export default Skin;
