<h1>Важные уточнения</h1>
Важно! Чем map отличается от forEach
1) map() выделяет память и сохраняет значение return. 
forEach() выбрасывает значение return и всегда возвращает undefined.
2) К map() можно привязывать другие методы, .map().reduce() и т.д.
forEach() не позволяет этого
<h4>Вывод</h4>
Выбор между map() и forEach() будет зависеть от варианта использования. 
Если вы планируете изменять, чередовать или использовать данные, лучше выбирать map(), 
поскольку он возвращает новый массив с преобразованными данными. 
Но, если вам не понадобится возвращаемый массив, не используйте map(), 
вместо этого используйте forEach() или даже цикл for.