export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        const btn = document.getElementById('add');
        btn.onclick = ()=> {
            this.addTareas('Titulo', 'Descripcion');
        }
    }
    
    setModel(model){
        this.model = model;
    }

    addTareas(title, description){
        const tarea = this.model.addTareas(title, description);
    }
}