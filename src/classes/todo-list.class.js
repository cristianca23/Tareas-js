import { Todo } from "./todo.class";

export class TodoList {

    constructor (){
        // this.todos =[];
        this.cargarLocalStorage()


    }

    nuevoTodo (todo){
        this.todos.push (todo);
        this.guradarLocalStorage();



    }

    eliminarTodo ( id ){

       this.todos = this.todos.filter( todo => todo.id != id )
       this.guradarLocalStorage();

    }

    marcarCompletado ( id ){

        for ( const todo of this.todos){
            console.log(id, todo.id);

            if (todo.id == id){

                todo.completado = !todo.completado;
                this.guradarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){

       this.todos = this.todos.filter( todo => !todo.completado )
       this.guradarLocalStorage();

        

    }

    guradarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos) );


    }

    cargarLocalStorage(){

        // if (localStorage.getItem('todo')){

        //     this.todos = JSON.parse( localStorage.getItem('todo'));
        //     console.log('cargarlocal:', this.todos);

        // }else{
        //     this.todos = [];
        // }

        this.todos = ( localStorage.getItem('todo')) ? JSON.parse( localStorage.getItem('todo')) : [];

        // this.todos = this.todos.map(obj => Todo.fromJson(obj)) ;
    }
}
