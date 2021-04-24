import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    render() {
        return (
            <ul className="habits">
                {
                    this.props.habits.map(
                        habit => <Habit key={habit.id} 
                                        habit={habit} 
                                        onPlus={this.props?.plus}
                                        onMinus={this.props?.minus}
                                        onDelete={this.props?.delete}
                                    />
                    )
                }
            </ul>
        );
    }
}

export default Habits;