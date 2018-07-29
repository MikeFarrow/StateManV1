class createStoreController {
  constructor() {
    console.log("constructor createStoreController: ");
  }

  $onInit() {
    console.log("$onInit createStoreController: ");
  }
  //
}

const createStore = {
  controller: createStoreController,
  template: `
        <h2>Create a new information store</h2>
        <hr>
        <p>Form goes here. But before that:
        </p>
          <ul>
            <li>Add an input box to createStore</li>
            <li>Pass it to parent</li>
            <li>Write it to local storage</li>
            <li>Recover from local storage</li>
            <li>Default panel to local store value</p>
          </ul>
          <p>Done</p>
          <ul>
            <li>Save structure as template</li>
            <li>Make child presentation component</li>
            <li>Make this component a container</li>
          </ul>
    `
};

export default createStore;
