class projPlanController {
  constructor(DEBUG) {
    'ngInject';
    this.DEBUG = DEBUG;
    if (this.DEBUG) console.log("constructor projPlanController: ");
  }

  $onInit() {
    if (this.DEBUG) console.log("$onInit projPlanController: ");
  }
  //
}

const projPlan = {
  controller: projPlanController,
  template: `
        <p>To be done soon:
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

export default projPlan;
