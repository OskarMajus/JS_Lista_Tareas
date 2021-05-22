import Alert from './alert.js';

export default class AddTarea {
    constructor(){
         this.btn = document.getElementById('add');
         this.title = document.getElementById('title');
         this.description = document.getElementById('description');

         this.alert = new Alert('alert');
    }

    onClick(callback){
        this.btn.onclick = () =>{
            if(title.value === '' || description.value === ''){
               this.alert.show('Titulo y Descripción son requeridos');
            } else{
                this.alert.hide();
                callback(this.title.value, this.description.value);
            }
        }
    }
}