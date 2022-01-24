const { Router } = require("express");
const router = Router();
const Kid = require("../model/userModel");
router.post("/", async (req, res) => {
  const { name, wrongAns, createdAt } = req.body;

  try {
    const newKid = await Kid.create({
      name,
      wrongAns,
      //createdAt
    });

    res.status(200).send({
      newKid,
    });
  } catch (err) {
    res.status(500).send("some enternal error");
  }
});
module.exports = router;
