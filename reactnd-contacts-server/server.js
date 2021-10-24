const express = require("express");
const { Sequelize, DataTypes, Model } = require("sequelize");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const path = require("path");
const contacts = require("./contacts");

const app = express();

//Dummy comment ~ just to test CI pipeline works.

const sequelize = new Sequelize(
  `postgres://${config.db_user}:${config.db_pwd}@${config.db_host}:5432/postgres`
);

const dbconfig = {
  host: config.db_host,
  db: config.db_name,
  port: config.db_port,
  user: config.db_user,
  pwd: config.db_pwd
}

const dbconfigStr = `host: ${config.db_host}, db: ${config.db_name}, port: ${config.db_port}, user: ${config.db_user}, pwd: ${config.db_pwd}`

console.log("dbconfig", dbconfig)
console.log("dbconfigStr", dbconfigStr)

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    avatarURL: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/index.html"));
});

app.use((req, res, next) => {
  const token = req.get("Authorization");

  if (token) {
    req.token = token;
    next();
  } else {
    res.status(403).send({
      error:
        "Please provide an Authorization header to identify yourself (can be whatever you want)",
    });
  }
});

app.get("/contacts/test", async (req, res) => {
  res.send(contacts.defaultData.contacts.map((contact) => ({
    id: contact.id,
    name: contact.name,
    email: contact.email,
    check: dbconfig
  })));
});

app.get("/contacts", async (req, res) => {
  const users = await User.findAll();
  res.send(users.map(({ dataValues }) => ({
    id: dataValues.id,
    name: dataValues.name,
    email: dataValues.email
  })));
});

app.delete("/contacts/:id", (req, res) => {
  res.send(contacts.remove(req.token, req.params.id));
});

app.post("/contacts", bodyParser.json(), (req, res) => {
  const { name, email } = req.body;

  if (name && email) {
    res.send(contacts.add(req.token, req.body));
  } else {
    res.status(403).send({
      error: "Please provide both a name and an email address",
    });
  }
});

app.listen(config.port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log("Server listening on port %s, Ctrl+C to stop", config.port);
    await User.sync();
    contacts.defaultData.contacts.forEach((contact) => {
      User.findOrCreate({ where: { id: contact.id }, defaults: contact });
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
