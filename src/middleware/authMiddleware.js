module.exports = (req, res, next) => {
  const headerToken = req.headers.authorization;
  const queryToken = req.query.token;

  if (
    headerToken !== "Bearer mysecrettoken" &&
    queryToken !== "mysecrettoken"
  ) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};