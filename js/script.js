import Slide from "./slide.js";

const slide = new Slide(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControl(".custom-controls");
