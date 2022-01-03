const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("GET /places | PLACESSSS")
});

module.exports = router;
