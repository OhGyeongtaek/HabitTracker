import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    render() {
        console.log("Habits");

        return (
            <ul>
                {
                    this.props.habits.map(
                        habit => <Habit key={habit.id} 
                                        habit={habit} 
                                        onPlus={this.props?.plus}
                                        onMinus={this.props?.minus}
                                        onDelete={this.props?.delete}
                                    ></Habit>
                    )
                }
            </ul>
        );
    }
}

export default Habits;