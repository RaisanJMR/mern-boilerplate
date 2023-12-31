const moongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await moongoose.connect(process.env.MONGO_URI)
    console.log(`MONGODB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}
module.exports = connectDB
