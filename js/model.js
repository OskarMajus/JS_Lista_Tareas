/* Datos guardados en un array */

export default class Model{
     constructor(){
         this.view = null;
         this.tareas =[];
         this.actualId = 1;
     }
     setView(view){
         this.view = view;
     }
     //devuelve todas las tareas que tenemos
     getTareas(){
        return this.tareas;
     }

     addTareas(title, description){
       const tarea = {
           id:this.actualId++,
           title,
           description,
           completed: false
       }
       this.tareas.push(tarea);
       console.log(this.tareas);

       //devolver a la vista el json(objeto)  completo de tareas
       return {...tarea} //retorna un objeto y expande las propiedades del mismo (... permiten realizar un clon del objeto)

       
     }

     removeTarea(id){
         const index = this.tareas.findIndex((tareas)=> tareas.id===id);
         this.tareas.splice(index, 1);
     }
}