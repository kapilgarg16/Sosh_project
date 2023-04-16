
const express = require("express");
const router = express.Router();

const {
    getBlogById,
    createBlog,
    updateBlog,
    removeBlog,
    getBlog
} = require("../controller/blog");
const { isSignedIn,  isAuthenticated } = require("../controller/auth");
const { getUserById } = require("../controller/user");

//params
router.param("userId", getUserById);
router.param("blogId", getBlogById);

//actual routers goes here

//create
router.post(
  "/blog/create/:userId",
  isSignedIn,
  isAuthenticated,
  createBlog
);

//read
router.get("/blog/:blogId", getBlog);


//update
router.put(
  "/blog/:blogId/:userId",
  isSignedIn,
  isAuthenticated,
  
  updateBlog
);

//delete

router.delete(
  "/blog/:blogId/:userId",
  isSignedIn,
  isAuthenticated,
  removeBlog
);

module.exports = router;
