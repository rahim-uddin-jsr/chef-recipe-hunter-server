const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

const chefs = require("./data/chef-data.json");
const recipes = require("./data/recipes.json");

app.get("/", (req, res) => {
  res.send("Genius Recipe Api running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});
app.get("/recipes/:chefName", (req, res) => {
  const chefName = req.params.chefName;
  const filteredByChefName = recipes.filter(
    (recipe) => recipe.strChefName == chefName
  );
  res.send(filteredByChefName);
});

app.listen(port, () => {
  console.log("Genius Recipe run on port=", port);
});
