const express = require('express')
const app = express()
app.use(express.json())


// Morgan logger: https://github.com/expressjs/morgan
const morgan = require('morgan')
// custom Morgan token to display POST request body
morgan.token('body', function (req) { return JSON.stringify(req.body) })
// app.use(morgan('tiny'));
// use custom Mogran token string
app.use(morgan(':method :url :status :res[content-length] :response-time ms :body'))


// Custom logger middleware
// eslint-disable-next-line no-unused-vars
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
// use middleware
// app.use(requestLogger)

let persons = [
  {
    'id': '1',
    'name': 'Arto Hellas',
    'number': '040-123456'
  },
  {
    'id': '2',
    'name': 'Ada Lovelace',
    'number': '39-44-5323523'
  },
  {
    'id': '3',
    'name': 'Dan Abramov',
    'number': '12-43-234345'
  },
  {
    'id': '4',
    'name': 'Mary Poppendieck',
    'number': '39-23-6423122'
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => Number(n.id)))
    : 0
  return String(maxId + 1)
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name or number missing'
    })
  }

  if (persons.find(person => person.name === body.name)) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  response.json(person)
})

// Unknown endpoints
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})