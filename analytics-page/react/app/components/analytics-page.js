import React, { PropTypes } from 'react';
import SimpleLineChart from './simple-line-chart';

const dummyData = [
  {
    name: 'Art',
    startDateTime: new Date("2015-03-27"),
    studentTalk: 30,
    teacherTalk: 45,
    otherTalk: 5,
  },
  {
    name: 'English',
    startDateTime: new Date("2015-03-25"),
    studentTalk: 51,
    teacherTalk:44,
    otherTalk: 5,
  },
  {
    name: 'Math',
    startDateTime: new Date("2015-03-26"),
    studentTalk: 60,
    teacherTalk: 35,
    otherTalk: 5,
  },
  {
    name: 'History',
    startDateTime: new Date("2015-04-27"),
    studentTalk: 70,
    teacherTalk: 20,
    otherTalk: 10,
  },
];

class AnalyticsPage extends React.Component {
  render () {
    return (
      <div>
        <SimpleLineChart data={ dummyData }/>
      </div>
    );
  }
}

export default AnalyticsPage;
