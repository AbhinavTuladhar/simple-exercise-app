import express from 'express'
import ExerciseModel from '../models/Exercise';

const router = express.Router()

// Get all method
router.get('/getAll', async (request: express.Request, response: express.Response) => {
  try {
    const tempData = await ExerciseModel.find()
    response.status(200).json(tempData)
    return
  } catch (error) {
    response.status(500).json({ message: error })
    return
  }
})

// Get one method
router.get('/getOne', async (request: express.Request, response: express.Response) => {
  try {
    const tempData = await ExerciseModel.findOne()
    response.status(200).json(tempData)
    return
  } catch (error) {
    response.status(500).json({ message: error })
    return
  }
})

export default router