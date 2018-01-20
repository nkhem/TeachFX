import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

let tempData;

class SimpleLineChart extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  generateMoreData(numTimes, isRecursing){
    console.log(isRecursing, tempData);
    if (numTimes === 0) return tempData;
    tempData = isRecursing ? tempData : [];
    tempData = tempData.concat(this.props.data);
    this.generateMoreData(numTimes - 1, true);
    for (var i = 0; i < tempData.length; i++) {
      tempData[i].startDateTime = new Date(
        2018, 12, 9, 4, 30, 43, 0
      )
    }
    return tempData;
  }

	render () {
  	return (
    	<LineChart width={600} height={300} data={this.generateMoreData(3, false)}
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
