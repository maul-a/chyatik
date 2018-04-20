import Message from '../../models/message'
import User from '../../models/user'

async function list(req, res) {
  const messages = await Message.findAll().map(async message => {
    const user = await User.findById(message.userId)
    return ({
      id: message.id,
      text: message.text,
      ipAddress: user.ipAddress,
    })
    }
  )

  return res.status(200).json({ messages })
}

export default list