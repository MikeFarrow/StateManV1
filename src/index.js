import angular from "angular";
import pgContain from "/src/components/pgContain.js";
import createStore from "/src/components/createStore.js";
import projPlan from "/src/components/projPlan.js";

angular
  .module("hwApp", [])
  .component("pgContain", pgContain)
  .component("createStore", createStore)
  .component("projPlan", projPlan)
  .constant('DEBUG', false);
