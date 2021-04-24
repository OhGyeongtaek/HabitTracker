import React, { Component } from 'react';

class Habit extends Component {
    plus = () => this.props.onPlus(this.props.habit)
    minus = () => this.props.onMinus(this.props.habit)
    delete = () => this.props.onDelete(this.props.habit)
    render() {
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <div className="habit-count">
                    <span>{count}</span>
                </div>
                <div className="habit-item">
                    <div className="habit-item-content">
                        <p className="habit-label">{name}</p>
                    </div>
                    <div className="habit-item-action">
                        <button className="habit-button habit-plus" onClick={this.plus}>
                            <i className="fas fa-plus-square"></i>
                        </button>
                        <button className="habit-button habit-minus" onClick={this.minus}>
                            <i className="fas fa-minus-square"></i>
                        </button>
                        <button className="habit-button habit-trash" onClick={this.delete}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </li>
        );
    }
}

export default Habit;