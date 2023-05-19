import { useContext, useEffect, useState } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";
import { LocationsTypeChart } from "../../components/Charts/LocationsTypeChart";
import { CharactersEpisodesChart } from "../../components/Charts/CharactersEpisodesChart";
import RickMortyApi from "../../utils/api/rickMortyApi";
import { CharactersStatusChart } from "../../components/Charts/CharactersStatusChart";
import { BackButton } from "../../components/BackButton/BackButton";

export const StatisticsPage = () => {
  // const { characters, infoCharacters, infoLocations, infoEpisodes } =
  //   useContext(GalleryContext);

  // useEffect(() => {
  //   let chartDom = document.getElementById("main");
  //   let myChart = echarts.init(chartDom);
  //   let option;

  //   option = {
  //     tooltip: {
  //       trigger: "item",
  //     },
  //     legend: {
  //       // top: '5%',
  //       // left: 'center'
  //       orient: "vertical",
  //       left: "left",
  //     },
  //     series: [
  //       {
  //         name: "Access From",
  //         type: "pie",
  //         radius: ["40%", "70%"],
  //         avoidLabelOverlap: false,
  //         itemStyle: {
  //           borderRadius: 10,
  //           borderColor: "#fff",
  //           borderWidth: 2,
           
  //           // color: {
  //           //   image: "https://echarts.apache.org/en/images/logo.png", // supported as HTMLImageElement, HTMLCanvasElement, but not path string of SVG
  //           //   repeat: "repeat", // whether to tile, can be 'repeat-x', 'repeat-y', 'no-repeat'
  //           // },
  //           colorBy: "data",
  //         },
  //         label: {
  //           show: true,
  //           position: "outside",
  //           textBorderWidth: 0,
  //           // textBorderColor: 'pink'
  //         },
  //         emphasis: {
  //           label: {
  //             show: true,
  //             fontSize: 40,
  //             fontWeight: "bold",
  //           },
  //         },
  //         labelLine: {
  //           show: true,
  //           length: 28,
  //         },

  //         data: [
  //           {
  //             value: characters[0]?.episode?.length,
  //             name: characters[0]?.name,
  //             itemStyle: {
  //               // color: '#FF0000' // задаем красный цвет для первого элемента
  //               color: {

  //                 image: "https://echarts.apache.org/en/images/logo.png", // supported as HTMLImageElement, HTMLCanvasElement, but not path string of SVG
  //                 repeat: "repeat", // whether to tile, can be 'repeat-x', 'repeat-y', 'no-repeat'
  //               }
  //             }
  //           },
  //           {
  //             value: characters[1]?.episode?.length,
  //             name: characters[1]?.name,
  //           },
  //           {
  //             value: characters[2]?.episode?.length,
  //             name: characters[2]?.name,
  //           },
  //           {
  //             value: characters[3]?.episode?.length,
  //             name: characters[3]?.name,
  //           },
  //           {
  //             value: characters[4]?.episode?.length,
  //             name: characters[4]?.name,
  //           },
  //           // { value: infoLocations?.count, name: 'Количество локаций' },
  //           // { value: infoEpisodes?.count, name: 'Количество эпизодов' },
  //           // { value: 484, name: 'Union Ads' },
  //           // { value: 300, name: 'Video Ads' },
  //           // { value: 300, name: 'Video Ads' }
  //         ],
  //       },
  //     ],
  //   };

    // option = {
    //   title: {
    //     text: 'Referer of a Website',
    //     subtext: 'Fake Data',
    //     left: 'center'
    //   },
    //   tooltip: {
    //     trigger: 'item'
    //   },
    //   legend: {
    //     orient: 'vertical',
    //     left: 'left'
    //   },
    //   series: [
    //     {
    //       name: 'Access From',
    //       type: 'pie',
    //       radius: '50%',
    //       data: [
    //         { value: characters[0]?.episode?.length, name: characters[0]?.name },
    //         { value: characters[1]?.episode?.length, name: characters[1]?.name },
    //         { value: characters[2]?.episode?.length, name: characters[2]?.name },
    //         { value: characters[3]?.episode?.length, name: characters[3]?.name },
    //         { value: characters[4]?.episode?.length, name: characters[4]?.name },
    //       ],
    //       emphasis: {
    //         itemStyle: {
    //           shadowBlur: 10,
    //           shadowOffsetX: 0,
    //           shadowColor: 'rgba(0, 0, 0, 0.5)'
    //         }
    //       }
    //     }
    //   ]
    // };

  //   option && myChart.setOption(option);
  // }, []);

  const {
    characters,
    locationTypePlanet,
    locationTypeSpaceStation,
    infoCharacters,
    infoLocations,
    infoEpisodes,
    updateType,
    type,
    locations, theme, t
  } = useContext(GalleryContext);

  const [planet, setPlanet] = useState(0);
  const [spaceStation, setSpaceStation] = useState(0);
  const [microverse, setMicroverse] = useState(0);
  const [dimension, setDimension] = useState(0);
  const [dream, setDream] = useState(0);

  useEffect(() => {
  Promise.all([
    RickMortyApi.getLocations(1, '', 'Planet', '').then((locations) => {
      setPlanet(locations?.info?.count);
    }),
    RickMortyApi.getLocations(1, '', 'Space station', '').then((locations) => {
      setSpaceStation(locations?.info?.count);
    }),
    RickMortyApi.getLocations(1, '', 'Microverse', '').then((locations) => {
      setMicroverse(locations?.info?.count);
    }),
    RickMortyApi.getLocations(1, '', 'Dimension', '').then((locations) => {
      setDimension(locations?.info?.count);
    }),
    RickMortyApi.getLocations(1, '', 'Dream', '').then((locations) => {
      setDream(locations?.info?.count);
    }),
  ]).then(() => {
    // Действия после выполнения всех промисов
  });
}, [infoLocations.count, type, updateType]);

const [alive, setAlive] = useState(0);
  const [dead, setDead] = useState(0);
  const [unknown, setUnknown] = useState(0);

  useEffect(() => {
    Promise.all([
      RickMortyApi.getCharacters(1, '', 'Alive', '', '').then((characters) => {
        setAlive(characters?.info?.count);
      }),
      RickMortyApi.getCharacters(1, '', 'Dead', '', '').then((characters) => {
        setDead(characters?.info?.count);
      }),
      RickMortyApi.getCharacters(1,  '', 'unknown', '', '').then((characters) => {
        setUnknown(characters?.info?.count);
      })
    ]).then(() => {
      // Действия после выполнения всех промисов
    });
  }, [infoCharacters.count, type, updateType]);


  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { label: t('episodesWithCharacters'), content: <CharactersEpisodesChart /> },
    { label: t('locationsByType'), content: <LocationsTypeChart planet={planet} spaceStation={spaceStation} microverse={microverse} dimension={dimension} dream={dream} /> },
    { label: t('charactersStatus'), content: <CharactersStatusChart alive={alive} dead={dead} unknown={unknown} /> },
  ];

  return (
    <div>
    <div className="container">
<BackButton />
      <ul className="explore_page__navlink_container">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={activeTab === index ? `active explore_page__navlink ${theme}`: `explore_page__navlink ${theme}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </div>
    </div>
  );


  // return (
  //   <div>
  //   <div className="container">

  //     STATISTICS
  //     <CharactersEpisodesChart />
  //     <EpisodesCharactersChart />
  //   </div>
  //   </div>
  // );
};
