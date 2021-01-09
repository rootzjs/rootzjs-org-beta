import React from 'react';
import { Typography } from '../../../Matlib';
import { CodeBlock } from '../Markdown/CodeBlock';
import { NoteBlock } from '../Markdown/NoteBlock';
import { EmbedSandbox } from '../Markdown/EmbedCode';
import { SelfLink } from '../../../nodes/Modules/Markdown/SelfLink';
import { HashLink } from '../../../nodes/Modules/Markdown/HashLink';
import { NavigationButton } from '../../../nodes/Modules/Markdown/NavigationButton';

import { Styles } from '../styles/Documentation';

export const Component = ({
    props
}) => {
    const styl = Styles();
    const isLight = props.theme === "light";
    const embedComponentExample = `<iframe src="https://codesandbox.io/embed/rootzjs-concepts-example1-dyv6g?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fnodes%2FMaster.js&theme=${props.theme}"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="rootzjs-concepts-example1"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>`;

    return (
        <div className={styl.root}>
            <div id="node" className={styl.pageTitle}>Node</div>
            <Typography variant="body1" gutterBottom>Node exists as an interactive layer between <SelfLink name="Root" route="/thinking-rootz" mask="Thinking Rootz" id="core-elements" /> and the <SelfLink name="Components" route="/components" />. It acts as a controller for the components which can be seen as a view in a React-Rootz app. </Typography>
            <Typography variant="body1" gutterBottom>A Node provides dynamic nature to a components. It provides functionality to define the initial state of the Node. Additionally a Node also provides functionalities to manage the change in state through actions and contract. Methods like <code>useAction</code> and <code>useContract</code> helps in managing the change in state of the Node.</Typography>
            <Typography variant="body1" gutterBottom>Let's take a look at a simple Node definition in a React-Rootz application.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageCode}
            />
            <NoteBlock content="The above example assumes the Node and Components are decoupled into separate files." />
            <div className={styl.codeHeadLabel}>Try it out...</div>
            <EmbedSandbox iFrame={embedComponentExample} />
            <HashLink id="create-a-node" className={styl.contentTitle}>Create a Node</HashLink>
            <Typography variant="body1" gutterBottom>To create a node you should be aware of the certain concepts which are mentioned in details along with their syntax below. By the end of this section one should be in a state to create a simple React-Rootz app to update a message. You can refer to the working example mentioned above.</Typography>
            <HashLink id="createnode" className={styl.contentSubTitle}>createNode</HashLink>
            <Typography variant="body1" gutterBottom>The <code>createNode</code> method creates an instance of the Node. It accepts a unique Id <code>NODE_ID</code> of type string followed by a Component <i>(React.Component / React.FC)</i>. In return it provides an array of 2 <code>{`createNode: (NODE_ID: string, Component: Function) => [node: Node, (node: Node) => React.PureComponent]`}</code>, the instance of Node class at 0th index followed by the dispatch functionality at the 1st index.</Typography>
            <HashLink id="dispatchnode" className={styl.contentSubTitle}>dispatchNode</HashLink>
            <Typography variant="body1" gutterBottom>The <code>dispatchNode</code> method accepts the instance of the Node as a parameter inturn returning a pure component. All the components in React-Rootz app is wrapped with a pure component providing an advantage for performance. </Typography>
            <HashLink id="properties-of-node" className={styl.contentTitle}>Properties of Node</HashLink>
            <Typography variant="body1" gutterBottom>The instance of Node class provides list of predefined functionalities known as <b>Node Methods</b>. These methods are used to define NodeProps. Let's consider each of these methods in detail.</Typography>
            <HashLink id="node-state" className={styl.contentSubTitle}>node.state</HashLink>
            <Typography variant="body1" gutterBottom><code>state</code>accepts a plain JavaScript object <code>STATE_PROPS</code> to declare the <SelfLink name="State" route="/state" id="define-state" /> of the component. This state is then accessible as part of the <SelfLink name="NodeProps" route="/nodeprops" id="properties" />.</Typography>
            <div className={styl.codeHeadLabel}>syntax:</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={syntaxForNodeState}
            />
            <HashLink id="node-useaction" className={styl.contentSubTitle}>node.useAction</HashLink>
            <Typography variant="body1" gutterBottom><code>useAction</code> provides a functionality to create <SelfLink name="Actions" route="/actions" id="create-actions" />. It takes two parameters, <code>ACTION_ID</code> a unique id followed by a second parameter which can be an object or a callback function. The callback function provides state of the Node as a parameter along with the array of arguments, passed during the function call.</Typography>
            <div className={styl.codeHeadLabel}>syntax 1:</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={syntaxForNodeUseActionWithObject}
            />
            <div className={styl.codeHeadLabel}>syntax 2:</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={syntaxForNodeUseActionWithFunc}
            />
            <HashLink id="node-useactioncallback" className={styl.contentSubTitle}>node.useActionCallback</HashLink>
            <Typography variant="body1" gutterBottom><code>useActionCallback</code> is the same overloading function of <code>useAction</code> with a callback.</Typography>
            <div className={styl.codeHeadLabel}>syntax:</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={syntaxForNodeUseActionCallback}
            />
            <HashLink id="node-usecontract" className={styl.contentSubTitle}>node.useContract</HashLink>
            <Typography variant="body1" gutterBottom><code>useContract</code> is similar to creating an Action. The only difference is that it takes an additional parameter, <code>TARGET_NODE_ID</code> The Node which it intends to update when the action is raised. The callback function in a Contract would return the current state of the target Node.</Typography>
            <div className={styl.codeHeadLabel}>syntax 1:</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={syntaxForNodeUseContractWithObject}
            />
            <div className={styl.codeHeadLabel}>syntax 2:</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={syntaxForNodeUseContractWithFunc}
            />
            <HashLink id="node-usecontractcallback" className={styl.contentSubTitle}>node.useContractCallback</HashLink>
            <Typography variant="body1" gutterBottom><code>useContractCallback</code> is the same overloading function of <code>useContract</code> with a callback.</Typography>
            <div className={styl.codeHeadLabel}>syntax:</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={syntaxForNodeUseContractCallback}
            />
            <HashLink id="node-setprofile" className={styl.contentSubTitle}>node.setProfile</HashLink>
            <Typography variant="body1" gutterBottom><code>setProfile</code> provides a functionality to create <SelfLink name="Profiles" route="/profile" mask="Profile" />. It accepts a JavaScript object as a parameter.</Typography>
            <div className={styl.codeHeadLabel}>syntax:</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={syntaxForNodeSetProfile}
            />
            <NoteBlock content="ACTION_ID should be unique within the scope of a Node. Similar ACTION_IDs can be used in another Nodes." />
            <Typography variant="body1" gutterBottom>In this section you have learnt to create a Node and use its Methods to define state, actions, contract and profiles. Lets see how these defined properties would be used within a component through <b>NodeProps</b></Typography>
            <NavigationButton
                back="Components"
                next="NodeProps"
            />
        </div>
    );
}
// Nodes provides a dynamic nature Components in React-Rootz app 
const showMessageCode = `
import { createNode } from '@rootzjs/core';
import { Component } from '../components/Message';

/*
* createNode
* @param: Message: String
* @param: Component: React.Component | React.FC
* @returnType: [node: Node, dispatchNode: Function]
*/
const [node, dispatchNode] = createNode("Message", Component);

export const Message = dispatchNode(node);
`;

