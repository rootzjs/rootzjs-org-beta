import React from 'react';
import { Styles } from '../styles/Markdown';
import { NavigateNextRounded, NavigateBeforeRounded } from '../../../Matlib';

// Link Tag
export const Component = ({
        props,
        actions
}) => {
        const styl = Styles();
        return (
                <div className={styl.buttonContainer}>
                        <div
                                className={styl.button}
                                onClick={() => actions.GOTO_PREVIOUS(props)}
                                style={{
                                        alignItems: "flex-end",
                                        justifyContent: "flex-start",
                                        visibility: !!props.back ? "visible" : "hidden"
                                }}
                        >
                                <div className={styl.btnSubLabel} style={{  }}>Jump To</div>
                                <div className={styl.btnContentWrapper}>
                                        <NavigateBeforeRounded />
                                        {props.back}
                                </div>
                        </div>
                        <div
                                className={styl.button}
                                onClick={() => actions.GOTO_NEXT(props)}
                                style={{
                                        alignItems: "flex-start",
                                        justifyContent: "flex-end",
                                        visibility: !!props.next ? "visible" : "hidden"
                                }}
                        >
                                <div className={styl.btnSubLabel}>Jump To</div>
                                <div className={styl.btnContentWrapper}>
                                        {props.next}
                                        <NavigateNextRounded />
                                </div>
                        </div>
                </div>

        )
}