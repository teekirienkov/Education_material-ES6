// Бинарный поиск
// На входе получается отсортированный список элементов.
// Если элемент, который вы ищете, присутствует в списке, то бинарный поиск возвращает ту позицию, в которой он был найден.

// Бинарный поиск работает только в том случае, если список отсортирован.
// Например - телефонная книга отсортирована в алфавитном порядке

let low,   // low - начало массива
		mid, 	 // mid - центр массива
		high,  // high - конец массива
		guess;
		
function binarySearch(list, item) {
	low = 0,   
	high = list.length - 1; // конец массива

	while (low <= high) {                 // Пока эта часть не сократится до одного элемента...
		mid = Math.floor((low + high) / 2); // ...проверяем средний элемент
		guess = list[mid];
		
		if (guess == item) {							  // Значение найдено,
			return mid;												// останавливаем функцию и возвращаем mid
		}

		if (guess > item) {									// Много
			high = mid - 1;
		} else {														// Мало
			low = mid + 1;
		}
	}
	return null;													// Значение не существует
}

const array = [1, 3, 5, 7, 9];
		
console.log(binarySearch(array, 3)); // ищем 3 - получаем индекс массива 1
console.log(binarySearch(array, 9)); // ищем 9 - получаем индекс массива 4