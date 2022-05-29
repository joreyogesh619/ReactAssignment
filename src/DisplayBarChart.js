import React from 'react'
import BarChart from 'react-bar-chart';
export default function DisplayBarChart(props) {
  const margin = {top: 20, right: 20, bottom: 30, left: 40};
  return (
    <div>
      <div style={{width: '80%'}}> 
                <BarChart ylabel='Quantity'
                  width={200}
                  height={300}
                  margin={margin}
                  data={props.d}/>
            </div>
    </div>

  )
}
