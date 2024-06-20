const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const User = require("./modules/face_it");
const dotenv = require("dotenv");
const home = require("./home");
const cors = require("cors");

dotenv.config({ path: `${__dirname}/./config.env` });

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(express.json({ limit: "5000mb" }));
  server.use(express.urlencoded({ extended: false, limit: "5000mb" }));
  server.use("/home", home);

  server.post("/", async (req, res) => {
    try {
      let exists = [];
      let users = req.body.users;
      if (!users) return res.json({ status: "ok", exists });

      for (let index = 0; index < users.length; index++) {
        const user = users[index];
        let checkUser = await User.findOne({ username: user });
        if (checkUser) {
          exists.push(checkUser);
        }
      }
      res.json({ status: "ok", exists });
    } catch (er) {
      console.log(er.message);
    }
  });

  server.put("/", async (req, res) => {
    try {
      var query = { username: req.query.username },
        update = { badge: req.query.badge },
        options = { upsert: true, new: true, setDefaultsOnInsert: true };

      // Find the document
      await User.findOneAndUpdate(query, update, options);
      res.json({ status: "ok" });
    } catch (er) {
      console.log(er.message);
    }
  });

  server.delete("/", async (req, res) => {
    try {
      var query = { username: req.query.username };
      console.log(query);
      // Find the document
      await User.findOneAndDelete(query);
      res.json({ status: "ok" });
    } catch (er) {
      console.log(er.message);
    }
  });

  mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => {
      console.log("connection to dataBase successful");
    })
    .catch((er) => {
      console.log(er.message);
      console.log("bad auth/db");
    });

  // Use Next.js to handle other requests
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3001, (err) => {
    if (err) throw err;
    console.log("Server live on port 3001!");
  });
});
