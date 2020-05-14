import * as React from 'react';
import Head from 'next/head';

import style from '../styles/list.module.css';

function TodoForm() {
    const [text, setText] = React.useState('');

    const handleAddTodo = (event) => {
        event.preventDefault();

        fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify({ text }),
        });

        setText('');
    };

    const handleInputChange = ({ target: { value } }) => {
        setText(value);
    };

    return (
        <form onSubmit={handleAddTodo}>
            <input type='text' value={text} onChange={handleInputChange} />
            <button>Add</button>
        </form>
    );
}

function TodoList({ data }) {
    console.log(data);

    return (
        <>
            <ul>
                {data.map(([index, text]) => (
                    <li className={style.listItem} key={index}>
                        {text}
                    </li>
                ))}
            </ul>
            <style jsx>{`
                li {
                    color: blue;
                }
            `}</style>
        </>
    );
}

async function loadData() {
    const res = await fetch('/api/todos');
    const json = await res.json();

    return json;
}

export default function Todos() {
    const [todos, setTodos] = React.useState(null);
    const loadTodos = () => loadData().then((data) => setTodos(data));

    React.useEffect(() => {
        loadTodos();
    }, []);

    return (
        <h1>
            <Head>
                <title>MyTodos</title>
            </Head>
            Todos
            <button onClick={() => loadTodos()}>Refresh</button>
            <TodoList data={todos} />
            <TodoForm />
        </h1>
    );
}
