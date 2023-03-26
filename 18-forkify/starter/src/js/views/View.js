import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
  _data;
  // Methods
  render(data) {
    if(!data || (Array.isArray(data) && data.length === 0)){
      return this.renderError();
    }

    this._data = data;
    const markup = this._generateMarkup();
    // Removing markup html that already exists on the webpage
    this._clear();

    // Inserting string into the HTML (Parent element)
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner(){
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    //clearing parent html element
    // this.#parentElement.innerHTML = '';
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message= this._errorMessage){
    // Set default message to be message variable in Class
    const markup = `
       <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
       </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message= this._message){
    // Set default message to be message variable in Class
    const markup = `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // Private Methods
  _clear(){
    this._parentElement.innerHTML = '';
  }
}