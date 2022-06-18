import React, { FC } from 'react';

export interface FeaturesListProps {
    features: string[];
}


export const CardFeaturesList: FC<FeaturesListProps> = (props) => {
    return (
        <ul className='card__features text-secondary'>
            {
                props.features.map((feature) => {
                    return <li key={feature}>{makeElementWithBoldNumbers(feature)}</li>
                })
            }
        </ul>
    )
}

function makeElementWithBoldNumbers(text: string) {
    const words = text.split(' ');

    return (
        <>
            {
                words.map((word, index) => {
                    // Использовать индекс массива в качестве ключа - очень плохо!
                    // Но в данной ситуации это не критично.

                    if (Number.isNaN(+word)) {
                        return (<React.Fragment key={index}>{word} </React.Fragment>)
                    }

                    return <span key={index} className='text-bold'>{word} </span>
                })
            }
        </>
    )
}