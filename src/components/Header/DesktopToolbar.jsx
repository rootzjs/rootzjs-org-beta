import React from 'react';
import { IconButton } from '../../Matlib';

// styles
import { Styles } from "../../styles/AppHeader";

export const Component = ({
        props,
        state,
        actions
}) => {
        const styl = Styles();
        const { isLight } = props;
        const logo = React.useRef(null);
        const logoDark = React.useRef(null);
        const titleLogo = React.useRef(null);
        const titleLogoDark = React.useRef(null);

        React.useEffect(() => {
                const asyncLoad = async () => {
                        try {
                                if (isLight) {
                                        logo.current = (await import("../../assets/images/logo.svg")).default;
                                        titleLogo.current = (await import("../../assets/images/title.svg")).default;
                                } else {
                                        logoDark.current = (await import("../../assets/images/logoDark.svg")).default;
                                        titleLogoDark.current = (await import("../../assets/images/titleDark.svg")).default;
                                }
                        } catch {
                                throw new Error("error in loading content");
                        } finally {
                                actions.CONTENT_LOAD_COMPLETE();
                        }
                }
                asyncLoad();
        }, [actions, isLight]);
        return (
                <React.Fragment>
                        <div className={styl.logoContainer}>
                                <IconButton
                                        className={styl.iconContainer}
                                        onClick={() => props.history.push("/")}
                                >
                                        {
                                                (state.allContentLoaded && (logo.current || logoDark.current)) && (
                                                        <img
                                                                alt="logo"
                                                                width="37"
                                                                height="30"
                                                                className={styl.logo}
                                                                src={isLight ? logo.current : logoDark.current}
                                                        />
                                                )
                                        }
                                        {
                                                (state.allContentLoaded && (titleLogo.current || titleLogoDark.current)) && (
                                                        < img
                                                                alt="logo"
                                                                width="110"
                                                                height="22"
                                                                className={styl.logoTitle}
                                                                src={isLight ? titleLogo.current : titleLogoDark.current}
                                                        />
                                                )
                                        }
                                </IconButton>
                        </div>
                </React.Fragment>
        )
}