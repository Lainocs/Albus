import express from 'express'
import router from './router.js'
import bodyParser from "body-parser"
import {sequelize, loadModels} from './database.js'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const port = 3000

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  
    app.use(cors())

    app.use(bodyParser.json())
    app.use(morgan('dev'))
    
    app.use(router)

    sequelize.sync()

    loadModels()
    
    app.listen(port, () => {
      console.log(`Server listening at port: ${port}`)
    })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })