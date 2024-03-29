import View from "./View";

class AddRecipeView extends View{
  _parentElement = document.querySelector('.upload');
  _windowElement = document.querySelector('.add-recipe-window');
  _overlayElement = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _message = 'Recipe was successfully uploaded';

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }

  toggleWindow(){
    this._overlayElement.classList.toggle('hidden');
    this._windowElement.classList.toggle('hidden');
  }

  // Event listening to open model and closing model
  _addHandlerShowWindow(){
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    this._parentElement.querySelectorAll('.upload__column')
  }

  _addHandlerCloseWindow(){
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    // Allow user to click outside of model to close
    this._overlayElement.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler){
    this._parentElement.addEventListener('submit', function (e){
      e.preventDefault();
      // Need to pass in a form which is the "this" keyword
      const dataArray = [...new FormData(this)]; // Spreading into an array
      // converting array into object
      const data = Object.fromEntries(dataArray);
      handler(data);
    });
  }

  _generateMarkup(){

  }
}

export default new AddRecipeView();