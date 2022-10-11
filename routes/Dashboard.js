const express = require('express')
const router = express.Router()

router.get("/article/add", (req, res) => {
  res.render("dashboard/addArticle");
})


module.exports = router