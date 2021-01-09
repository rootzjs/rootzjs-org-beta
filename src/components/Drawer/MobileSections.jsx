import React from 'react';
import {
        Divider,
        IconButton,
        CloseRounded,
} from '../../Matlib';
import DrawerSections from '../../nodes/Drawer/Sections';

// styles 
import { Styles } from "../../styles/AppDrawer";

// images
import logo from '../../assets/images/logo.svg';
import titleLogo from '../../assets/images/title.svg';
import logoDark from '../../assets/images/logoDark.svg';
import titleLogoDark from '../../assets/images/titleDark.svg';

export const Component = ({
        props,
        actions
}) => {
        const styl = Styles();
        const { isLight } = props;

        return (
                <div className={styl.drawerMobileContainer} role="presentation">
                        <div className={styl.logoSectionDrawer}>
                                <div className={styl.logoContainer}>
                                        <IconButton 
                                                className={styl.iconContainer} 
                                                onClick={() => props.history.push("/")}
                                        >
                                                <img
                                                        alt="logo"
                                                        className={styl.logo}
                                                        src={isLight ? logo : logoDark}
                                                />
                                                <img
                                                        alt="logo"
                                                        className={styl.logoTitle}
                                                        src={isLight ? titleLogo : titleLogoDark}
                                                />
                                        </IconButton>
                                </div>
                                <div className={styl.closeContainer}>
                                        <IconButton
                                                className={styl.iconContainer}
                                                onClick={actions.ON_CLOSE_CLICK}
                                        >
                                                <CloseRounded />
                                        </IconButton>
                                </div>
                        </div>
                        <Divider className={styl.dividerMain} />
                        <DrawerSections {...props} />
                </div>
        )
}