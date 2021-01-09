import React from 'react';
import { Styles } from '../styles/Documentation';
import { NoteBlock } from '../Markdown/NoteBlock';

export const Component = ({
    props
}) => {
    const styl = Styles();

    return (
        <div className={styl.root}>
            <div id="workbook-overview" className={styl.pageTitle}>Overview</div>
            <NoteBlock content='Our Workbooks will shortly be released. It would guide you through solving complex problems and situations, which we usually face during app development. We are working on guidance documentation "How to create creating a complex React-Rootz app from ground-up". This would provide an exploratory view of approaching the lifecycle of developing an application with Rootz JS. Of course it is not going to be a Todo App ;)' type="info" />

        </div>
    );
}