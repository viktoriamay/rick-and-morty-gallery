import * as echarts from "echarts";
import { useContext, useEffect, useState } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";
import RickMortyApi from "../../utils/api/rickMortyApi";

export const LocationsTypeChart = ({planet, spaceStation,microverse,dimension,dream}) => {
//   const {
//     characters,
//     locationTypePlanet,
//     locationTypeSpaceStation,
//     infoCharacters,
//     infoLocations,
//     infoEpisodes,
//     updateType,
//     type,
//     locations,
//   } = useContext(GalleryContext);

//   const [planet, setPlanet] = useState(0);
//   const [station, setStation] = useState(0);
//   const [microverse, setMicroverse] = useState(0);
//   const [dimension, setDimension] = useState(0);
//   const [dream, setDream] = useState(0);

//   useEffect(() => {
//   Promise.all([
//     RickMortyApi.getLocations(1, '', 'Planet', '').then((locations) => {
//       setPlanet(locations?.info?.count);
//     }),
//     RickMortyApi.getLocations(1, '', 'Space station', '').then((locations) => {
//       setStation(locations?.info?.count);
//     }),
//     RickMortyApi.getLocations(1, '', 'Microverse', '').then((locations) => {
//       setMicroverse(locations?.info?.count);
//     }),
//     RickMortyApi.getLocations(1, '', 'Dimension', '').then((locations) => {
//       setDimension(locations?.info?.count);
//     }),
//     RickMortyApi.getLocations(1, '', 'Dream', '').then((locations) => {
//       setDream(locations?.info?.count);
//     }),
//   ]).then(() => {
//     // Действия после выполнения всех промисов
//   });
// }, [infoLocations.count, type, updateType]);

  useEffect(() => {
    let chartDom = document.getElementById("LocationsTypeChart");
    let myChart = echarts.init(chartDom);
    let option;

    option = {
      tooltip: {
        trigger: "item",
      },

      className: "image-size",
      legend: {
        // top: '5%',
        // left: 'center'
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Количество локаций",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
            colorBy: "data",
          },
          label: {
            show: true,
            position: "outside",
            textBorderWidth: 0,
            // textBorderColor: 'pink'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: true,
            length: 28,
          },

          data: [
            {
              value: planet,
              name: 'Planet',
              itemStyle: {
                color: "#b0d7ea",
              },
            },
            {
              value: spaceStation,
              name: "Space station",
              itemStyle: {
                color: "#884d00",
              },
            },
            {
              value: microverse,
              name: "Microverse",
              itemStyle: {
                color: "#715653",
              },
            },
            {
              value: dimension,
              name: "Dimension",
              itemStyle: {
                color: "#f49832",
              },
            },
            {
              value: dream,
              name: 'Dream',
              itemStyle: {
                color: "#fbe37e",
              },
            },
            // {
            //   value: characters[4]?.episode?.length,
            //   name: characters[4]?.name,
            //   itemStyle: {
            //     color: "#715653",
            //   },
            // },
          ],
        },
      ],
    };

    option && myChart.setOption(option);
  }, [dimension, dream, microverse, planet, spaceStation]);

  return (
    <div>
      <div
        style={{ width: "100%", height: 500 }}
        id="LocationsTypeChart"
      ></div>
    </div>
  );
};
