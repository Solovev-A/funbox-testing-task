import React from 'react';

import './app.scss';
import Card from './components/Card';


export const App = () => {
    return (
        <>
            <Card
                description='Филе из цыплят с трюфелями в бульоне.'
                features={[
                    '100 порций',
                    '5 мышей в подарок',
                    'заказчик доволен'
                ]}
                taste='с курой'
                weightKilograms={5}
                disabled
            />
        </>
    )
}