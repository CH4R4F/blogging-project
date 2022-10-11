const express = require('express')
const router = express.Router()
const {
    getAll,
    createCommenter,
    deleteCommenter,
    updateCommenter
} = require("../controllers/CommenterController")

router.post("/add", createCommenter);

router.get("/", async(req, res) => {
    const commenter = await getAll(req, res);
    res.render("commenter", {
        data: commenter
    })
});

//DELETE
router.delete('/delete/:id', (req, res) => {
    deleteCommenter(req, res)
})

//UPDATE
router.put("/edit/:id", (req, res) => {
    updateCommenter(req, res)
})


module.exports = router;