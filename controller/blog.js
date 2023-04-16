const Blog = require("../model/blog");

exports.getBlogById = (req, res, next, id) => {
    Blog.findById(id).exec((err, blogg) => {
    if (err) {
      return res.status(400).json({
        error: "Blog not found in DB"
      });
    }
    req.blog= blogg;
    next();
  });
};

exports.createBlog = (req, res) => {
  const blog = new Blog(req.body);
  blog.save((err, blg) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save blog in DB"
      });
    }
    res.json({ blog });
  });
};

exports.getBlog= (req, res) => {
  return res.json(req.blog);
};


exports.updateBlog = (req, res) => {
  const blog = req.blog;
  blog.title = req.body.title;
  blog.description = req.body.description;
 blog.save((err, updatedBlog) => {
   
    if (err) {
      return res.status(400).json({
        error: "Failed to update blog"
      });
    }
    res.json(updatedBlog);
  });
};

exports.removeBlog = (req, res) => {
  const blog = req.blog;

  blog.remove((err, blg) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this blog"
      });
    }
    res.json({
      message: "Successfull deleted"
    });
  });
};
