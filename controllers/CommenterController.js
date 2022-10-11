const db = require("../models");
const commenter = db.commenter;

exports.getAll = async(req, res) => {
    const data = await commenter.findAll()
    return data
}

exports.createCommenter = async(req, res) => {
    let com = req.body.commenter
    if (!com) {
        res.status(400).send({
            success: false,
            message: "invalid commenter"
        })
    }

    const data = await commenter.create({
        commenter_article: com
    });

    res.send({
        success: true,
        message: "Commenter created successfully",
        data: data,
    });
};

exports.deleteCommenter = async(req, res) => {
    let id = req.params.id
    const r = await commenter.destroy({
        where: {
            id: id
        }
    });

    res.send({
        success: true,
        message: "Commenter deleted successfully"
    })
}

exports.updateCommenter = async(req, res) => {
    let name = req.body.commenter
    let id = req.params.id
    if (!name) {
        res.status(400).send({
            success: false,
            message: "empty commenter name"
        })
        return
    }

    const data = await commenter.update({
        commenter_article: name
    }, {
        where: {
            id: id
        }
    })

    res.send({
        success: true,
        message: "Commenter updated successfully"
    })
}