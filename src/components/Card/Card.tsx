import React, { FC, useMemo, useState } from 'react';
import { CardFeaturesList } from './CardFeaturesList';
import { Product } from '../../types';

import './card.scss';
const defaultCardBackground = require('./assets/default-card-background.png');

export type CardProps = Omit<Product, 'id'>;


const DEFAULT_SLOGAN = 'Сказочное заморское яство';
const DEFAULT_ALTERNATIVE_SLOGAN = 'Котэ не одобряет?';
const DEFAULT_BRAND = 'Нямушка';

export const Card: FC<CardProps> = (props) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [isJustSelected, setIsJustSelected] = useState<boolean>(false);
    const [isMouseOverBody, setIsMouseOverBody] = useState<boolean>(false);

    const cardClassNames = 'card'
        + (isSelected ? ' selected' : '')
        + (props.disabled ? ' disabled' : '');

    const handleBodyClick = () => {
        if (props.disabled) return;

        const newState = !isSelected;
        setIsSelected(newState);
        if (newState) {
            setIsJustSelected(true);
        }
    }

    const handleMouseLeave = () => {
        setIsJustSelected(false);
        setIsMouseOverBody(false);
    }

    const slogan = useMemo(() => {
        if (isSelected && isMouseOverBody && !isJustSelected) {
            return DEFAULT_ALTERNATIVE_SLOGAN
        }

        return DEFAULT_SLOGAN;
    }, [isSelected, isMouseOverBody, isJustSelected, props.slogan])

    const description = useMemo(() => {
        if (props.disabled) {
            return `Печалька, ${props.taste} закончился.`
        }

        if (isSelected) return props.description;

        return (
            <>
                {'Чего сидишь? Порадуй котэ, '}
                <button
                    type='button'
                    onClick={() => setIsSelected(true)}
                >
                    купи
                </button>
                <span>.</span>
            </>
        )
    }, [isSelected, props])

    return (
        <div className={cardClassNames} data-just-selected={isJustSelected}>
            <div className='card__body'
                onClick={handleBodyClick}
                onMouseEnter={() => setIsMouseOverBody(true)}
                onMouseLeave={handleMouseLeave}
            >
                <div className='card__content'>
                    <p className='card__slogan text-secondary'>{slogan}</p>
                    <h2>{props.brand ?? DEFAULT_BRAND}</h2>
                    <span className='card__taste'>{props.taste}</span>
                    <CardFeaturesList features={props.features} />
                </div>
                <div className='card__weight'>
                    <span className='card__weight-value'>{props.weightKilograms}</span>
                    <span className='card__weight-measure'>кг</span>
                </div>
                <div
                    className='card__background'
                    style={{
                        backgroundImage: `url("${props.backgroundUrl ?? defaultCardBackground}")`
                    }}
                >
                </div>
            </div>
            <p className='card__description'>
                {description}
            </p>
        </div>
    )
}