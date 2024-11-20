const taskModel = require("../models/taskModel")

const tasksController = {
    //GET /app
    //passa a página index.ejs seguido do router.js as tasks que foram obtidas de taskModel
    index: (req, res) => {
        const taskLists = taskModel.getAllTasks()
        // renderizando uma pagina, {passando dados do Model}
        res.render('app', { taskLists })
    },
    // GET /app/nova-lista - exibir a pagina do formulario - redenrizar a tela
    create: (req, res) => {
        res.render('create.ejs')
    },
    //POST /app/nova-lista - destinado a salvar o model 
    save: (req, res) => {
        // destruturar o title
        const { title } = req.body
        const newList = taskModel.createList(title)
        taskModel.saveList(newList)

        res.redirect('/app')
    },
    // GET /posts/:id
    show: (req, res) => {
        const { id } = req.params
        if (!id) throw new Error('Lista de tarefas não encontrada!')
        const taskLists = taskModel.getTasklistById(id)
        res.render('showTask', { taskLists })
    },
    // POST /app/:id/excluir
    delete: (req, res) => {
        // obter o id da rota desestruturando 
        const { id } = req.params
        // chamando um metodo
        taskModel.deleteList(id)
        res.redirect('/app')
    },
    // POST /app/:id/nova-tarefa
    addTask: (req, res) => {
        // obtendo o id destruturando no parametro
        // obtendo o title destruturando no body 
        const { id } = req.params
        const { title } = req.body

        // chamando o metodo adicionando a task do id e o title que veio do body 
        taskModel.addTask(id, title)
        // redirecionando para a pagina /app/id de volta para aquela pagina lá em cima na lista de tarefa ficando na mesma página
        res.redirect(`/app/${id}`)

    },
    // POST /app/:listId/completar/:taskId
    // implementando a rota do taskModel
    completeTask: (req, res) => {
        const { listId, taskId } = req.params
        taskModel.completeTask(listId, taskId)
        res.redirect(`/app/${listId}`)
    },
        // POST /app/:listId/desfazer/:taskId
    undoTask: (req, res) => {
        const { listId, taskId } = req.params
        taskModel.undoTask(listId, taskId)
        res.redirect(`/app/${listId}`)
    },

}

module.exports = tasksController 