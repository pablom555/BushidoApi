async function profileController(req, res) {
  const { user } = req.body;

  res.json({ user });
}

module.exports = profileController;
