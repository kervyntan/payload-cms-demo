import React from 'react';

export default function Hero (props) {
    const heading = props.heading;
    const text = props.text;
    const backgroundImage = props.backgroundImage;
    return (
        <div>
            <h2> {heading} </h2>
            <p> {text} </p>
        </div>
    );
};