const db = require("../models");
const commenter = db.commenter;

exports.getAll = async(req, res) => {
    const data = await commenter.findAll()
    res.render("commenter", {
        data: data
    })
}