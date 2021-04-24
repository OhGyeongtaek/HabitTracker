import { Component } from 'react';

class HabitHeader extends Component {
    render() {
        return (
            <header className="habit-header">
                <h1>
                    Habit Tracker : 
                    <strong>
                        {this.props.count}
                    </strong>
                </h1>
            </header>
        );
    }
}
export default HabitHeader;
