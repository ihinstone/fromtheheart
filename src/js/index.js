import cart from './modules/cart';
import catalogFilters from './modules/catalogFilters';
import forms from './modules/forms';
import goldHover from './modules/goldHover';
import item from './modules/item';
import maps from './modules/maps';
import menu from './modules/menu';
import modal from './modules/modal';
import scrolling from './modules/scrolling';
import seoText from './modules/seoText';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', function () {
    sliders();
    modal();
    scrolling();
    menu();
    item();
    maps();
    forms();
    goldHover();
    seoText();
    cart();
    catalogFilters();

});