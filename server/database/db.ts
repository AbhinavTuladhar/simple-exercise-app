import mongoose from 'mongoose'

const connect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/exerciseApp')
    console.log('Database connected.')
  } catch (error) {
    throw new Error('Unable to connect')
  }
}

export default connect