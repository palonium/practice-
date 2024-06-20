// Напишите функцию для применения
// алгоритма сортировки пузырьком

function bubbleSort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }

    return arr
}

let arr = [2, 4, 6, 3, 12, 56, 28, 1, 15]
console.log(bubbleSort(arr))