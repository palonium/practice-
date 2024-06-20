// Напишите функцию для поиска первого
// неповторяющегося символа.

function searchFirstUniqueElement(str) {
  if (str !== '' && str !== null) {
    const charCount = str.split('').reduce((count, char) => {
        count[char] = (count[char] || 0) + 1;
        return count;
    }, {});
    for (let char in charCount) {
        if (charCount[char] == 1) {
            return char;
        }
    }
  } else {
      return '';
  }
}

console.log(searchFirstUniqueElement('abbfgarrt'));
