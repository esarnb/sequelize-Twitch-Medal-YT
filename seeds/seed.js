const sequelize = require("../config/connection");
const { User } = require("../models");
const userData = require("./userData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
        // Run hook function on each record in the bulk
        individualHooks: true,
        // 
        returning: true,
    });

    // end manual seeding script
    process.exit(0);
}

seedDatabase();