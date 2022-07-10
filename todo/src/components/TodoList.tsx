import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";
import TodoListItem from "./TodoListItem";

const TodoList = () => {

    {/*Lista Todo*/ }
    const {todos} = useContext<TodoContextType>(TodoContext)

    return (
        <div>
            <table className="uk-table">
                <caption>Lista de tarefas</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tarefa</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos?.map(
                            todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;