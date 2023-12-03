import sequelize from "./database/database.js";

function Syncing() {
  sequelize.sync({ force: true });
}

export default Syncing;
