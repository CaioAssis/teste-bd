import express from 'express'
import ContatoController from '../controllers/ContatoController.js'

const ContatoRouter = express.Router()

ContatoRouter.get('/', ContatoController.list)
ContatoRouter.post('/', ContatoController.createContato)
ContatoRouter.get('/:id', ContatoController.getContatoById)
ContatoRouter.delete('/:id', ContatoController.destroyContato)
ContatoRouter.put('/:id', ContatoController.updateContato)

export default ContatoRouter