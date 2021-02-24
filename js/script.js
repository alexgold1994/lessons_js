import modal  from './modules/modal';
import timer  from './modules/timer';
import cards  from './modules/cards';
import forms  from './modules/forms';
import slider  from './modules/slider';
import calc  from './modules/calc';
import tabs from './modules/tabs';
import {openModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);


    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-06-11');
    cards();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow:  '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCouter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    calc();

          
});