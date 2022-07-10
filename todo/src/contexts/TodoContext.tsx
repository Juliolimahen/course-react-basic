import React, { createContext } from "react";
import { Todo } from "../models/Todo";
import { TodoContextType } from "./TodoContextType";

/**É necessário inicializar os atributos, com valores padrão */
export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});

const TodoProvider = (props: any) => {

    const todos: Todo[] = [
        { id: 1, title: "Ir ao supermecado", done: true },
        { id: 2, title: "Ir a academia", done: false }
    ]

    const addTodo = (title: string) => {
        console.log('Adcionou' + title)
    }

    const removeTodo = (todo: Todo) => {
        console.log('removeu' + todo.title)
    }

    const toggle = (todo: Todo) => {
        console.log('Alterou' + todo.title)
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;