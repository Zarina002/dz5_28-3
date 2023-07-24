const numbers = [3, 4, 5, 44, 55, 23, 34, 12, 26, 67, 77, 75, 98, 67];

const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(oddNumbers);






function customFilterBooks() {
  const booksWithU = [];
  const booksWithoutU = [];


  for (const book of arguments) {

    const lowercaseBook = book.toLowerCase();


    if (lowercaseBook.includes('у')) {
      booksWithU.push(book);
    } else {
      booksWithoutU.push(book);
    }
  }

  return {
    booksWithU,
    booksWithoutU,
  };
}


const result = customFilterBooks('Звук и ярость', 'Мастер и Маргарита', 'Гордость и предубеждение', 'Убить пересмешника', 'Война и мир', 'Палата №6', 'Маленький принц', 'Унесенные ветром', 'Властелин колец', 'Гарри Поттер', 'Цвет пурпурный');

console.log('Книги с буквой "у":', result.booksWithU);
console.log('Остальные книги:', result.booksWithoutU);

