import React, { PropTypes } from 'react';
import BarChart from './bar-chart';

class AnalyticsPage extends React.Component {
  render () {
    return (
      <div>
        <BarChart data={[5,10,1,3]} size={[500,500]} />
        <p>{ this.props.dummyData[0].classTitle }</p>
        <div id="container" />
      </div>
    );
  }
}

export default AnalyticsPage;
