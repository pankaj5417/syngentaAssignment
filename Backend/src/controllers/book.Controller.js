const express = require("express");
const Book = require("../models/book.model");

const router = express.Router();

//Search books by Category

router.get("/:category", async (req, res) => {
  try {
    let regex = new RegExp(req.params.category, "i");
    const resp = await Book.find({ category: regex });
    console.log(resp)
    return res.send({ resp });
  } catch (e) {
    return res.send(e);
  }
});

//Search book by title or author
router.get("/search/:key", async (req, res) => {
  try {
    const resp = await Book.find({
      $or: [
        { title: { $regex: req.params.key } },
        { author: { $regex: req.params.key } },
      ],
    });
    console.log(resp)
    return res.send({ resp });
  } catch (err) {
    return res.status(400).json("Failed", err);
  }
});

//Add new book

router.post("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    console.log(book)

    return res.send({ book });
  } catch {
    return res.send("error");
  }
});

//
router.get("/available", async (req, res) => {
    try {
      const resp = await Book.find({
        $or: [
          { title: { $regex: req.params.key } },
          { author: { $regex: req.params.key } },
        ],
      });
      return res.send({ resp });
    } catch (err) {
      return res.status(400).json("Failed", err);
    }
  });
  

module.exports = router;
