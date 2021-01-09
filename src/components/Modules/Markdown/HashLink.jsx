import React from 'react';
import { LinkRounded } from '../../../Matlib';
import { HashLink } from 'react-router-hash-link';

import { Styles } from '../styles/Markdown';

export const Component = ({
    props
}) => {
    const styl = Styles();
    const { children, ...rest } = props;
    const path = window.location.pathname;

    return (
        <div className={styl.hasLinkContainer}>
            <LinkRounded className={styl.hashLinkIcon} />
            <HashLink smooth to={path + "#" + rest.id} {...rest}>
                {children}
            </HashLink>
        </div>
    )
}