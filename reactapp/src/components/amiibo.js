import React, { Component } from 'react';


class Amiibo extends Component {
  render() {
    return (
      <div className='card'>
        <img src={this.props.amiibo.image} width='40%'></img>
        <p>{this.props.amiibo.name}</p>
        {/* <p>{this.props.amiibo.amiiboSeries}</p> */}
        {/* <p>{this.props.amiibo.character}</p> */}
        {/* <p>{this.props.amiibo.gameSeries}</p> */}
        
        
      </div>
    );
  }
}

export default Amiibo;
