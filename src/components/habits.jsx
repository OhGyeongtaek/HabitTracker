import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits : [
            { id: 1, name : "test1", count : 0 },
            { id: 2, name : "test2", count : 0 },
            { id: 3, name : "test3", count : 0 }
        ]
    }

    plus = habit => {
        const habits = [...this.state.habits];
        const idx = habits.indexOf(habit);
        habits[idx].count++;

        this.setState({habits});
    }

    minus = habit => {
        if (habit.count === 0) return;

        const habits = [...this.state.habits];
        const idx = habits.indexOf(habit);
        habits[idx].count--;

        this.setState({habits});
    }

    delete = habit => {
        const habits = [...this.state.habits];
        const idx = habits.indexOf(habit);
        habits.splice(idx, 1);

        this.setState({habits});
    }

    render() {
        return (
            <ul>
                {
                    this.state.habits.map(
                        habit => <Habit key={habit.id} 
                                        habit={habit} 
                                        onPlus={this.plus}
                                        onMinus={this.minus}
                                        onDelete={this.delete}
                                    ></Habit>
                    )
                }
            </ul>
        );
    }
}

export default Habits;