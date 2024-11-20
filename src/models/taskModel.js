// passa um array
// importante que o task seja um array para que seja interado
let taskLists = [{ id: '1', title: 'Tarefas de casa', tasks: [{id: '1', title: 'Comprar pão', completed: false}] }];

module.exports = {
    getAllTasks: () => {
        return taskLists
    },
    getTasklistById: (id) => {
        return taskLists.find(task => task.id === id)
    },
    createList: (title) => {
        const newList = {
            id: Math.random(Math.random() * 999999).toString(),
            title: title,
            tasks: []
        }
        return newList 
    },
    deleteList: (listId) => {
    //   vai pegar o index, o array.findIndex(encontrar a lista do que foi passado === listId)
        const listIndex = taskLists.findIndex(task => task.id === listId)
        //pegar o taskLists e chamar o splice para poder encontrar uma posição no array e remover, passando o index, removendo '1' elemento
        taskLists.splice(listIndex, 1)
    },
    saveList: (taskList) => {
        if (taskList.title === '') throw new Error('Titulo da lista nao pode ficar vazio.')
        taskLists.push(taskList)
    },
    // metodo addTask
    addTask: (listId, taskTitle) => {
        // adicionar uma tarefa
        const newTask = {
            id: Math.random(Math.random() * 999999).toString(),
            title: taskTitle,
            completed: false
        }
        // assumindo que os objetos acima no array estejam seguindo aquele formato e reaproveitando o codigo do createList e pegando as tasks dessas listas que foram escontradas(listId) e joga a nova tarefa lá dentro (newTask)
        // caso de erro de que isso nao é uma função provavelmente por causa do escopo, dai só reimplementar a tarefa
        // vai encontrar a lista cuja o id seja igual parametro listId
        taskLists.find(list => list.id === listId).tasks.push(newTask)
    },
    //  com completeTask ele precisa de um listId para achar a lista da qual ela pertence, depois taskId para saber qual tarefa irá concluir
    completeTask: (listId, taskId) => {
        // pegar um taskList com um find para achar a lista
        const taskList = taskLists.find(list => list.id ===listId)
        // achando a tarefa com taskList.task.find, dai tem uma tarefa que vai encontrar, baseado no seguinte se task.id é igual ao taskId do parametro 
        const task = taskList.tasks.find(task => task.id === taskId)
        // ao clicar em completar irá alterar o objeto
        task.completed = true
    },
    undoTask: (listId, taskId) => {
        // pegar um taskList com um find para achar a lista
        const taskList = taskLists.find(list => list.id ===listId)
        // achando a tarefa com taskList.task.find, dai tem uma tarefa que vai encontrar, baseado no seguinte se task.id é igual ao taskId do parametro 
        const task = taskList.tasks.find(task => task.id === taskId)
        // ao clicar em completar irá alterar o objeto
        task.completed = false
    }  
    
}
// reinicie o servidor se aparecer algum problema 