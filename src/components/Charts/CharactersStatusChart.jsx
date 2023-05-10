import { useEffect } from "react";
import * as echarts from "echarts";

export const CharactersStatusChart = ({ alive, dead, unknown }) => {
  useEffect(() => {
    let chartDom = document.getElementById("CharactersStatusChart");
    let myChart = echarts.init(chartDom, null, {
      renderer: 'svg'
    });
    let option;

    option = {
      backgroundColor: null,
      title: {
        text: null,
        left: "center",
        top: 20,
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "item",
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "75%",
          center: ["50%", "50%"],
          data: [
            {
              value: alive,
              name: "Alive",
              itemStyle: {
                color: "#6fe13e",
              },
            },
            {
              value: dead,
              name: "Dead",
              itemStyle: {
                color: "#a82525",
              },
            },
            {
              value: unknown,
              name: "Unknown",
              itemStyle: {
                color: "#9c9b9b",
              },
            },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          labelLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.3)",
            },
            smooth: 0.2,
            length: 10,
            length2: 20,
          },
          itemStyle: {
            color: "#c23531",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function (idx) {
            return Math.random() * 200;
          },
        },
      ],
    };

    option && myChart.setOption(option);
  }, [alive, dead, unknown]);

  return (
    <div
      id="CharactersStatusChart"
      style={{ width: "100%", height: 500 }}
    ></div>
  );
};
