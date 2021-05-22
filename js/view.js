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

    render(){
        const tareas = this.model.getTareas();
        //for(let i=0; i< tareas.length; i++)
        // for (const tarea of tareas){
        //     this.createRow(tarea);
        // }
        tareas.forEach((tarea) => this.createRow(tarea));
        
    }

    addTareas(title, description){
        const tarea = this.model.addTareas(title, description);
        this.createRow(tarea);

    }

    toggleCompleted(id){
        this.model.toggleCompleted(id); //se llama al modelo 
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
                 
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarea.completed;
        checkbox.onclick =() => this.toggleCompleted(tarea.id);
        row.children[2].appendChild(checkbox);


        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeTareas(tarea.id);
        row.children[3].appendChild(removeBtn);

    }
}