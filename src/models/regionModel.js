import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../scripts/database/database.js";

const Region = sequelize.define("Region", {
  Zuan: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  Noxus: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  Bilgewater: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  Targon: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  Shurima: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  Bundle_city: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  Demacia: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  Piltover: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  Ionia: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  Ixtal: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  Shadow_isles: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  Freljord: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  Runeterra: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Region.belongsToMany(Champion, { through: "ChampionRegion" });
Champion.belongsToMany(Region, { through: "ChampionRegion" });

export default Region;
