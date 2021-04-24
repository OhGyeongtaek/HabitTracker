import React, { PureComponent } from 'react';

class HabitForm extends PureComponent {
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();

        const name = this.inputRef.current.value;

        name && this.props.add(name);

        this.inputRef.current.value = "";
    }

    render() {
        console.log("HabitForm");

        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.add}>add</button>
            </form>
        );
    }
}

export default HabitForm;