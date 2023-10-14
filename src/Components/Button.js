import "./style.css";

export function Button (props) {
    return (
        <button className="w-100 bg-custom-1 text-light border-0 p-3" onClick={props.onclick} value={props.val}>{props.label}</button>
    )
}

export function ButtonOp (props) {
    return (
        <button style={{fontSize: 20}} className="w-100 bg-custom-1 text-primary border-0 py-1" onClick={props.onclick} value={props.val}>{props.label}</button>
    )
}