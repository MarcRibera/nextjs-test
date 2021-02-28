import { LineChart, Line , CartesianGrid, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

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
  return(
    <>
      <h1>dashboard</h1>
        <LineChart
          width={700}
          height={300}
          data={data}
          margin={{
              top: 25,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="amt" stroke="#ff0000"/>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
        </LineChart>
    </>
  )
}

export default dashboard