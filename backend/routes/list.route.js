const express = require("express");
const router = express.Router();

const userModel = require("../models/user.model");
const listModel = require("../models/list.model");

//adding task
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    if (!title || !body) {
      return res.status(400).json({
        message: "Title and Body cannot be empty",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "user not found",
      });
    }

    const task = await listModel.create({ title, body, user: user._id });

    await userModel.findOneAndUpdate(
      { _id: user._id },
      { $push: { list: task._id } }
    );
    res.status(201).json({
      task,
      message: "task added in list successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong cant add task",
    });
  }
});

//updating task
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;

    if (!title && !body) {
      return res.status(400).json({
        message: "At least one field(Title or body) required",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const updatedData = {};
    if (title) updatedData.title = title;
    if (body) updatedData.body = body;

    const updatedTask = await listModel.findOneAndUpdate(
      { _id: req.params.id, user: user._id },
      updatedData,
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found or Unauthorized",
      });
    }
    res.status(200).json({
      updatedTask,
      message: "Task updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong cant update task",
    });
  }
});

//get Tasks
router.get("/getTasks/:id", async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const list = await listModel.find({ user: req.params.id }).sort({createdAt: -1});
    res.status(200).json({
      tasks: list,
      message: "Task fetching successful",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});


//delete task
router.delete('/deleteTask/:id',async (req,res)=>{
  try {
    const {email} =req.body;
    const user = await userModel.findOne({email});
    if(!user){
      return res.status(404).json({
        message: "User not found"
      })
    }
   const deletedTask = await listModel.findOneAndDelete({_id: req.params.id,user:user._id});
   if(!deletedTask){
    return res.status(400).json({
      message: "Task not found"
    })
   }
   await userModel.findOneAndUpdate({_id: user._id},{$pull: {list: req.params.id}});
   res.status(200).json({
    deletedTask,
    message: "task deleted successfully"
   })
      
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong"
    })
  }
})


module.exports = router;
