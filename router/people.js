import express from 'express'
import {getPeople, createPerson, createPersonPostman, updatePerson, daletePerson} from '../controllers/people.js'
const pRouter = express.Router()

pRouter.get('/', getPeople)

pRouter.post('/', createPerson)

pRouter.post('/postman', createPersonPostman)

// pRouter.put('/:id', updatePerson)

// pRouter.delete('/:id', daletePerson)

//alternativa de una linea de codigo
pRouter.route('/:id').put(updatePerson).delete(daletePerson)

export {pRouter}