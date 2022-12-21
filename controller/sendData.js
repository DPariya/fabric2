var express = require("express");
var router = express.Router();

/**
 * ADMIN ROUTES
 */

router.post("/", async (req, res) => {
	const { fetchApi } = req.body;
	res.json({
		success: true,
		data: fetchApi,
	});
});

module.exports = router;
