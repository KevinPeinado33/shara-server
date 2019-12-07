const { Router } = require('express');
const router = Router();

router.get('/',(req, res) => {
    const data = {
        "name" : "Kevin",
        "last_name" : "Peinado"
    }
    res.json(data);
});

module.exports = router;
