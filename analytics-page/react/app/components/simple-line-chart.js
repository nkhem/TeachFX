import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts';

class SimpleLineChart extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  generateData(datumCount){
    datumCount = (datumCount < 0) ? 1 + Math.floor(Math.random() * 50) : datumCount;
    for (var i = 0; i < datumCount; i++) {
      let teacherTalk = 20 + Math.floor(Math.random() * 80);
      let studentTalk = Math.floor(Math.random() * (100 - teacherTalk));
      let newDatum =       {
              name: ['Art', 'History', 'Math'][Math.floor(Math.random() * 3)],
              startDateTime: new Date(
                2015 + Math.floor(Math.random() * 3),//year
                1 + Math.floor(Math.random() * 12),//month
                1 + Math.floor(Math.random() * 28),//date
                1 + Math.floor(Math.random() * 12),//hour
                Math.floor(Math.random() * 60),//min
                Math.floor(Math.random() * 60),//sec
                0//millisec
              ),
              teacherTalk,
              studentTalk,
              otherTalk: 100 - teacherTalk - studentTalk,
            };
            this.props.data.push(newDatum);
    }

    return this.props.data;
  }

	render () {
    let data = this.generateData(-1);

  	return (
    	<LineChart width={600} height={300} data={ data }
            margin={{top: 15, right: -30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"
          label={{ value: '% of class time', angle: -90, position: 'insideLeft' }}
          onMouseOver={e => console.log(e)}>
          <Label position="bottom" value="class date"/>
        </XAxis>
        <YAxis label={{ value: 'class date', position: 'outsideBottom' }} />
        <Tooltip/>
       {
         //   <Legend width={100} wrapperStyle={{
         //   top: 40,
         //   right: 20,
         //   backgroundColor: '#f5f5f5',
         //   border: '1px solid #d5d5d5',
         //   borderRadius: 3,
         // }} />
       }
       <Line type="monotone" dataKey="teacherTalk" stroke="#FF4C79" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="studentTalk" stroke="#00BBFF" />
       <Line type="monotone" dataKey="otherTalk" stroke="#C9C9C9" />
      </LineChart>
    );
  }
}

export default SimpleLineChart;
