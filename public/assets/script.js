document.querySelectorAll('#deleteList').forEach(element => {
    element.addEventListener('submit', (ev) =>{
        const confirmation = confirm('Quer mesmo excluir essa tarefa?')
        if(!confirmation){
            ev.preventDefault();
        }
    })
})