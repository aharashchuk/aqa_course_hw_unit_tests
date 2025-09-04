/*
На сайте git   с помощью функции fetch получить список пользователей. 
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
      Пример: 
      1.  name: Leanne Graham
          email: Sincere@april.biz
          phone: 1-770-736-8031 x56442
          company: Romaguera-Crona    
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
      __________________________________

      2.  name: Ervin Howell   
          email: Shanna@melissa.tv 
          phone: 010-692-6593 x09125
          company: Deckow-Crist
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
*/

const baseUrl = "https://jsonplaceholder.typicode.com";

async function fetchUserData(url) {
  try {
    const [usersList, albumsList, photosList] = await Promise.all([
      fetch(`${url}/users`).then(res => res.json()),
      fetch(`${url}/albums`).then(res => res.json()),
      fetch(`${url}/photos`).then(res => res.json())
    ]);
    
    return usersList.reduce((enrichedUsers, user) => {
      const userAlbums = albumsList.filter(album => album.userId === user.id);
      const userPhotos = photosList.filter(photo => userAlbums.some(album => album.id === photo.albumId));

      enrichedUsers.push({
        name: user.name,
        email: user.email,
        phone: user.phone,
        company: user.company.name,
        albums: userAlbums.map(album => (
          `${album.title} (${userPhotos.filter(photo => photo.albumId === album.id).length} photos)`
        ))
      });
      
      return enrichedUsers;

    }, []);


  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("Data fetching completed");
  }
}

fetchUserData(baseUrl).then(data => {
  console.log(data);
});