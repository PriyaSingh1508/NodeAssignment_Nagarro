NodeAssignment!




Step 1: Install dependencies: Run npm i to install required Node modules.


Step 2: Set up environment variables:
Create a .env file with the following values


APP_PORT=8886
ACCESS_TOKEN=yYeeNFhgktsFmtRCtKS3
DB_USER=root
DB_PASS=root
DB_DIALECT=mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=nodedb

Update the same details in config.json in the ./config directory.

Step 3: Configure the database:
In config.json, update database details for development, test, and production environments.

Step 3: Run migrations and seed data:
Execute npx sequelize-cli db:migrate and npx sequelize-cli db:seed:all for database setup.

Step 4: Start the application:
Launch the app with npm start or nodemon index.js.

Remember to change the default teacher credentials (email: teacher@gmail.com, password: 12345678) for security.




