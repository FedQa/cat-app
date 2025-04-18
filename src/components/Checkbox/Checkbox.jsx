import './Checkbox.scss'

export const Checkbox = (props) => {
    const {name, id, handler} = props;

    return (
        <div className="checkbox">
            <input 
            name={name} 
            id={id} 
            type="checkbox" 
            onChange={handler}
            className="checkbox__handler"
            />
            <label htmlFor={id} className="checkbox__label">{name}</label>
        </div>
    )
}