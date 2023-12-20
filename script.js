// function performSearch() {
//     var searchTerm = document.getElementById('search-input').value;
  
//     var searchResults = document.getElementById('search-results');
//     searchResults.innerHTML = '<p>Результаты поиска для: ' + searchTerm + '</p>';
// }
  
document.getElementById('search-input').addEventListener('keydown', function(event) {
  // Проверяем, была ли нажата клавиша Enter (код клавиши 13)
  if (event.keyCode === 27) {
    // Выполняем поиск
    performSearch();
  }
});

function performSearch() {
  var searchTerm = document.getElementById('search-input').value;
  var searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '<p>Результаты поиска для: ' + searchTerm + '</p>';
}
