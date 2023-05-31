import * as echarts from 'echarts';
import { useContext, useEffect } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';
import image1 from '../../assets/img/Rick_Sanchez.png';
import image2 from '../../assets/img/Morty_Smith.png';
import image3 from '../../assets/img/Beth_Smith.png';
import image4 from '../../assets/img/Summer_Smith.png';
import image5 from '../../assets/img/Jerry_Smith.png';

export const CharactersEpisodesChart = () => {
  const { characters } = useContext(GalleryContext);

  useEffect(() => {
    let chartDom = document.getElementById('CharactersEpisodesChart');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
        },
        formatter: function (params) {
          return params[0].name + ': ' + params[0].value;
        },
      },
      xAxis: {
        data: [...characters.map((c) => c?.name).slice(0, 5)],
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false },
      },
      series: [
        {
          name: 'hill',
          type: 'pictorialBar',
          barCategoryGap: '-130%',
          symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
          itemStyle: {
            opacity: 0.5,
            color: function (params) {
              const colors = [
                '#b0d7ea',
                '#fafe5c',
                '#f676da',
                '#e64353',
                '#536830',
              ];
              return colors[params.dataIndex];
            },
          },
          emphasis: {
            itemStyle: {
              opacity: 1,
            },
          },
          data: [...characters.map((c) => c?.episode?.length).slice(0, 5)],
          z: 10,
        },
        {
          name: 'glyph',
          type: 'pictorialBar',
          colorBy: 'data',
          barGap: '-100%',
          symbolPosition: 'end',
          symbolSize: 50,
          symbolOffset: [0, '-120%'],
          data: [
            {
              value: characters[0]?.episode?.length,
              symbol: 'image://' + image1,
              symbolSize: [60, 60],
            },
            {
              value: characters[1]?.episode?.length,
              symbol: 'image://' + image2,
              symbolSize: [60, 60],
            },
            {
              value: characters[2]?.episode?.length,
              symbol: 'image://' + image4,
              symbolSize: [60, 60],
            },
            {
              value: characters[3]?.episode?.length,
              symbol: 'image://' + image3,
              symbolSize: [60, 60],
            },
            {
              value: characters[4]?.episode?.length,
              symbol: 'image://' + image5,
              symbolSize: [60, 60],
            },
          ],
        },
      ],
    };
    option && myChart.setOption(option);
  }, [characters]);

  return (
    <div
      id="CharactersEpisodesChart"
      style={{ width: '100%', height: 500 }}
    ></div>
  );
};
