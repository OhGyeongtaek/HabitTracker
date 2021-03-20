import React, { Component } from 'react';

class Habit extends Component {
    plus = () => {
        this.setState({ count : this.state.count + 1 });
    }

    minus = () => {
        if (this.state.count === 0) return;

        this.setState({ count : this.state.count -1 });
    }

    state = {
        count : 0
    }

    render() {
        return (
            <li className="habit">
                <span className="habit-label">{this.props.label}</span>
                <span className="habit-count">{this.state.count}</span>
                <button className="habit-button habit-plus" onClick={this.plus}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-minus" onClick={this.minus}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-trash">
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;