import React, { PropTypes } from 'react';
import SimpleLineChart from './simple-line-chart';

const dummyData = [];

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
