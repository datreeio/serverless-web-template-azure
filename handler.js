const createAzureFunctionHandler = require('azure-function-express').createAzureFunctionHandler
const express = require('express')

const app = express()

app.get('/api/app', (req, res) => {
  res.send('Hello Code Componenets meetup!')
})

module.exports = { app: createAzureFunctionHandler(app) }
