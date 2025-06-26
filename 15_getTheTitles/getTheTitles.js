const getTheTitles = function (titles) {
  const titleBooks = new Array();
  for (const title of titles) {
    titleBooks.push(title.title);
  }
  return titleBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
