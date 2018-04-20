import User from '../../models/user'

async function list(req, res) {
  const users = await User.findAll().map(user => ({
    id: user.id,
    ipAddress: user.ipAddress,
  }))
  return res.status(200).json({ users })
}

export default list