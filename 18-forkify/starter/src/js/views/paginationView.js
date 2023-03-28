import View from "./View";
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup(){
    // taking number of items in array / by num of items per page
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    console.log(numPages);
    // Page 1, and are other pages
    if(this._data.page === 1 && numPages > 1){
      return 'page 1';
    }
    // Page 1, and no other pages
    // Last Page
    // Other page
  }
}

export default new PaginationView();