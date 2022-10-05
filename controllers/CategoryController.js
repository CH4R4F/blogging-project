const db = require('../models')
const category = db.category

exports.createCategory = (req, res) => {
    const name = req.body.categoryName;
    category.create({
            category_name: name
        }).then(data => {
            res.end('sf')
        })
        .catch(err => console.log(err))
}

