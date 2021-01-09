import React from 'react';
import { Typography } from '../../../Matlib';
import { Link } from '../Markdown/ExternalLink';
import { CodeBlock } from '../Markdown/CodeBlock';
import { NoteBlock } from '../Markdown/NoteBlock';
import { HashLink } from '../../../nodes/Modules/Markdown/HashLink';
import { NavigationButton } from '../../../nodes/Modules/Markdown/NavigationButton';

import { Styles } from '../styles/Documentation';

export const Component = ({
        props
}) => {
        const styl = Styles();
        const isLight = props.theme === "light";

        return (
                <div className={styl.root}>
                        <div id="installation" className={styl.pageTitle}>Installation</div>
                        <Typography variant="body1" gutterBottom>React-Rootz applications can be created by using the official <Link name="Rootz JS" url="https://github.com/rootzjs/cra-template-rootzjs" /> template for <Link name="create-react-app" url="https://github.com/facebook/create-react-app" />. This is the recommended way to use Rootz in React applications. As this takes the advantage of Rootz integration with React components.</Typography>
                        <CodeBlock
                                lang="git"
                                isLight={isLight}
                                codeString={createRootzAppString}
                        />
                        <Typography variant="body1" gutterBottom>To install the core library with npm:</Typography>
                        <CodeBlock
                                lang="git"
                                isLight={isLight}
                                codeString={npmInstallRootzString}
                        />
                        <Typography variant="body1" gutterBottom>with yarn:</Typography>
                        <CodeBlock
                                lang="git"
                                isLight={isLight}
                                codeString={yarAddRootzString}
                        />
                        <HashLink id="post-installation" className={styl.contentTitle}>Post Installation</HashLink>
                        <Typography variant="body1" gutterBottom>Once the React-Rootz application is installed, run command:</Typography>
                        <CodeBlock
                                lang="git"
                                isLight={isLight}
                                codeString={pathToApp}
                        />
                        <NoteBlock content={`This is considering you have used Rootz JS template to create your application.`} />
                        <Typography variant="body1" gutterBottom>A splash page would be rendered post app start. Now you are all set to create great apps with Rootz JS :)</Typography>
                        <NavigationButton
                                back="Introduction"
                                next="Thinking Rootz"
                        />
                </div>
        );
}
// create-react-app
const createRootzAppString = "npx create-react-app my-app --template rootzjs";
// npm install rootz
const npmInstallRootzString = "npm install —-save @rootzjs/core";
// yarn add rootz
const yarAddRootzString = "yarn add --dev @rootzjs/core";
// navigate to the folder and run app
const pathToApp =
        `cd /PATH/TO/YOUR/REACT_ROOTZ_APP
npm run start`