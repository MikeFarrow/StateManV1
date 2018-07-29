class pgContainController {
  constructor() {
    console.log("constructor pgContainController: ");
  }

  $onInit() {
    console.log("$onInit pgContainController: ");
  }
  //
}

const pgContain = {
  controller: pgContainController,
  template: `
        <h2>Create a new information store</h2>
        <hr>
        <create-store></create-store>
    `
};

export default pgContain;
