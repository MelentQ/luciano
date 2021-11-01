import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import masks from './masks';
import fileUpload from './fileUpload';
import anchorLinks from './anchorLinks';
import mediaPlayer from './mediaPlayer';
import datepicker from './datepicker';
import accordions from './accordions';
import modals from './modals';
import homeAnimation from './homeAnimation';
import menu from './menu';
import eventsSlider from './eventsSlider';
import bottomPanel from './bottomPanel';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    masks();
    fileUpload();
    anchorLinks();
    accordions();
    mediaPlayer();
    modals();
    datepicker();
    homeAnimation();
    menu();
    eventsSlider();
    bottomPanel();
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    homeAnimation();
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
