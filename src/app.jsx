import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import HabitHeader from './components/habitHeader';
import HabitForm from './components/habitForm';

class app extends Component {
  state = {
      habits : [
          { id: 1, name : "Habit 1", count : 0 },
          { id: 2, name : "Habit 2", count : 0 },
          { id: 3, name : "Habit 3", count : 0 }
      ],
      habitsCount : 0
  }

  plus = habit => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    let habitsCount = this.state.habitsCount;
    habits[idx].count++;

    if (habits[idx].count === 1) {
      habitsCount++;
    }

    this.setState({habits, habitsCount});
  }

  minus = habit => {
      if (habit.count === 0) return;

      const habits = [...this.state.habits];
      const idx = habits.indexOf(habit);
      let habitsCount = this.state.habitsCount;
      habits[idx].count--;

      if (habits[idx].count === 0) {
        habitsCount--;
      }

      this.setState({habits, habitsCount});
  }

  delete = habit => {
      const habits = [...this.state.habits];
      const idx = habits.indexOf(habit);
      let habitsCount = this.state.habitsCount;

      if (habits[idx].count > 0) {
        habitsCount--;
      }
    
      habits.splice(idx, 1);

      this.setState({habits, habitsCount});
  }

  add = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0  }];
    this.setState({habits});
  }

  reset = () => {
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });

    this.setState({ habits, habitsCount: 0 });
  }
  render() {
    console.log("HabitHeader");
    return (
      <>
        <HabitHeader count={this.state.habitsCount}></HabitHeader>
        <HabitForm add={this.add} reset={this.reset}></HabitForm>
        <Habits 
          habits={this.state.habits} 
          plus={this.plus} 
          minus={this.minus} 
          delete={this.delete}></Habits>
      </>
    );
  }
}

export default app;

