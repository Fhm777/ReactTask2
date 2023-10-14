import { Component } from "react";
import { Button, ButtonOp } from "./Button";
import { Output } from "./Output";

export class Calc extends Component {
    constructor (props) {
        super(props);
        this.state = {ans: "", exp: ""};
    }

    handleClick = (event) => {
        var val = event.target.value;
        var ans1 = "";
        var exp1 = "";

        if (this.state.ans === "Error") {
            this.setState({ans: "", exp: ""});
        }

        switch (val) {
            case "=":
                try {
                    if (this.state.exp !== "") {
                        ans1 = eval(this.state.exp);
                        exp1 = "";
                        this.setState({ans: ans1, exp: exp1});
                    }
                }
                catch {
                    this.setState({ans: "Error", exp: ""});
                }
               break;
            case "del":
                if (this.state.ans !== "")
                    this.setState({ans: ""});
                exp1 = this.state.exp.slice(0, -1);
                this.setState({exp: exp1});
                break;
            default:
                ans1 = this.state.ans;
                if (this.state.ans!=="") {
                    if (val === "-" || val === "+" || val === "*" || val === "/") {
                        exp1 = this.state.ans + val;
                        ans1 = "";
                    }
                    else {
                        exp1 = this.state.exp + val;
                        ans1 = "";
                    }

                }
                else {
                    exp1 = this.state.exp + val;
                }
                this.setState({ans: ans1, exp: exp1});
                break;
        }
    }

    render () {
        return (
            <div>
                <div className="mt-5 row justify-content-center mb-0">
                    <div className="col-2 py-5 bg-custom-2 rounded-top-5">
                        <Output exp={this.state.exp} ans={this.state.ans}></Output>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-1 bg-custom-1 pt-3 rounded-corner-1">
                        <div className="row pt-3">
                            <div className="col p-0"><Button onclick={this.handleClick} val="7" label="7"></Button></div>
                            <div className="col p-0"><Button onclick={this.handleClick} val="8" label="8"></Button></div>
                            <div className="col p-0"><Button onclick={this.handleClick} val="9" label="9"></Button></div>
                        </div>
                        <div className="row">
                            <div className="col p-0"><Button onclick={this.handleClick} val="4" label="4"></Button></div>
                            <div className="col p-0"><Button onclick={this.handleClick} val="5" label="5"></Button></div>
                            <div className="col p-0"><Button onclick={this.handleClick} val="6" label="6"></Button></div>
                        </div>
                        <div className="row">
                            <div className="col p-0"><Button onclick={this.handleClick} val="1" label="1"></Button></div>
                            <div className="col p-0"><Button onclick={this.handleClick} val="2" label="2"></Button></div>
                            <div className="col p-0"><Button onclick={this.handleClick} val="3" label="3"></Button></div>
                        </div>
                        <div className="row">
                            <div className="col p-0"><Button onclick={this.handleClick} val="0" label="0"></Button></div>
                            <div className="col p-0"><Button onclick={this.handleClick} val="." label="."></Button></div>
                            <div className="col p-0"><Button onclick={this.handleClick} val="=" label="="></Button></div>
                        </div>
                    </div>
                    <div className="col-1 py-5 rounded-corner-2 bg-custom-1">
                        <div><ButtonOp onclick={this.handleClick} val="del" label="⌫"></ButtonOp></div>
                        <div><ButtonOp onclick={this.handleClick} val="/" label="÷"></ButtonOp></div>
                        <div><ButtonOp onclick={this.handleClick} val="*" label="×"></ButtonOp></div>
                        <div><ButtonOp onclick={this.handleClick} val="-" label="-"></ButtonOp></div>
                        <div><ButtonOp onclick={this.handleClick} val="+" label="+"></ButtonOp></div>
                    </div>
                </div>
            </div>
        )
    }
}