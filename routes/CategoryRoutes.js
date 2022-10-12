const express = require('express')
const router = express.Router()
const {
    getAllCategories,
    createCategory,
    deleteCategory,
    updateCategory
} = require("../controllers/CategoryController")

//READ
router.get('/', (req, res) => {
    getAllCategories(req, res)
})

//CREATE
router.post('/add', (req, res) => {
    createCategory(req, res)
})

//DELETE
router.delete('/delete/:id', (req, res) => {
    deleteCategory(req, res)
})

//UPDATE
router.put("/:id", (req, res) => {
    updateCategory(req, res)
})

module.exports = router