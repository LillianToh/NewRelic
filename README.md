# VicTrees

## Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as express.
- `cd client` and run `npm install`. This will install client dependencies React App.
- You can test your client app on `http://localhost:3000` by `cd client` and run `npm start`.

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called `victrees`: create database `victrees`;
- Add a `.env` file to the main folder of this repository containing the MySQL authentication information for MySQL user. For example:

  ```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=victrees
  DB_PASS=YOURPASSWORD
  ```

  - Replace `YOURPASSWORD` with your actual password
    Go to MySQL CLI and type the password that you have created.

(If unable to do so, run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with a new password))

In the MySQL CLI, type `create database victrees;` to create a database in MySQL.

Run `node model/database.js` in your **TERMINAL**, in the **root** folder of your project (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'form' in your database.

Run `npm run migrate` in the main folder of this repository, in a new terminal window. This will create tables of the victrees database with some dummy data.

## Submission

By VicTress Coders 👩🏻‍💻✨

[Science and Observation](https://www.therelicans.com/lilliantoh/victrees-fight-deforestation-victoriously-1bc1)

[New Year, New Resources](https://www.therelicans.com/lilliantoh/victrees-fight-deforestation-victoriously-56ff)
