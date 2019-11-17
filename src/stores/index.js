import {observable} from 'mobx';

export const cards = observable([]);

export const addCard = (card) => {
    cards = [card, ...cards];
};
