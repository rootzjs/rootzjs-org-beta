import React from 'react';
import { Styles } from '../styles/Markdown';

// Notes
export const NoteBlock = ({ content, type = "note", children }) => {
        const styl = Styles();
        switch (type) {
                case "note": {
                        return (
                                <div className={styl.noteContainer}>
                                        <span className={styl.noteLabel}>Note:</span>
                                        <span className={styl.noteContent}>{content}</span>
                                        {
                                                children &&
                                                (<span className={styl.noteContentLink}>{children}</span>)
                                        }
                                </div>
                        )
                }
                case "attention": {
                        return (
                                <div className={styl.noteContainerAttention}>
                                        <span className={styl.noteLabel}>Attention:</span>
                                        <span className={styl.noteContent}>{content}</span>
                                        {
                                                children &&
                                                (<span className={styl.noteContentLink}>{children}</span>)
                                        }
                                </div>
                        )
                }
                case "info": {
                        return (
                                <div className={styl.noteContainerInfo}>
                                        <span className={styl.noteLabel}>Info:</span>
                                        <span className={styl.noteContent}>{content}</span>
                                        {
                                                children &&
                                                (<span className={styl.noteContentLink}>{children}</span>)
                                        }
                                </div>
                        )
                }
                default: {
                        return (
                                <div className={styl.noteContainer}>
                                        <span className={styl.noteLabel}>Note:</span>
                                        <span className={styl.noteContent}>{content}</span>
                                        {
                                                children &&
                                                (<span className={styl.noteContentLink}>{children}</span>)
                                        }
                                </div>
                        )
                }
        }

}