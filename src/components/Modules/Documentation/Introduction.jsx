import React from 'react';
import { Typography } from '../../../Matlib';
import { Link } from '../Markdown/ExternalLink';
import { CodeBlock } from '../Markdown/CodeBlock';
import { SelfLink } from '../../../nodes/Modules/Markdown/SelfLink';
import { HashLink } from '../../../nodes/Modules/Markdown/HashLink';
import { NavigationButton } from '../../../nodes/Modules/Markdown/NavigationButton';

import { Styles } from '../styles/Documentation';

export const Component = ({
        props,
        profile
}) => {
        const styl = Styles();
        const isLight = props.theme === "light";

        return (
                <div className={styl.root}>
                        <div id="introduction" className={styl.pageTitle}>{profile.INTRO.title}</div>
                        <Typography variant="body1" gutterBottom>{profile.INTRO.subText1}</Typography>
                        <Typography variant="body1" gutterBottom>Rootz shadows most of the functionalities and provides access to only those which are required for handling the state. This makes it easier for the user to rapidly build complex applications with lesser Lines Of Code <i>(LOC)</i>. Rootz smartly skips the boilerplates code by predefining them during the creation of <SelfLink name="Nodes" route="/nodes" id="create-a-node" />, which otherwise the user may end up writing. This increases the LOC to the functionality ratio without compromising the code quality and complexity. </Typography>
                        <Typography variant="body1" gutterBottom>It follows a  <Link name="structural-functional" url="https://en.wikipedia.org/wiki/Structural_functionalism" /> paradigm, which sees your application as a set of Nodes interconnected through definitive set of actions, defined during the application building process. Each action defines the change of state of the Node. All the Nodes abide by these actions resulting into expected application's behavior.</Typography>
                        <Typography variant="body1" gutterBottom>This makes it easy to manage the state of your application. Rootz is just over <Link name="2kb" url="https://www.npmjs.com/package/@rootzjs/core" />, including dependencies. By this, it is not only light on your pocket, but also helps in solving application's structural complexities for maintaining state.</Typography>
                        <Typography variant="body1" gutterBottom></Typography>
                        <HashLink id="create-a-react-rootz-app" className={styl.contentTitle}>Create a React-Rootz App</HashLink>
                        <Typography variant="body1" gutterBottom>The recommended way to use Rootz in a React application is by using the official <Link name="Rootz JS" url="https://github.com/rootzjs/cra-template-rootzjs" /> template for <Link name="create-react-app" url="https://github.com/facebook/create-react-app" />.</Typography>
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
                        <HashLink id="why-rootz" className={styl.contentTitle}>Why Rootz?</HashLink>
                        <Typography variant="body1" gutterBottom>Rootz, provides a definitive structure to your application and its state, by which you achieve better lines of code (LOC) to behavior ratio. This helps you to achieve expected behavior of your application with minimal LOC. </Typography>
                        <Typography variant="body1" gutterBottom>The behavior of the application is contributed by the
                                <SelfLink
                                        name="State"
                                        route="/state"
                                />
                        and the
                                <SelfLink
                                        name="Actions"
                                        route="/actions"
                                />
                        defined. States being a simple JavaScript object, while actions are result of built in boilerplate methods which concludes in ease of use with minimal learning curve.</Typography>
                        <HashLink id="when-to-use-rootz" className={styl.contentTitle}>When to use Rootz?</HashLink>
                        <Typography variant="body1" gutterBottom>Using Rootz is beneficial when:</Typography>
                        <ul>
                                <li>
                                        <Typography variant="body1" gutterBottom>Multiple components of an application has inter-component-state dependencies.</Typography>
                                </li>
                                <li>
                                        <Typography variant="body1" gutterBottom>Applications having reasonable data change / update over time.</Typography>
                                </li>
                                <li>
                                        <Typography variant="body1" gutterBottom>Scenario, where too much dependencies are imposed on a single component. Making it difficult to manage updates.</Typography>
                                </li>
                        </ul>
                        <Typography variant="body1" gutterBottom>Nevertheless Rootz can be used with any React Application, adopting any use cases. It not only manages the state but also helps in structuring the application for better long term maintainability and easy debugging. With just over 2KB (including dependencies) it contributes to benefit almost any application with performance constraints. </Typography>
                        <NavigationButton
                                back=""
                                next="Installation"
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