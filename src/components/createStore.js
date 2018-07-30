class createStoreController {
  constructor(DEBUG) {
    'ngInject';
    this.DEBUG = DEBUG;
    if (this.DEBUG) console.log("constructor createStoreController: ");
  }

  $onInit() {
    if (this.DEBUG) console.log("$onInit createStoreController: ");
  }

  onBlur(fld){
    console.log('Blurred: ' + fld);
  }
  //
}

const createStore = {
  controller: createStoreController,
  template: `
        <p>Form goes here.</p>
        <label for="store">Store name</label>
        <input  ng-model="store.name" ng-blur="$ctrl.onBlur('Fld1')" type="text" id="store" placeholder="Name of store">
        <p>Store name: {{store.name}}</p>  
      `
};

export default createStore;
