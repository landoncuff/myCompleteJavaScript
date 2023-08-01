import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
  _data;
  // Methods

  /**
   * Render the received object to the DOOM
   * @param {Object | Object[]} data the data to be rendered
   * @param {boolean} [rener=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} a markup string is returned if render=false
   * @this {Object} View instance
   * @author Landon Cuff
   * @todo Finish implementation
   */
  render(data, render = true) {
    if(!data || (Array.isArray(data) && data.length === 0)){
      return this.renderError();
    }

    this._data = data;
    const markup = this._generateMarkup();

    // returning markup if we don't want to display new results
    if(!render) return markup;

    // Removing markup html that already exists on the webpage
    this._clear();

    // Inserting string into the HTML (Parent element)
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data){
    this._data = data;
    const newMarkup = this._generateMarkup();

    // convert string to DOM object that lives in memory
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // Getting all the elements in the newDOM and creating it as an array
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // Will only update elements that contain text
      if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== ''){
        curEl.textContent = newEl.textContent;
      }

      // Updating data Attributes
      if(!newEl.isEqualNode(curEl)){
        // Looping through new attributes and setting the current
        Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
      }
    });
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