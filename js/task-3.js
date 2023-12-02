
const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },
  
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"



/* ================================================================ */

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage("Royal Grand", makePizza)); // повертає "Pizza Royal Grand is being prepared, please wait..."
console.log(makeMessage("Ultracheese", deliverPizza)); // повертає "Delivering Ultracheese pizza."


/* ================================================================ */


function calculateTotalPrice(orderedItems) {
  
  let totalPrice = 0;

  orderedItems.forEach(function callback(element) {
    totalPrice += element
  });

  return totalPrice;
};

console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає `138`
console.log(calculateTotalPrice([164, 48, 291])); // повертає `503`
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));  // повертає `1116`


/* ================================================================ */

function filterArray(numbers, value) {

  let array = [];

  numbers.forEach(function callback(numbers) {
    numbers > value ? array.push(numbers) : 0;
  });

  return array;
};

console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає `[5]`
console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає `[4, 5]`
console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає `[]`
console.log(filterArray([12, 24, 8, 41, 76], 20));  // повертає `[24, 41, 76]`
console.log(filterArray([12, 24, 8, 41, 76], 38));  // повертає `[41, 76]`


/* ============= стрелочная функция, синтаксис ======================== */

const calculateTotalPri = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
}

console.log(calculateTotalPri(5, 100)); // повертає 500
console.log(calculateTotalPri(8, 60)); // повертає 480
console.log(calculateTotalPri(3, 400)); // повертає 1200

/* ======= то же, только неявне повернення ========================= */

const calculateTotalPric = (quantity, pricePerItem) => quantity * pricePerItem;

console.log(calculateTotalPric(5, 100)); // повертає 500
console.log(calculateTotalPric(8, 60)); // повертає 480
console.log(calculateTotalPric(3, 400)); // повертає 1200


/* ======= две стрелочных: главная и перебор массива ========================= */

const calculateTotalPrice3 = (orderedItems) => {
  
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};

console.log(calculateTotalPrice3([12, 85, 37, 4])); // повертає 138
console.log(calculateTotalPrice3([164, 48, 291])); // повертає 503
console.log(calculateTotalPrice3([412, 371, 94, 63, 176])); // повертає 1116


/* ======= две стрелочных: главная и перебор массива c пушем ========================= */

const filterArray1 = (numbers, value) => {
  
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
    });
return filteredNumbers; 
}

