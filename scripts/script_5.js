/// Script 5 ///

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

/// Question 1 ///
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
let once = books.map(({rented})=> rented - 1 > 0);
console.log(once);

/// Question 2 ///
console.log("Quel est livre le plus emprunté ?")
function mostRented(array){
  let rentedBooksArray = array.sort(function (a, b) {
    return a.rented - b.rented;
    });
    let textToReturn = rentedBooksArray[rentedBooksArray.length - 1].title;
    console.log(textToReturn);
    }
    mostRented(books)

/// Question 3 ///
console.log("Quel est le livre le moins emprunté ?")
function lessRented(array) {
  let rentedBooksArray = array.sort(function (a, b) {
    return a.rented - b.rented;
    });
    let textToReturn = rentedBooksArray[0].title; 
    console.log(textToReturn);
    }
    lessRented(books)

/// Question 4 ///
console.log("Trouve le livre avec l'ID: 873495")
let findBookId  = books.find(book => book.id === 873495);
console.log(findBookId.title);

/// Question 5 ///
console.log("Supprime le livre avec l'ID: 133712")
function deleteBookId(array, idBook) {
  let newArray = [];
  array.forEach(item =>{
    if (item.id !== idBook) {
      newArray.push(item);
      }
      });
      console.log(newArray);
      }
      deleteBookId(books, 133712);

/// Question 6 ///
console.log("Trie les livres par ordre alphabétique.")
let titlefind = books.map(({title}) => `\n${title}`).sort();
console.log(`${titlefind}`);