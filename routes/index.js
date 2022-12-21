var express = require("express");
var router = express.Router();
var fetchController = require("../controller/fetchData");
/**
 * ADMIN ROUTES
 */

router.use("/fetch", fetchController);
router.use("/post", fetchController);

router.use("/heart-bit", (req, res, next) => {
	res.json({
		success: true,
		message: "Fabric backend works fine!!!",
	});
});

module.exports = router;
