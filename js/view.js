import AddTarea from './components/add-tarea.js';

export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTareaForm = new AddTarea();
        
        this.addTareaForm.onClick((title, description)=>this.addTareas(title, description));
    }
    
    setModel(model){
        this.model = model;
    }

    addTareas(title, description){
        const tarea = this.model.addTareas(title, description);
        this.createRow(tarea);

    }

    removeTareas(id){
        this.model.removeTarea(id); //borra del servidor
        document.getElementById(id).remove(); //borra de la vista
        
    }

    createRow(tarea){
        const row = table.insertRow();
        row.setAttribute('id', tarea.id);
        row.innerHTML = `
            <td>${tarea.title}</td>
            <td>${tarea.description}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeTareas(tarea.id);
        row.children[3].appendChild(removeBtn);

    }
}