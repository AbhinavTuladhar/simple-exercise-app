import express from 'express'
import ExerciseModel from '../models/Exercise';

const router = express.Router()

// Get all method
router.get('/getAll', async (request: express.Request, response: express.Response) => {
  try {
    const tempData = await ExerciseModel.find()
    console.log(tempData)
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

// Get one by id method
router.get('/getOne/:id', async (request: express.Request, response: express.Response) => {
  try {
    const { params: { id } } = request
    const tempData = await ExerciseModel.findById(id)
    response.status(200).json(tempData)
    return
  } catch (error) {
    response.status(500).json({ message: error })
    return
  }
})

// Posting a single row
router.post('/post', async (request: express.Request, response: express.Response) => {
  try {
    const { body } = request
    const newItem = new ExerciseModel({...body})
    const savedData = await newItem.save()
    response.status(200).json(savedData)
    return
  } catch(error) {
    response.status(500).json({ message: error })
    return
  }
})

// Deleting a single row
router.delete('/delete/:id', async (request: express.Request, response: express.Response) => {
  try {
    const { params: { id } } = request
    const itemToDelete = await ExerciseModel.findByIdAndDelete(id)

    if (!itemToDelete) {
      response.status(404).json({ message: `Unable to delete exercise with id: $id`})
      return
    }
    
    response.status(200).json(itemToDelete)
    return
  } catch(error) {
    response.status(500).json({ message: error })
    return
  }
})

export default router