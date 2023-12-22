import { newControllerCar } from "./constructor.js";
import { newDates } from "./date.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("loadContent");
    const print_out = newControllerCar.loadContent();
    newDates.time();
});