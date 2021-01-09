import React from 'react';
import { Styles } from '../styles/Markdown';

function Iframe(props) {
    const styl = Styles();
    return (
        <div
            className={styl.embedCode}
            dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
        />
    );
}

// set iFrame from codesandbox
export const EmbedSandbox = ({ iFrame }) => {
    return <Iframe iframe={iFrame} allow="autoplay" />
}