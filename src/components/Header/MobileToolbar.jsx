import React from 'react';
import {
        Tooltip,
        IconButton,
        MenuRounded,
} from '../../Matlib';

// styles
import { Styles } from "../../styles/AppHeader";

export const Component = ({
        actions
}) => {
        const styl = Styles();

        return (
                <div className={styl.logoContainer}>
                        <Tooltip title={`open filter section`} >
                                <IconButton
                                        component="span"
                                        className={styl.hamburger}
                                        onClick={actions.ON_APP_DRAWER_MENU_OPEN}
                                >
                                        <MenuRounded />
                                </IconButton>
                        </Tooltip>
                </div>
        )
}