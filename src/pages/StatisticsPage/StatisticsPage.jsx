import { useContext, useEffect, useMemo, useState } from 'react';
import { GalleryContext } from '../../utils/context/GalleryContext';
import { LocationsTypeChart } from '../../components/Charts/LocationsTypeChart';
import { CharactersEpisodesChart } from '../../components/Charts/CharactersEpisodesChart';
import { CharactersStatusChart } from '../../components/Charts/CharactersStatusChart';
import RickMortyApi from '../../utils/api/rickMortyApi';
import { BackButton } from '../../components/BackButton/BackButton';

export const StatisticsPage = () => {
  const { theme, t } = useContext(GalleryContext);

  const [planet, setPlanet] = useState(0);
  const [spaceStation, setSpaceStation] = useState(0);
  const [microverse, setMicroverse] = useState(0);
  const [dimension, setDimension] = useState(0);
  const [dream, setDream] = useState(0);
  const [alive, setAlive] = useState(0);
  const [dead, setDead] = useState(0);
  const [unknown, setUnknown] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const locationsData = useMemo(
    () =>
      Promise.all([
        RickMortyApi.getLocations(1, '', 'Planet', '').then(
          (locations) => locations?.info?.count
        ),
        RickMortyApi.getLocations(1, '', 'Space station', '').then(
          (locations) => locations?.info?.count
        ),
        RickMortyApi.getLocations(1, '', 'Microverse', '').then(
          (locations) => locations?.info?.count
        ),
        RickMortyApi.getLocations(1, '', 'Dimension', '').then(
          (locations) => locations?.info?.count
        ),
        RickMortyApi.getLocations(1, '', 'Dream', '').then(
          (locations) => locations?.info?.count
        ),
      ]),
    []
  );

  const charactersData = useMemo(
    () =>
      Promise.all([
        RickMortyApi.getCharacters(1, '', 'Alive', '', '').then(
          (characters) => characters?.info?.count
        ),
        RickMortyApi.getCharacters(1, '', 'Dead', '', '').then(
          (characters) => characters?.info?.count
        ),
        RickMortyApi.getCharacters(1, '', 'unknown', '', '').then(
          (characters) => characters?.info?.count
        ),
      ]),
    []
  );

  useEffect(() => {
    locationsData.then((data) => {
      setPlanet(data[0]);
      setSpaceStation(data[1]);
      setMicroverse(data[2]);
      setDimension(data[3]);
      setDream(data[4]);
    });
    charactersData.then((data) => {
      setAlive(data[0]);
      setDead(data[1]);
      setUnknown(data[2]);
    });
  }, [locationsData, charactersData]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      label: t('episodesWithCharacters'),
      content: <CharactersEpisodesChart />,
    },
    {
      label: t('locationsByType'),
      content: (
        <LocationsTypeChart
          planet={planet}
          spaceStation={spaceStation}
          microverse={microverse}
          dimension={dimension}
          dream={dream}
        />
      ),
    },
    {
      label: t('charactersStatus'),
      content: (
        <CharactersStatusChart alive={alive} dead={dead} unknown={unknown} />
      ),
    },
  ];

  return (
    <div>
      <div className="container">
        <BackButton />
        <ul className="explore_page__navlink_container">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={
                activeTab === index
                  ? `active explore_page__navlink ${theme}`
                  : `explore_page__navlink ${theme}`
              }
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
};

// useEffect(() => {
//   Promise.all([
//     RickMortyApi.getLocations(1, '', 'Planet', '').then((locations) => {
//       setPlanet(locations?.info?.count);
//     }),
//     RickMortyApi.getLocations(1, '', 'Space station', '').then(
//       (locations) => {
//         setSpaceStation(locations?.info?.count);
//       }
//     ),
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

// useEffect(() => {
//   Promise.all([
//     RickMortyApi.getCharacters(1, '', 'Alive', '', '').then((characters) => {
//       setAlive(characters?.info?.count);
//     }),
//     RickMortyApi.getCharacters(1, '', 'Dead', '', '').then((characters) => {
//       setDead(characters?.info?.count);
//     }),
//     RickMortyApi.getCharacters(1, '', 'unknown', '', '').then(
//       (characters) => {
//         setUnknown(characters?.info?.count);
//       }
//     ),
//   ]).then(() => {
//     // Действия после выполнения всех промисов
//   });
// }, [infoCharacters.count, type, updateType]);
