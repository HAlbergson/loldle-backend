import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../scripts/database/database.js";
import Region from "./regionModel.js";
import Position from "./positionModel.js";
import Range from "./rangeModel.js";
import Species from "./speciesModel.js";
import Skin from "./skinModel.js";

const Champion = sequelize.define("Champion", {
  champion_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  champion_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_q: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_w: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_e: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_r: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_passive: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_quote: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_q_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_w_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_e_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_r_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_passive_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_emoji_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_skin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_icon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_resource: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  champion_gender: {
    type: DataTypes.ENUM("Female", "Male", "Other"),
    allowNull: false,
  },
  champion_release_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Region.belongsToMany(Champion, { through: "ChampionRegion" });
Champion.belongsToMany(Region, { through: "ChampionRegion" });

Position.belongsToMany(Champion, { through: "ChampionPosition" });
Champion.belongsToMany(Position, { through: "ChampionPosition" });

Range.belongsToMany(Champion, { through: "ChampionRange" });
Champion.belongsToMany(Range, { through: "ChampionRange" });

Species.belongsToMany(Champion, { through: "ChampionSpecies" });
Champion.belongsToMany(Species, { through: "ChampionSpecies" });

Skin.belongsTo(Champion, { foreignKey: "champion_id" });
Champion.hasMany(Skin, { foreignKey: "champion_id" });

export default Champion;
