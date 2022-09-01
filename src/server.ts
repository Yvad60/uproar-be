/* eslint-disable no-console */
import app from './app';
import sequelizeConnection from './db/config/db.config';

const PORT: number | string = process.env.PORT || 5000;

const connectApp = async (): Promise<void> => {
  try {
    await sequelizeConnection.authenticate();
    console.log('database connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connectApp();
