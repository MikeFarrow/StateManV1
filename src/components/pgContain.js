class pgContainController {
  constructor(DEBUG) {
    'ngInject';
    this.DEBUG = DEBUG;
    if (this.DEBUG) console.log("constructor pgContainController: ");
  }

  $onInit() {
    if (this.DEBUG) console.log("$onInit pgContainController: ");
  }
  //
}

const pgContain = {
  controller: pgContainController,
  template: `
        <h2>Create a new information store</h2>
        <hr>
        <create-store></create-store>
        <proj-plan></proj-plan>
    `
};

export default pgContain;
