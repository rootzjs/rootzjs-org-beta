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
            <div id="state" className={styl.pageTitle}>State</div>
            <Typography variant="body1" gutterBottom>State are simple JavaScript objects. In a React-Rootz app state are centrally stored and maintained within the <SelfLink name="State Container" route="/thinking-rootz" mask="Thinking Rootz " />. As other properties of <SelfLink name="NodeProps" route="/nodeprops" id="properties" />, <code>state</code> too is initialized within a Node. Initializing a state can be done through <code>node.state()</code>.</Typography>
            <NoteBlock content="This provides you a perception of creating state for individual Nodes like in flux architechture, but is rather stored and managed centrally. This provides user to focus on defining the state of individual Nodes at a time, based on its own contribution to the application's behavior. And in case of debugging it makes it easy for the user to identify the change in state of a Node than rectifying the entire application." type="info" />
            <HashLink id="state-container" className={styl.contentTitle}>State Container</HashLink>
            <Typography variant="body1" gutterBottom>State Container is where the entire state of the application is stored and maintained. Users can view the current state of the application at any time by accessing the state container Object. This Object is <code>read-only</code> in nature. The state container object can be accessed by <code>getAllNodes</code> method.</Typography>
            <HashLink id="using-getallnodes" className={styl.contentSubTitle}>Using getAllNodes</HashLink>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={getAllNodes}
            />
            <Typography variant="body1" gutterBottom><code>getAllNodes</code> returns the entire <SelfLink name="Root" route="/thinking-rootz" mask="Thinking Rootz" id="core-elements" /> variable. This variable consists of entries of Nodes along with its properties. </Typography>
            <HashLink id="container-object" className={styl.contentSubTitle}>Container Object</HashLink>
            <Typography variant="body1" gutterBottom>The Root object provides insight not only of the Node state variables but also the Actions and Contracts defined in within them.</Typography>
            <CodeBlock
                lang="json"
                isLight={isLight}
                codeString={stateContainerStructure}
            />
            <HashLink id="define-state" className={styl.contentTitle}>Define State</HashLink>
            <Typography variant="body1" gutterBottom>State should only be created using <code>node.state()</code> method. A valid state should always be a JavaScript object.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={createState}
            />
            <Typography variant="body1" gutterBottom>State cannot be a <code>number</code>, <code>boolean</code> or any other data type accept <code>Objects</code>.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={createStateInvalid}
            />
            <HashLink id="updating-state" className={styl.contentTitle}>Updating State</HashLink>
            <Typography variant="body1" gutterBottom>The state container enqueues the changes to the node state and tells React that the components within this node and it's children needs to be re-rendered with the updated state. The state container uses react state <code>updater</code> for any updates to be carried out thoughout the application. The Roots Layer smartly handles the state of each Nodes within the state container and on request for state update, enqueues the requested change to the react state <code>updater</code>.</Typography>
            <HashLink id="always-use-actions-tu-update-state" className={styl.contentSubTitle}>Always use Actions to update state</HashLink>
            <Typography variant="body1" gutterBottom>You can think of actions as a smart messenger which computes the logical body defined and requests the state container to update the state of the Node. That makes it mandatory to update the state through actions only.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={updateStateRight}
            />
            <Typography variant="body1" gutterBottom>Rather than updating the state directly.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={updateStateWrong}
            />
            <HashLink id="single-vs-nested-state-update" className={styl.contentSubTitle}>Single vs Nested state update</HashLink>

            <Typography variant="body1" gutterBottom>They can have multi-layered object structure based on the requirements. Although we recommend to define single layered state variables. But in some cases requirements often insisit upon complex layered objects as part of the state.</Typography>
            <Typography variant="body1" gutterBottom>In case of updating single layered state objects you can use <code>useAction</code> property of <SelfLink name="Node" route="/node" id="node-useaction" /> without a callback functionality.</Typography>
            <HashLink id="updating-single-layered-state-properties" className={styl.contentSubTitle}>Updating single layered state properties</HashLink>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={useActionWithoutCallback}
            />
            <Typography variant="body1" gutterBottom><code>useAction</code> with a callback or <code>useActionCallback</code> is used when the state have nested propserties to be updated. These property methods provide state varaible as handy in first argument.</Typography>
            <HashLink id="updating-nested-state-properties" className={styl.contentSubTitle}>Updating nested state properties</HashLink>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={useActionWithCallback}
            />
            <Typography variant="body1" gutterBottom>Considering the above example of updating the nested state properties the entire state object was returned with updates. There are other ways of updating nested objects. We strongly recommend to follow immutability along with any procedures.</Typography>

            <NavigationButton
                back="NodeProps"
                next="Actions"
            />
        </div>
    );
}

const createState = `// *** VALID STATE ***
// 1.
node.state({
    mounted: false
});

// 2.
let intialState = { mounted: true }
node.state(intialState);
`;

const createStateInvalid = `// *** INVALID STATE ***
// 1. 
node.state(10);

// 2. 
node.state(false);

// 3.
let mounted = false;
node.state(mounted);
`;

const useActionWithoutCallback = `
node.state({
    mounted: false
});

node.useAction(
    "ON_MOUNT", 
    { mounted: true }
);
`;

const useActionWithCallback = `
node.state({
    todos: [
        {
            completed: false,
            name: "Learning Rootz JS"

        },
        {
            completed: false,
            name: "Create a React-Rootz App"
        }
    ]
});

// updating todo of name "Learning Rootz Js" as completed
node.useAction(
    "ON_UPDATE", 
    (state, args) => {
        const todos = state.todos.map(todo => {
            if(todo.name === "Learning Rootz JS") {
                return { ...todo, isCompleted: true }
            } else {
                return todo
            }
        });

        return { todos }
    }
);
`;

const updateStateRight = `
// *** RIGHT WAY ***

<button onClick={actions.ON_BUTTON_CLICK}>
    Click Me
</button>
`;

const updateStateWrong = `
// *** WRONG WAY ***

<button onClick={() => { state.clicked = true }}>
    Click Me
</button>
`;

const getAllNodes = `
import { getAllNodes } from '@rootzjs/core';

// propvides state container object
const appState = getAllNodes();
`;


const stateContainerStructure = `
{
    #NODE_ID: {
        actions: [],
        contract: [],
        state: {},
        scope: {}
    },
    ...
}
`;