/* Datos guardados en un array */

export default class Model{
     constructor(){
         this.view = null;
         this.tareas =JSON.parse(localStorage.getItem('tareas'));
         if(!this.tareas || this.tareas.length < 1){
             this.tareas = [
               {
                    id:0,
                    title: 'Prueba',
                    description: 'Esto es una prueba',
                    completed: false,
               }
             ]
                
             this.actualId = 1;
         }else{
             this.actualId = this.tareas[this.tareas.length-1].id +1;
         }
        
     }
     setView(view){
         this.view = view;
     }
     
     //guarda en el localstorage
     save(){
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
     }
     //devuelve todas las tareas que tenemos
     getTareas(){
        return this.tareas;
     }

     findTarea(id){
         return this.tareas.findIndex((tareas)=> tareas.id===id);
     }

     toggleCompleted(id){
         const index = this.findTarea(id);
         const tarea = this.tareas[index];
         tarea.completed = !tarea.completed;
         this.save();
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
       this.save();

       //devolver a la vista el json(objeto)  completo de tareas
       return {...tarea} //retorna un objeto y expande las propiedades del mismo (... permiten realizar un clon del objeto)

       
     }

     removeTarea(id){
         const index = this.findTarea;
         this.tareas.splice(index, 1);
         this.save();
     }
}