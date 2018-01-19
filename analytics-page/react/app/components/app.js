import React, { Component } from 'react';
import AnalyticsPage from './analytics-page';

let dummyData = [
  {
    classTitle: 'English',
    classDate: new Date("2015-03-25"),
    studentTalk: 51,
    teacherTalk:44,
    otherTalk: 5,
  },
  {
    classTitle: 'Math',
    classDate: new Date("2015-03-26"),
    studentTalk: 60,
    teacherTalk: 35,
    otherTalk: 5,
  },
  {
    classTitle: 'History',
    classDate: new Date("2015-03-27"),
    studentTalk: 70,
    teacherTalk: 20,
    otherTalk: 10,
  },
];

export default class App extends Component {
  render(){
      return (
          <div>
            <AnalyticsPage
              dummyData={ dummyData }
              />
          </div>
      );
  }
}
