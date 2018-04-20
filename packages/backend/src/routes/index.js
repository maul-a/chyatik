import express from 'express';
import users from './users/index'

const router = express()
router.use('/users', users)

export default router