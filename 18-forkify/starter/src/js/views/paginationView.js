import View from "./View";
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler){
    // Event delcation
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if(!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup(){
    const currentPage = this._data.page;

    // taking number of items in array / by num of items per page
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

    // Page 1, and are other pages
    if(currentPage === 1 && numPages > 1){
      return this._generateNextPrevButton(currentPage, 'next', `${icons}#icon-arrow-right`);
    }

    // Last Page
    if(currentPage === numPages && numPages > 1){
      return this._generateNextPrevButton(currentPage, 'prev', `${icons}#icon-arrow-left`);
    }

    // Other page
    if(currentPage < numPages){
      let result = this._generateNextPrevButton(currentPage, 'prev', `${icons}#icon-arrow-left`);
      result += this._generateNextPrevButton(currentPage, 'next', `${icons}#icon-arrow-right`);
      return result;
    }

    // Page 1, and no other pages
    return '';
  }

  _generateNextPrevButton(currentPage, behavior, icon){
    if(behavior === 'prev'){
      currentPage = currentPage - 1;
    }else{
      currentPage = currentPage + 1;
    }

    return `
      <button data-goto="${currentPage}" class="btn--inline pagination__btn--${behavior}">
        <span>Page ${currentPage}</span>
        <svg class="search__icon">
          <use href="${icon}"></use>
        </svg>
      </button>
    `;
  }
}

export default new PaginationView();