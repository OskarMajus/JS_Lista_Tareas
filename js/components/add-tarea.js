export default class AddTarea {
    constructor(){
         this.btn = document.getElementById('add');
         this.title = document.getElementById('title');
         this.description = document.getElementById('description');
    }

    onClick(callback){
        this.btn.onclick = () =>{
            if(title.value === '' || description.value === ''){
                // alert.innerText = 'Title and descritpion are 
                console.error('Incorrecto');
            } else{
                callback(this.title.value, this.description.value);
            }
        }
    }
}