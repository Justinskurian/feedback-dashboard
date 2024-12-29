const express = require("express");
const router = express.Router();
router.use(express.json());
const feedbackModel = require("../model/feedbackModel");

//Fetching data
router.get("/get", async (req, res) => {
  try {
    var data = await feedbackModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.send("unable to find feedback");
  }
});

//Adding Feedback
router.post("/add", async (req, res) => {
  try {
    var data = await feedbackModel(req.body).save();
    res.status(200).send( "Feedback added" );
  } catch (error) {
    res.send("Could'nt add Feedback");
    console.log(error);
  }
});

//Deleting Feedback
router.delete("/delete/:id", async (req, res) => {
    try {
      await feedbackModel.findByIdAndDelete(req.params.id);
      res.status(200).send("Feedback deleted");
    } catch (error) {
      res.send("Could not delete feedback");
      console.log(error);
    }
  });

  // Editing Feedback
  router.put("/edit/:id", async (req, res) => {
    try {
      await feedbackModel.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send("Feedback updated successfully");
    } catch (err) {
      res.send("Could not update feedback");
      console.log(error);
    }
  });

module.exports = router;
