import React from 'react';
import { Product } from '../../types';
import Card from '../Card';

import './catalog.scss';

const products: Product[] = [{
    id: 1,
    taste: 'с фуа-гра',
    features: ['10 порций', 'мышь в подарок'],
    weightKilograms: '0,5',
    description: 'Печень утки разварная с артишоками.'
}, {
    id: 2,
    taste: 'с рыбой',
    features: ['40 порций', '2 мыши в подарок'],
    weightKilograms: '2',
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
}, {
    id: 3,
    taste: 'с курой',
    features: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
    weightKilograms: '5',
    description: 'Филе из цыплят с трюфелями в бульоне.',
    disabled: true
},
];


export const Catalog = () => {
    return (
        <section className='catalog'>
            <header className='catalog__header'>
                Ты сегодня покормил кота?
            </header>
            <ul className='catalog__items'>
                {
                    products.map(product => (
                        <li key={product.id} className='catalog__item'>
                            <Card {...product} />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}