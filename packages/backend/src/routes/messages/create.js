import Message from '../../models/message'

async function create(req, res) {
  const text = req.body['text']
  const userId = req.body['userId']
  const messages = await Message.create({ text, userId})
  console.log(messages)

  return res.status(200).json(messages)
}

export default create