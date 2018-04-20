import express from 'express'
import list from './list'

const router = express()

router.get('/', list)

export default router