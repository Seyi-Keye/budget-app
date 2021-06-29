import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointsValueArray = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxValue = Math.max(...dataPointsValueArray);

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => 
        <ChartBar 
        value={dataPoint.value}
        maxValue={maxValue}
        key={dataPoint.label}
        label={dataPoint.label} 
      />)}
    </div>
  )
}

export default Chart;