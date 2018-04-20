import Message from '../../models/message'

async function list(req, res) {
  const messages = await Message.findAll()
  console.log(messages)

  return res.status(200).json(messages)
}

export default list