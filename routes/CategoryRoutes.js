const express = require('express')
const router = express.Router()
const {
    createCategory
} = require("../controllers/CategoryController")

router.get('/', () => {
    console.log('jeueceicue');
})

router.post('/add', (req, res) => {
    createCategory(req, res)
})

module.exports = router