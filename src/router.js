const express = require('express')
const tasksController = require('./controllers/tasksController')

const router = express.Router()
// pagina incial
// importante deixar as rotas na ordem certa!
router.get('/', (req, res) => res.render('index'))
router.get('/app', tasksController.index)
// pagina de criação para nova-lista.ejs para associar ao create.ejs criado no controller
router.get('/app/nova-lista', tasksController.create)
router.post('/app/nova-lista', tasksController.save)

router.get('/app/:id', tasksController.show)
router.post('/app/:id/nova-tarefa', tasksController.addTask)
router.post('/app/:id/excluir', tasksController.delete)
// detalhe importante: o caminho que ta sendo implementado é de referencia precisa ser colocado tem que ser exatamente o que foi passado no Controller(tasksController) nesse caminho de rotas.
router.post('/app/:listId/completar/:taskId', tasksController.completeTask)
router.post('/app/:listId/desfazer/:taskId', tasksController.undoTask)
module.exports = router; 