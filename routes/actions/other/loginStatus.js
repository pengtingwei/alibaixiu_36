module.exports = async (req, res) => {
	if (req.session && req.session.userInfo) {
		const s = `var isLogin = true; var userId=\"${req.session.userInfo._id}\"`
		res.send(s)
	}else {
		res.send('var isLogin = false')
	}
};
