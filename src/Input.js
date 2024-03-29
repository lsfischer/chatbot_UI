import { Component } from "react";
import React from "react";

class Input extends Component {
    state = {
        text: ""
    }


    onSubmit(e) {
        e.preventDefault();
        this.setState({text: ""});
        this.props.onSendMessage(this.state.text);
      }

    onChange(e) {
        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <div className="Input">
                <form onSubmit={e => this.onSubmit(e)}>
                    <input
                        onChange={e => this.onChange(e)}
                        value={this.state.text}
                        type="text"
                        placeholder="Write a message..."
                        autofocus="true"
                    />
                    <button>Send</button>
                    <span onClick={this.props.resetMessages}>Reset</span>
                </form>
            </div>
        );
    }

}

export default Input;