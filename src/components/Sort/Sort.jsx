import { useContext, useState } from "react";
import { GalleryContext } from "../../utils/context/GalleryContext";
import RickMortyApi from "../../utils/api/rickMortyApi";

export const Sort = () => {

  // тестировала сортировку по участию в сериях. получила общий массив всех персонажей, реализовала функцию сортировки, вывела по 20 карточек на странице, но столкнулась с проблемой
  // для того, чтобы работала пагинация и фильтрация, необходимо реализовывать их на стороне фронта, соответственно заменять ранее созданные компоненты
  // также решила отказаться от данного функционала из за увеличенной нагрузки на сервер

  const { setCharacters } = useContext(GalleryContext);

  let allCharacters = []; // массив для хранения всех персонажей

  // Функция для получения всех данных
  const getAllCharacters = (searchQuery, status, gender, species) => {
    // Рекурсивная функция для получения данных со всех страниц
    function getCharactersRecursively(pageNumber) {
      RickMortyApi.getCharacters(
        pageNumber,
        searchQuery,
        status,
        gender,
        species
      )
        .then((data) => {
          allCharacters = allCharacters.concat(data.results); // добавляем полученные данные в массив
          if (data.info.next) {
            // если есть следующая страница, вызываем эту же функцию со следующим номером страницы
            getCharactersRecursively(pageNumber + 1);
          } else {
            // если следующей страницы нет, значит мы получили все данные
            // allCharacters.sort((a, b) => a.name.localeCompare(b.name)); // сортируем данные по имени
            // console.log({allCharacters}); // выводим результат
          }
        })
        .catch((error) => console.error(error));
    }
    getCharactersRecursively(1); // начинаем с первой страницы
  };

  getAllCharacters("", "", "", "");

  const [isAscending, setIsAscending] = useState(true);

  const sortItems = () => {
    const sortedItems = allCharacters
      .sort((a, b) => {
        if (a.episode.length < b.episode.length) return isAscending ? -1 : 1;
        if (a.episode.length > b.episode.length) return isAscending ? 1 : -1;
        return 0;
      })
      .slice(0, 20);
    setCharacters(sortedItems);
    setIsAscending(!isAscending);
  };

  return (
    <div className="sort">
      <div className="sort">
        <div onClick={() => sortItems("date")}>
          Сортировать по количеству участия в сериях
        </div>
      </div>
    </div>
  );
};
