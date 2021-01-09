import React from 'react';
import { Tooltip, useTheme } from '../Matlib';

import { Styles } from '../styles/Splash';

export const Component = ({
    state,
    props,
    actions
}) => {
    const styl = Styles();
    const theme = useTheme();
    const Debug = React.useRef(null);
    const Container = React.useRef(null);
    const StrucFunc = React.useRef(null);
    const Generators = React.useRef(null);
    const RootzCopyright = React.useRef(null);
    const navigateToIntroduction = () => {
        actions.KEEP_DRAWER_CLOSED();
        props.history.push("/introduction");
    }
    React.useEffect(() => {
        const asyncLoad = async () => {
            try {
                Debug.current = (await import("../assets/images/debug.svg")).default;
                Container.current = (await import("../assets/images/container.svg")).default;
                StrucFunc.current = (await import("../assets/images/struc-func.svg")).default;
                Generators.current = (await import("../assets/images/generators.svg")).default;
                RootzCopyright.current = (await import("../assets/images/rootz-logo-copyright.png")).default;
            }
            catch {
                throw new Error("error in loading content");
            }
            finally {
                actions.CONTENT_LOAD_COMPLETE();
            }
        }
        asyncLoad();
    }, [actions]);

    return (
        <div className={styl.root}>
            <div className={styl.titleSection}>
                <div className={styl.title}>Rootz JS</div>
                <div className={styl.subTitle}>A centralized state management tool for React apps</div>
                <div className={styl.btnContainer}>
                    <button className={styl.getStartedBtn} onClick={navigateToIntroduction}>Get Started</button>
                    <Tooltip title="We are in course of making it better">
                        <button className={styl.devtoolsLink}>Rootz Devtools</button>
                    </Tooltip>
                </div>
            </div>
            <div className={styl.featuresContainer}>
                <div className={styl.featureWrapper}>
                    <div className={styl.featureImgWrapper}>
                        {
                            (state.allContentLoaded && Container.current) && (
                                <img
                                    width="35vmin"
                                    height="30vmin"
                                    src={Container.current}
                                    className={styl.featureImg}
                                    alt="Centralized State Management"
                                />
                            )
                        }
                    </div>
                    <div className={styl.featureTextWrapper}>
                        <div className={styl.contentTile} >Centralized State Management</div>
                        <div className={styl.contentText}>Helps you to design your application with complete control over its state. This way you define the outcome of your application, rather predicting them.</div>
                    </div>
                </div>
                <div className={styl.featureWrapper}>
                    <div className={styl.featureImgWrapper}>
                        {
                            (state.allContentLoaded && StrucFunc.current) && (
                                <img
                                    width="35vmin"
                                    height="30vmin"
                                    src={StrucFunc.current}
                                    className={styl.featureImg}
                                    alt="Structural-Functional Paradigm"
                                />
                            )
                        }
                    </div>
                    <div className={styl.featureTextWrapper}>
                        <div className={styl.contentTile}>Structural-Functional Paradigm</div>
                        <div className={styl.contentText}>Helps you see your application as complex system, whose parts work together to promote solidarity and stability.</div>
                    </div>
                </div>
                <div className={styl.featureWrapper}>
                    <div className={styl.featureImgWrapper}>
                        {
                            (state.allContentLoaded && Generators.current) && (
                                <img
                                    width="35vmin"
                                    height="30vmin"
                                    src={Generators.current}
                                    className={styl.featureImg}
                                    alt="Boilerplate Generators"
                                />
                            )
                        }
                    </div>
                    <div className={styl.featureTextWrapper}>
                        <div className={styl.contentTile}>Boilerplate Generators</div>
                        <div className={styl.contentText}>Helps reduce code redundancy. Achieve great Lines Of Code to functionality ratio.</div>
                    </div>
                </div>
                <div className={styl.featureWrapper}>
                    <div className={styl.featureImgWrapper}>
                        {
                            (state.allContentLoaded && Debug.current) && (
                                <img
                                    width="35vmin"
                                    height="30vmin"
                                    src={Debug.current}
                                    className={styl.featureImg}
                                    alt="Effective Debugging"
                                />
                            )
                        }
                    </div>
                    <div className={styl.featureTextWrapper}>
                        <div className={styl.contentTile}>Effective Debugging</div>
                        <div className={styl.contentText}><b>Rootz Devtools provide a complete structural layout of your application</b>. This gives insight about how, when and where your application state changes. Also provides smart tools for <b>Effective code, structural, and behavioral review</b>. </div>
                    </div>
                </div>
            </div>
            <div className={styl.footerSection}>
                <div className={styl.footerWrapper}>
                    {
                        !theme.isMobile &&
                        (
                            <div className={styl.copyrights}>
                                <div className={styl.imgWrapper}>
                                    {
                                        (state.allContentLoaded && RootzCopyright.current) && (
                                            <img
                                                width="9vmin"
                                                height="7vmin"
                                                alt="Rootz JS"
                                                src={RootzCopyright.current}
                                            />
                                        )
                                    }
                                </div>
                                <div className={styl.copyrightText}>Copyrights &#169; 2021 Trishanth Naidu.</div>
                            </div>
                        )
                    }
                    <div className={styl.footerLinksWrapper}>
                        <div className={styl.sectionPartition}>
                            <div className={styl.footerLinkHead}>Docs</div>
                            <div className={styl.footerLinks}>
                                <span onClick={() => { props.history.push("/introduction") }}>
                                    Getting Started
                                </span>
                            </div>
                            <div className={styl.footerLinks}>
                                <span onClick={() => { props.history.push("/components") }}>
                                    Core Concepts
                                </span>
                            </div>
                            <div className={`${styl.footerLinks} ${styl.linkDisabled}`}>Workbook</div>
                            <div className={`${styl.footerLinks} ${styl.linkDisabled}`}>API Reference</div>
                            <div className={`${styl.footerLinks} ${styl.linkDisabled}`}>FAQs</div>
                        </div>
                        <div className={styl.sectionPartition}>
                            <div className={styl.footerLinkHead}>Channels</div>
                            <div className={styl.footerLinks}>GitHub</div>
                            <div className={styl.footerLinks}>Stack Overflow</div>
                        </div>
                        {/* <div className={styl.sectionPartition}>
                            <div className={styl.footerLinkHead}>Trusted By</div>
                            <div className={styl.footerLinks}>Disney</div>
                            <div className={styl.footerLinks}>Star Tv</div>
                            <div className={styl.footerLinks}>Analytixa</div>
                        </div> */}
                    </div>
                </div>
            </div>

            {
                theme.isMobile &&
                (
                    <div className={styl.copyrightTextMobileWrapper}>
                        <div className={styl.copyrightText}>Copyrights &#169; 2021 Trishanth Naidu.</div>
                    </div>
                )
            }
        </div>
    );
}