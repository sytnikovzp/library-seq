console.log('Server is started!');

const db = require('./src/db/models');

const dbCheck = async () => {
  try {
    await db.sequelize.authenticate();
    console.log(
      `Connection with DB ${process.env.DB_NAME.toUpperCase()} has been successfully done!`
    );
  } catch (error) {
    console.log(`Can't connect to DB: `, error.message);
  }
};

dbCheck();

const syncAllTables = async () => {
  try {
    await db.sequelize.sync();
    console.log(`Sync all tables has been done!`);
  } catch (error) {
    console.log(`Can't sync all tables: `, error.message);
  }
};

// syncAllTables();
