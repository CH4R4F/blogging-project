const express = require('express')
const router = express.Router()
const {
    getAll
} = require("../controllers/ArticleController")

router.get('/', (req, res) => {
    getAll(req, res)
})



module.exports = router;