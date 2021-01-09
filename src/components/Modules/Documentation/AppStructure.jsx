import React from 'react';
import { Typography } from '../../../Matlib';
import { CodeBlock } from '../Markdown/CodeBlock';
import { NoteBlock } from '../Markdown/NoteBlock';
import { SelfLink } from '../../../nodes/Modules/Markdown/SelfLink';
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
            <div id="structuring-a-rootz-app" className={styl.pageTitle}>Structuring a Rootz App</div>
            <Typography variant="body1" gutterBottom>The essential requirement when it comes to the Rootz app is how to structure it with Rootz configuration. There is no single answer to it. We recommend to follow the below structure, although Rootz provides freedom to experiment with suitable structure for your application.</Typography>
            <CodeBlock
                lang="text"
                isLight={isLight}
                codeString={appStructure}
            />
            <HashLink id="nodes-and-components" className={styl.contentSubTitle}>Nodes and Components</HashLink>
            <Typography variant="body1" gutterBottom>Rootz segregates the functionalities for managing state from a React component. A component is the basic building block of any application. Thus the components can be created generically to extend its reusability. Components in Rootz handles the rendering part of the application. While the Node provides a character to a component making it dynamic in nature. </Typography>
            <Typography variant="body1" gutterBottom>Let's take an example of a simple component.</Typography>
            <div className={styl.codeHeadLabel}>Message.jsx</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageNodeWithComponent}
            />
            <Typography variant="body1" gutterBottom>In the above example we have created a Node with a component as a callback function, along with the definition of its properties. This approach would work just fine. As the components are tightly coupled to a specific Node, they cannot be reused as a part of other Nodes. To extend the reusability of the components it is suggested to decouple the Nodes and the components into their respective folders. </Typography>
            <NoteBlock content="Decoupling of the components from nodes makes them reusable entities, for better maintainability and debugging. It also segregates the responsibilities of the Node and the Component. Where the Node would be represented as the logical playground for the component. And the component now becomes a listener to the Nodes it is bounded to." key="Note" />
            <Typography variant="body1" gutterBottom>Let's take an example of a component decoupled from a Node.</Typography>
            <div className={styl.codeHeadLabel}>components/Message.jsx</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageCode}
            />
            <Typography variant="body1" gutterBottom>In the above example the component is a react component with pre-defined props. These props are known as <SelfLink name="NodeProps" route="/nodeprops" id="properties" />. NodeProps helps in accessing the functionalities defined within a Node. The state and the actions used within the <b>ShowMessage.jsx</b> component is defined in its Node.</Typography>
            <Typography variant="body1" gutterBottom>Let's take a look at the corresponding Node for <b>ShowMessage.jsx</b> component.</Typography>
            <div className={styl.codeHeadLabel}>node/Message.js</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageNode}
            />
            <Typography variant="body1" gutterBottom>As mentioned in the above example multiple Nodes can use the same component with different conditions. This increases the reusability of the available components.</Typography>
            <NoteBlock content="Node is where the dynamic functionalities of a component is declared. A Component is where these functionalities are used, through NodeProps." key="Note" />
            <Typography variant="body1" gutterBottom>The Node <b>ShowMessage.js</b> clearly mentions the definition of the initial state of the message being <code>"..."</code> and the action <code>NEW_MESSAGE</code> which when called returns an updated state with a <code>"It's just that simple !!"</code> message. </Typography>
            <Typography variant="body1" gutterBottom>More details on Rootz along with examples are covered in the
                <SelfLink
                    mask="Overview"
                    name="Workbook"
                    route="/overview"
                    id=""
                />
                section.
                You can refer <SelfLink name="Actions" route="/actions" id="" /> and <SelfLink name="State" route="State" id="" /> sections to know more about them.
            </Typography>
            <NavigationButton
                back="Thinking Rootz"
                next="Components"
            />
        </div>
    );
}

// rootz-app structure
const appStructure = `src/
    components/
        AddTodo.jsx
        TodoList.jsx
        FilterTodo.jsx
    nodes/
        AddTodo.js
        TodoList.js
        FilterTodo.js`;

const showMessageCode = `
import React from "react";

/*
* @param {state, props, actions, profile}
* @type NodeProps Object
*/
export const Component = function ({ state, actions }) {
    return (
        <div className="container">
            <p>{state.message}</p>
            <button className="btn" onClick={actions.NEW_MESSAGE}>
                Add Message
            </button>
        </div>
    );
};
`;

const showMessageNode = `
import { createNode } from "@rootzjs/core";
import { Component } from "../components/Master";

const [node, dispatchNode] = createNode("Master", Component);

// define intial state
node.state({ message: "..." });

// define actions on button clicked
node.useAction("NEW_MESSAGE", {
    message: "It's just that simple !!"
});

// dispatch Node
export const Master = dispatchNode(node);
`;


const showMessageNodeWithComponent = `
import React from 'react';
import { createNode } from "@rootzjs/core";

/*
* @param {state, props, actions, profile}
* @type NodeProps Object
*/
const [node, dispatchNode] = createNode("Master", function ({
    state,
    actions
}) {
    return (
        <div className="container">
            <p>{state.message}</p>
            <button className="btn" onClick={actions.NEW_MESSAGE}>
                Add Message
            </button>
        </div>
    );
});

// define intial state
node.state({ message: "..." });

// define actions on button clicked
node.useAction("NEW_MESSAGE", {
    message: "It's just that simple !!"
});

// dispatch Node
export const Master = dispatchNode(node);
`;