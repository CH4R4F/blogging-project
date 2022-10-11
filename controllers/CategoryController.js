const {
    json
} = require('express/lib/response');
const db = require('../models')
const category = db.category

exports.getAllCategories = async (req, res) => {
    const data = await category.findAll()
    res.json(data)
}

exports.createCategory = (req, res) => {
    const name = req.body.categoryName;
    // console.log(categoryName)
    if (!name) {
        res.status(400).send({
            success: false,
            message: "empty category name"
        })
        return
    }
    category.create({
            category_name: name
        }).then(data => {
            res.send({
                success: true,
                message: "category created successfully",
                data: data
            })
        })
        .catch(err => console.log(err))
}

exports.deleteCategory = async (req, res) => {
    let id = req.params.id
    const r = await category.destroy({
        where: {
            id: id
        }
    });

    res.send({
        success: true,
        message: "Category deleted successfully"
    })
}

exports.updateCategory = async (req, res) => {
    let name = req.body.categoryName
    let id = req.params.id
    if (!name) {
        res.status(400).send({
            success: false,
            message: "empty category name"
        })
        return
    }

    const data = await category.update({
        category_name: name
    }, {
        where: {
            id: id
        }
    })

    res.send({
        success: true,
        message: "Category updated successfully"
    })
}