console.log(filterArray1([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
console.log(filterArray1([1, 2, 3, 4, 5], 4)); // повертає [5]
console.log(filterArray1([1, 2, 3, 4, 5], 5)); // повертає []
console.log(filterArray1([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
console.log(filterArray1([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]


/* ===== перебор массива c пушем (парные + валюе) чистая функция возвращает новый массив ============ */

function changeEven1(numbers, value) {

const newArray = [];
  
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i] + value);
    }
    else {
     newArray.push(numbers[i]); 
    }
  }
  return newArray;
}

console.log(changeEven1([2, 8, 3, 7, 4, 6], 10)); // повертає новий масив `[12, 18, 3, 7, 14, 16]`
console.log(changeEven1([17, 24, 68, 31, 42], 100)); // повертає новий масив `[17, 124, 168, 31, 142]`
console.log(changeEven1([44, 13, 81, 92, 36, 54], 100)); // повертає новий масив `[144, 13, 81, 192, 136, 154]`
console.log(changeEven1([1, 2, 3, 4, 5], 10)); // повертає новий масив `[1, 12, 3, 14, 5]`



/* === перебор массива планет - використаний метод `map() возвращает новый массив, прежний без изменений == */

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);

console.log(planets);
console.log(planetsLengths);

//Для перебирання масиву планет використаний метод `map()`
//Значення змінної `planets` - це масив `["Earth", "Mars", "Venus", "Jupiter"]`
// Значення змінної `planetsLengths` - це масив `[5, 4, 5, 7]`



/* === Для перебирання масиву `books` використовується метод `map()` як чиста функція == */

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books.map(book => book.title);
 
console.log(titles);


/* Значення змінної `titles` - 
це масив `["The Last Kingdom", "Beside Still Waters", 
"The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]`
Значення змінної `books` - це масив
Оголошена змінна `titles` */



/* === Для перебирання масиву `books` використовується метод `flatMap()` == */

const bookss = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = bookss.flatMap(book => book.genres);

console.log(genres);


//Значення змінної `genres` - це масив `["adventure", "history", "fiction", "horror", "mysticism"]`




/* ======== Для перебирання параметра `users` використовується метод `map()` ====== */

const getUserEmails = (users) => {

  return users.map(user => user.email)
  
};


/* Виклик функції із зазначеним масивом користувачів повертає масив
 `["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", 
 "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", 
 "shereeanthony@kog.com"]`

  Змінній `getUserEmails` присвоєна стрілочна функція з параметром `(users) */

/* ==================================================================================== */



/* ======== Для перебору масиву `numbers` використано метод `filter()` ====== */

  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(value => value % 2 === 0);     // парные
const oddNumbers = numbers.filter(value => (value + 1) % 2 === 0); // не парные

console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);

//Значення змінної `evenNumbers` - це масив `[24, 82, 36, 18, 52]`
//Значення змінної `oddNumbers` - це масив `[17, 61, 47, 73]`
//Значення змінної `numbers` - це масив `[17, 24, 82, 61, 36, 18, 47, 52, 73]`
/* ==================================================================================== */



/* ======== Для перебирання масиву `books` використаний метод `filter()` ====== */

const books1 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67
  },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books1.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books1.filter(book => book.author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor);


// Значення змінної `booksByAuthor` - це масив книг, автор яких `"Bernard Cornwell"`
// Значення змінної `topRatedBooks` - це масив книг з рейтингом, вищим за `8`
/* ==================================================================================== */



/* ====== Для перебирання параметра `users` використовується метод `filter()`======*/

const getUsersWithEyeColor = (users, color) => {

  return users.filter(user => user.eyeColor === color);
};

// выбирает из массива по цвету глаз, и возвращает массив об'єктів користувачів з іменами
/* ==================================================================================== */



/* ====== Для перебирання параметра `users` використовується метод `filter()`======*/

const getUsersWithAge = (users, minAge, maxAge) => {

return users.filter(user => user.age >= minAge && user.age <= maxAge);
  
};



// выбирает из массива по возврасту в диапазоне, и возвращает массив об'єктів користувачів з іменами
/* ==================================================================================== */



/* ====== Для перебирання масиву `books2` використаний метод `find()`======*/

const books2 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR1 = "Robert Sheckley";

const bookWithTitle = books2.find((option) => option.title === BOOK_TITLE);
const bookByAuthor1 = books2.find((option) => option.author === AUTHOR1);

console.log(bookWithTitle);
console.log(bookByAuthor1);

// Значення змінної `books2` - це масив
// Значення змінної `bookByAuthor` - це об'єкт книги автора `"Robert Sheckley"`
// Значення змінної `bookWithTitle` - це об'єкт книги з назвою `"The Dream of a Ridiculous Man"`
/* ==================================================================================== */


/* ====== Для перебирання параметра `users` використовується метод find() ======*/

const getUserWithEmail = (users, email) => {

  return users.find((option) => option.email === email);
  
};

// функція повертає об'єкт користувача з ім'ям (ищет его по эл.почте)
/* ==================================================================================== */



/* ====== Для перебирання параметра `users`(массива користувачів) 
           використовується метод `every()` - КАЖДЫЙ ДОЛЖЕН СООТВЕТСТВОВАТЬ  ======*/

// проверяет, ВСЕ (!) ли в сети, возвращает `false` - не все

const isEveryUserActive = (users) => {

return users.every(user => user.isActive === true);
  
};

// Виклик функції із зазначеним масивом користувачів повертає `false`
/* ==================================================================================== */


/* ====== Для перебирання параметра `users`(массива користувачів) 
           використовується метод `some()`- НЕКОТОРЫЙ ======*/

// то же, только ищет хотя бы одного соответствующего


const isAnyUserActive = (users) => {
  
  return users.some(user => user.isActive === true);
};

// Виклик функції із зазначеним масивом користувачів повертає `true`
/* ==================================================================================== */



/* ====== Для перебирання масиву `playtimes` використовується метод `reduce()`- "уменьшать" ======*/

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime); // 2692 - общий игровой час всех
console.log(averagePlayTime); // 673 - средний игровой час
/* ==================================================================================== */


/* ====== Для перебирання масиву `playtimes` використовується метод `reduce()`- "уменьшать" ======*/

const players1 = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players1.reduce((acc, player) => {
  return acc + player.playtime / player.gamesPlayed;
}, 0);

console.log(totalAveragePlaytimePerGame); // 1023 - сумма всех средних значений каждого игрока
                                            // среднего значения времени, проведенного в игре
