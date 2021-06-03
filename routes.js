const express = require("express");
const router = express.Router();
let user = require("./models/usermodel");

router.post("/search", async (req, res) => {
  console.log(req.body.inp);

  let data = await user.find({ Name: { $regex: req.body.inp, $options: "i" } });
  if (data) {
    res.json({ user: data });
  }
  else{
    res.json({ user: [] });
  }
});

module.exports = router;
