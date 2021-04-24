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
        return (
            <form onSubmit={this.onSubmit} className="habit-form">
                <input type="text" ref={this.inputRef} placeholder="습관을 입력해주세요."/>
                <button onClick={this.add}>추가</button>
                <button className="reset-habit" onClick={this.props.reset}>Reset</button>
            </form>
        );
    }
}

export default HabitForm;