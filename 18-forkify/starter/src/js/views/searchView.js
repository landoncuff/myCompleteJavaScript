class SearchView {
  #parentEl = document.querySelector('.search');

  // Method to get users query
  getQuery(){
    // getting the value of the query string (child of the parent element)
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  addHandlerSearch(handlerFunction){
    // Using submit so it doesnt matter if user clicks or hits enter
    // Add event to parent element
    this.#parentEl.addEventListener("submit", function (e){
      e.preventDefault();
      handlerFunction();
    });
  }

  #clearInput(){
    this.#parentEl.querySelector('.search__field').value = '';
  }

}

// Exporting an instance of the class
export default new SearchView();