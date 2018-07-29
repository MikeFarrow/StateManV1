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
        <create-store></create-store>
    `
};

export default pgContain;
