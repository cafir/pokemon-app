import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";



const Chart = ({ allStats }) => {
    console.log(allStats)

    const dataStat = allStats.map(stat => ({
        subject: stat.stat.name,
        A: stat.base_stat,
        fullMark: 150
    }))

  return (
    <div className="chart">
        <RadarChart
        outerRadius={100}
        width={400}
        height={400}
        data={dataStat}
        >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
        />
        </RadarChart>
    </div>
  );
}

export default Chart;
