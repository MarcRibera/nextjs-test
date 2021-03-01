import { LineChart, BarChart, Bar, Line , CartesianGrid, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import { useState, useEffect } from 'react'

const dashboard = () => {
  const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

 const [asteroidsData, setAsteroidsData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-10&api_key=i9kr4lTxq7qRJjn032dF9yhmgmQ7nrr8giXfq9Dy')
    const data = await res.json();
    buildData(data)
  }

  const buildData = (data) => {
    const nearEarthObjects = data.near_earth_objects;
    let chartData = [];

    for (let date in nearEarthObjects ) {
      chartData.push({date:date, value: nearEarthObjects[date].length})
    }
    console.log('chartData',chartData);
    setAsteroidsData(chartData)

  }

  const wrapperStyle = {
     display: 'block',
     marginBottom: '70px',
     marginLeft: 'auto',
     marginRight: 'auto',
     width: `70%`,
     height: '320px',
  }

  const chartMargins = {
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  }

  return(
    <>
      <h1>dashboard</h1>
      <p>Some charts made by recharts.js</p>

      <h3>Fake Data</h3>
      <div style={wrapperStyle}>
       <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={chartMargins}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="amt" stroke="#ff0000"/>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend verticalAlign="top" align="right" height={36}/>
          <Tooltip />
        </LineChart>
        </ResponsiveContainer>
      </div>

      <h3>Retrieve a list of Asteroids based on their closest approach date to Earth.</h3>
      <div style={wrapperStyle}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={700}
            height={300}
            data={asteroidsData}
            margin={chartMargins}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <Tooltip />
            <Legend verticalAlign="top" align="right" height={36}/>
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </>
  )
}

export default dashboard
