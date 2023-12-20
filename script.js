document.getElementById('search-input').addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    performSearch();
  }
});

function performSearch() {
  var searchTerm = document.getElementById('search-input').value;
  var searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '<p>Результаты поиска для: ' + searchTerm + '</p>';
}