const syntaxForNodeState = `node.state(STATE_PROPS: { })`;
const syntaxForNodeUseActionWithObject = `// with UPDATED_STATE as an Object

node.useAction(
    ACTION_ID: string, 
    UPDATED_STATE: { }
)`;
const syntaxForNodeUseActionWithFunc = `// with UPDATED_STATE as a callback function

node.useAction(
    ACTION_ID: string, 
    (stateOfNode: { }, ARGUMENTS: [ ]) => UPDATED_STATE: { }
)`;

const syntaxForNodeUseContractWithObject = `// with UPDATED_STATE as an Object

node.useContract(
    TARGET_NODE_ID: string,
    ACTION_ID: string, 
    UPDATED_STATE: { }
)`;
const syntaxForNodeUseContractWithFunc = `// with UPDATED_STATE as a callback function

node.useContract(
    TARGET_NODE_ID: string,
    ACTION_ID: string, 
    (stateOfTargetNode: { }, ARGUMENTS: [ ]) => UPDATED_STATE: { }
)`;
// with callbackFunc
const syntaxForNodeUseActionCallback = `// with UPDATED_STATE as callback function

node.useActionCallback(
    ACTION_ID: string, 
    (stateOfNode: { }, ARGUMENTS: [ ]) => UPDATED_STATE: { }
)`;

const syntaxForNodeUseContractCallback = `// with UPDATED_STATE as callback function

node.useContractCallback(
    TARGET_NODE_ID: string,
    ACTION_ID: string, 
    (stateOfTargetNode: { }, ARGUMENTS: [ ]) => UPDATED_STATE: { }
)`;

const syntaxForNodeSetProfile = `node.setProfile(PROFILE: { })`;