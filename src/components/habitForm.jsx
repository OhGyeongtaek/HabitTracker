import React, { Component } from 'react';

class HabitForm extends Component {
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();

        const name = this.inputRef.current.value;

        name && this.props.add(name);

        this.inputRef.current.value = "";
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.add}>add</button>
            </form>
        );
    }
}

export default HabitForm;