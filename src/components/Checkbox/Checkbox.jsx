

export const Checkbox = (props) => {
    const {name, id, handler} = props;

    return (
        <div>
            <input name={name} id={id} type="checkbox" onChange={handler}/>
            <label htmlFor={id}>{name}</label>
        </div>
    )
}