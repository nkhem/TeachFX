import React, { PropTypes } from 'react';

class AnalyticsPage extends React.Component {
  render () {
    return (
      <p>{ this.props.dummyData[0].classTitle }</p>
    );
  }
}

export default AnalyticsPage;
