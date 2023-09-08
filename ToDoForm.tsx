

interface ToDoFormProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleClick: () => void,
}

const ToDoForm = ({value, onChange, handleClick}: ToDoFormProps) => {

    return(
        <>
            <input
             type="text"
             placeholder="new todo"
             value={value}
             onChange={event => event.target}
             />
             <button onClick={handleClick}>Add todo</button>
        </>
    )
}

export default ToDoForm;