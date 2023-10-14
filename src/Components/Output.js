import "./style.css";

export function Output (props) {
    return (
        <div>
            <div className="py-3 text-light text-end" style={{height: 20, fontSize: 20}}>{props.exp}</div>
            <div className="py-3 text-light text-end" style={{height: 40, fontSize: 34}}>{props.ans}</div>
        </div>
    )
}