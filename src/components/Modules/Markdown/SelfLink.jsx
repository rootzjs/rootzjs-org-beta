import React from 'react';
import { Styles } from '../styles/Markdown';
import { HashLink } from 'react-router-hash-link';

export const Component = ({
        props,
        actions
}) => {
        const styl = Styles();
        return <HashLink
                className={styl.link}
                style={{ cursor: "pointer" }}
                to={props.route + "#" + props.id}
                onClick={() => actions.NAVIGATE_TO(props)}
        >
                {props.name}
        </HashLink>
}