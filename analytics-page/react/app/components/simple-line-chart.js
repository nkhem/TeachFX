import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

// const data = [
//       {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},//pv: teachertalk, uv: studentTalk
//       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
//       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
//       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//       {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
//       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
//       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
// ];

const dummyData = [
  {
    name: 'Art',
    classDate: new Date("2015-03-27"),
    studentTalk: 30,
    teacherTalk: 45,
    otherTalk: 5,
  },
  {
    name: 'English',
    classDate: new Date("2015-03-25"),
    studentTalk: 51,
    teacherTalk:44,
    otherTalk: 5,
  },
  {
    name: 'Math',
    classDate: new Date("2015-03-26"),
    studentTalk: 60,
    teacherTalk: 35,
    otherTalk: 5,
  },
  {
    name: 'History',
    classDate: new Date("2015-03-27"),
    studentTalk: 70,
    teacherTalk: 20,
    otherTalk: 10,
  },
  {
    name: 'History',
    classDate: new Date("2015-03-27"),
    studentTalk: 70,
    teacherTalk: 20,
    otherTalk: 10,
  },
];

let tempData;

class SimpleLineChart extends React.Component {
  multiplyDummyData(numTimes, isRecursing){
    console.log(isRecursing, tempData);
    if (numTimes === 0) return tempData;
    tempData = isRecursing ? tempData : [];
    tempData = tempData.concat(dummyData);
    this.multiplyDummyData(numTimes - 1, true);
    return tempData;
  }

	render () {
  	return (
    	<LineChart width={600} height={300} data={this.multiplyDummyData(3, false)}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="teacherTalk" stroke="#FF4C79" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="studentTalk" stroke="#00BBFF" />
       <Line type="monotone" dataKey="otherTalk" stroke="#C9C9C9" />
      </LineChart>
    );
  }
};

export default SimpleLineChart;
