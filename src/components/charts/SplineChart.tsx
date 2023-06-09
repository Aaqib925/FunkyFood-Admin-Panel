import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const SplineChart = () => {

  const [series, setSeries] = useState([{
    name: 'series-1',
    data: [50, 130, 55, 75, 0, 100, 150, -50, 125, 150, 200, 210]
  }, {
    name: 'series-2',
    data: [-30, 45, 65, 55, -30, -15, 30, 48, 105, 130, 180, 230]
  }])

  const [options, setOptions] = useState({
    chart: {
      id: 'apex-line-chart',
      zoom: {
        enabled: false
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    title: {
      text: 'Lorem Ipsum',
      align: 'left',
      style: {
        fontSize: '24px',
        color: '#1E1E1E',
      }
    },
    colors: ['#ECB928', '#2CACE2'],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
  })

  return (
    <ApexCharts options={options} series={series} type="line" width={'100%'} height={"100%"} />
  )
}

export default SplineChart;