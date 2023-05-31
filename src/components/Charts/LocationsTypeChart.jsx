import * as echarts from 'echarts';
import { useEffect } from 'react';

export const LocationsTypeChart = ({
  planet,
  spaceStation,
  microverse,
  dimension,
  dream,
}) => {
  useEffect(() => {
    let chartDom = document.getElementById('LocationsTypeChart');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
      tooltip: {
        trigger: 'item',
      },

      className: 'image-size',
      legend: {
        orient: 'horizontal',
        left: 'center',
        bottom: '3%',
        itemGap: 20,
        textStyle: {
          color: '#7c7c7c',
          fontFamily: 'Montserrat',
          fontSize: 14,
        },
        itemStyle: {
          borderWidth: 0,
        },
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderWidth: 0,
            colorBy: 'data',
          },
          label: {
            show: true,
            position: 'outside',
            textBorderWidth: 0,
            textStyle: {
              color: '#7c7c7c',
              fontFamily: 'Montserrat',
              fontSize: 16,
            },
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: true,
            length: 28,
          },
          data: [
            {
              value: dream,
              name: 'Dream',
              itemStyle: {
                color: '#fbe37e',
              },
            },
            {
              value: planet,
              name: 'Planet',
              itemStyle: {
                color: '#b0d7ea',
              },
            },
            {
              value: spaceStation,
              name: 'Space station',
              itemStyle: {
                color: '#884d00',
              },
            },
            {
              value: microverse,
              name: 'Microverse',
              itemStyle: {
                color: '#715653',
              },
            },
            {
              value: dimension,
              name: 'Dimension',
              itemStyle: {
                color: '#f49832',
              },
            },
          ],
        },
      ],
    };

    option && myChart.setOption(option);
  }, [dimension, dream, microverse, planet, spaceStation]);

  return (
    <div>
      <div style={{ width: '100%', height: 500 }} id="LocationsTypeChart"></div>
    </div>
  );
};
