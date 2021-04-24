import { Component } from 'react';

class HabitHeader extends Component {
    render() {
        console.log("HabitHeader");
        return (
            <header>
                <h1>로고</h1>
                <h1>Habit Tracker</h1>
                <strong>
                    {this.props.count}
                </strong>
            </header>
        );
    }
}
export default HabitHeader;