/* ==================================================================++++++++================== */



/* ====== Для перебирання параметра `users` використовується метод `reduce()`- "уменьшать" ======*/

const calculateTotalBalance = (users) => {

  return users.reduce((tolal, user) => tolal + user.balance, 0)
};
  
// Виклик функції із зазначеним масивом користувачів повертає число `20916`
//- общее число денег на балансе у всех пользователей массива.
/* ==================================================================++++++++================== */



/* ====== Для сортування масивов (год вып, алфавит) використаний метод `toSorted() ======*/

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = releaseDates.toSorted();

const alphabeticalAuthors = authors.toSorted();

console.log(ascendingReleaseDates); // це масив `[1967, 1973, 1984, 1997, 2008, 2012, 2016]`
console.log(alphabeticalAuthors); // це масив `["Bernard Cornwell", "Fyodor Dostoevsky",
                                  // "Robert Sheckley", "Tanith Lee"]`
/* ==================================================================++++++++================== */





/* ====== сортування масивов ЧИСЕЛ(год вып) по возрастанию и убыванию - метод `toSorted(а,в) ======*/

const releaseDates1 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates1 = releaseDates.toSorted((a, b) => a - b);

const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);


console.log(ascendingReleaseDates1); // це масив `[1967, 1973, 1984, 1997, 2008, 2012, 2016]`
console.log(descendingReleaseDates); // це масив `[2016, 2012, 2008, 1997, 1984, 1973, 1967]`
/* ==================================================================++++++++================== */



/* ====== сортування масивов РЯДКІВ (алфавит) по возрастанию и убыванию - метод `toSorted(а,в) 
                                                                   и       a.localeCompare(b)======*/

const authors1 = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = authors1.toSorted((a, b) => a.localeCompare(b));

const authorsInReversedOrder = authors1.toSorted((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder); // це масив `["Bernard Cornwell", "Fyodor Dostoevsky", 
//"Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]`
console.log(authorsInReversedOrder);// це масив `["Tanith Lee", "Robert Sheckley", "Howard Lovecraft",
//"Fyodor Dostoevsky", "Bernard Cornwell"]`
/* ==================================================================++++++++================== */



/* === сортування масивов объектов по алфавиту и рейтингу по возрастанию и убыванию - метод `toSorted(а,в) 
                                                                   и   a.localeCompare(b)======*/

const books3 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

const sortedByAuthorName = books3.toSorted((a, b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = books3.toSorted((a, b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = books3.toSorted(
  (a, b) => a.rating - b.rating);

const sortedByDescentingRating = books3.toSorted(
  (a, b) => b.rating - a.rating);

console.log(sortedByAuthorName); // массив объектов, отсортирован по алф авторов
console.log(sortedByReversedAuthorName);// массив объектов, отсортирован по алф авторов наоборот
console.log(sortedByAscendingRating); // массив объектов, отсортирован по рейтингу книг по возрастанию
console.log(sortedByDescentingRating); // массив объектов, отсортирован по рейтингу книг по убыванию;
/* ======================================================+++++++============++++++++================== */



/* === вытащили из массива книги с рейтингом больше 8 (filter), 
      получили имена их авторов (map), 
      и построили их в алфавитном порядке (toSorted - для рядків) ==================*/

const books5 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books5
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .toSorted((a, b) => a.localeCompare(b));

console.log(names); // це масив `["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]`
/* ======================================================+++++++============++++++++================== */




/* =====Задача 1 (ДЗ 5)================= */

const getUserNames = (users) => {

  return users.map(user => user.name)
  
};

console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
    },
 ])
);


// ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head",
// "Carey Barr", "Blackburn Dotson", "Sheree Anthony"];





/* =====Задача 2 (ДЗ 5)================= */

const getUsersWithFriend = (users, friendName) => {

  return users.filter(user => user.friends.includes(friendName));
};


const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []



/* =====Задача 3 (ДЗ 5)================= */

const sortByDescendingFriendCount = (users) => {

  return users.toSorted((a, b) => b.friends.length - a.friends.length);
   
}


console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    },
    
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ];



/* =====Задача 4 (ДЗ 5)================= */

const getTotalBalanceByGender = (users, gender) =>  
  
  users
    .filter(user => user.gender === gender)
    .reduce((tolal, user) => tolal + user.balance, 0);
   


const allUsers4 = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  },

];

console.log(getTotalBalanceByGender(allUsers4, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers4, "female")); // 8863