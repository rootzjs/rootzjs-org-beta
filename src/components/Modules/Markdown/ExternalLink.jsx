import React from 'react';
import { Styles } from '../styles/Markdown';

// Link Tag
export const Link = ({ name, url }) => {
        const styl = Styles();
        return <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={styl.link}
        >
                {name}
        </a>
}