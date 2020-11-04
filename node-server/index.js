const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const fs = require('fs')

const app = express()
app.use(bodyParser.json())


app.get('/write', (req, res) => {
  const lineNumber = parseInt(req.query.lineNumber)
  if (isNaN(lineNumber) || lineNumber < 1 || lineNumber > 100) {
    res.status(400).send('you must provide lineNumber as a query param')
  } else {
    fs.readFile('../sample.txt', 'utf8', (err, content) => {
      const line = content.split('\n')[lineNumber - 1]
      res.json({ Result: line })
    })
  }
})

app.post('/sha', (req, res) => {
  if (req.body.n1 && req.body.n2) {
    const sum = req.body.n1 + req.body.n2
    res.json({
      Result: crypto.createHash('sha256').update(sum.toString()).digest('hex'),
    })
  } else {
    res.status(400).send('you must provide n1 and n2')
  }
})

app.listen(3000, () => {
  console.log('running on 3000...')
})