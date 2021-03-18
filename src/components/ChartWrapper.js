import React from 'react'
import D3Chart from './D3Chart'

export default class ChartWrapper extends React.Component {
  chartRef = React.createRef()  
  
  componentDidMount() {
    // creating new instance of D3 chart which is rendered from D3Chart.js file
    new D3Chart(this.chartRef.current)
  }
  //append visualization to div in render()
  // <div ref={this.chartRef} is anchor point fo rattaching D3
  render() {
    return (
      <div ref={this.chartRef}>
        
      </div>
    )
  }
}