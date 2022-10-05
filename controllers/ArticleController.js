const db = require("../models");
const article = db.article;

exports.getAll = async(req, res) => {
    const data = await article.findAll()
    res.render("blogs", {
        data: data
    })
}