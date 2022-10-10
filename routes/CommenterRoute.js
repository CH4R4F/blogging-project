const express = require('express')
const router = express.Router()
const {
    getAll
} = require("../controllers/CommenterController")

router.get('/', (req, res) => {
    getAll(req, res)
})



module.exports = router;