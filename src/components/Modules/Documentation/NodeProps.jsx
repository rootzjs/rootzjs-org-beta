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
    const embededNodePropsExample = `<iframe src="https://codesandbox.io/embed/rootzjs-concept-example2-w7cbs?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FMaster.jsx&theme=${props.theme}"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="rootzjs-concept-example2"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>`;

    return (
        <div className={styl.root}>
            <div id="nodeprops" className={styl.pageTitle}>NodeProps</div>
            <Typography variant="body1" gutterBottom><b>NodeProps</b> is an Object passed as an argument to the <SelfLink name="Components" route="/components" />. It provides access to the methods defined in Node. There are four properties of NodeProps object. <code>state</code>, <code>props</code>, <code>actions</code> and <code>profile</code>.</Typography>
            <HashLink id="properties" className={styl.contentTitle}>Properties</HashLink>
            <HashLink id="properties-props" className={styl.contentSubTitle}>props</HashLink>
            <Typography variant="body1" gutterBottom><b>Props</b> are arguments passed by the Components as parameters.</Typography>
            <HashLink id="properties-state" className={styl.contentSubTitle}>state</HashLink>
            <Typography variant="body1" gutterBottom><b>State</b> defined in Node is passed as a parameter to NodeProps. Internally its a part of the <SelfLink name="State Container" route="/thinking-rootz" mask="Thinking Rootz" />.</Typography>
            <HashLink id="properties-actions" className={styl.contentSubTitle}>actions</HashLink>
            <Typography variant="body1" gutterBottom><b>Actions and Contracts</b> are defined within a Node using <code>ACTION_IDs</code>. <SelfLink name="Action / Contract Generators" route="/thinking-rootz" mask="Thinking Rootz" /> in the Root Layer, is basically a factory for generating functions based on the arguments. These functions are mapped as values to their respective <code>ACTION_IDs</code> as keys, of the <b>actions</b> object.</Typography>
            <NoteBlock content="Actions and Contracts both are mapped to actions property of NodeProps." />
            <HashLink id="properties-profile" className={styl.contentSubTitle}>profile</HashLink>
            <Typography variant="body1" gutterBottom><b>Profile</b> is basically a derivative of the concept of Bus in networking. You can also relate them to <b>context</b> in React. They can be set through any Nodes via <code>node.setProfile</code>or through the <code>setProfile</code> method imported from the <b>Rootz Js library</b>.</Typography>
            <Typography variant="body1" gutterBottom>Let's consider an example of an React-Rootz app for displaying message through NodeProps, as props, through state, actions and contract.</Typography>
            <div className={styl.codeHeadLabel}>Try it out...</div>
            <EmbedSandbox iFrame={embededNodePropsExample} />
            <HashLink id="accessing-nodeprops" className={styl.contentTitle}>Accessing NodeProps</HashLink>
            <Typography variant="body1" gutterBottom><b>NodeProps</b> defined in class and functional components have slight difference in syntax.</Typography>
            <HashLink id="nodeprops-in-functional-component" className={styl.contentSubTitle}>NodeProps in Functional Component</HashLink>
            <Typography variant="body1" gutterBottom>NodeProps in a functional component is an Object passed a parameter, which can be destructured into the required properties used within the component. </Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageCode}
            />
            <HashLink id="nodeprops-in-a-class-component" className={styl.contentSubTitle}>NodeProps in Class Component</HashLink>
            <Typography variant="body1" gutterBottom>While in a class component it can be destructured inside the <code>render</code> lifecycle for better accessibility. </Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageClassCode}
            />
            <Typography variant="body1" gutterBottom>NodeProps are fully compatible to use along with React hooks and other functionalities. </Typography>
            <HashLink id="nodeprops-with-useeffect" className={styl.contentSubTitle}>NodeProps with <code>useEffect</code></HashLink>
            <Typography variant="body1" gutterBottom>Consider a scenario you would want to access the NodeProps from within <code>useEffect</code> hook.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageUseEffect}
            />
            <Typography variant="body1" gutterBottom>Accessing any NodeProps from within useEffect would be similar to accessing it from other part of the components.</Typography>
            <HashLink id="composing-components-with-nodeprops" className={styl.contentSubTitle}>Composing Components with NodeProps</HashLink>
            <Typography variant="body1" gutterBottom> NodeProps can also be accessed from outside the component. But for such scenarios you would need to pass it as a parameter. Consider this example where actions are to be called from another function which resides outside component scope <i>(Composing Components)</i>.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageFromComposingComponent}
            />
            <HashLink id="nodeprops-with-component-lifecycle-methods" className={styl.contentSubTitle}>NodeProps with component lifecycle methods</HashLink>
            <Typography variant="body1" gutterBottom>Accessing any NodeProps from within class lifecycle is similar to accessing it within hooks or other functions in react. Considering an example with the same will give you a brief idea about the same.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageFromLifecycle}
            />
            <Typography variant="body1" gutterBottom>There is an another alternative in using NodeProps within component lifecycle.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageFromLifecycle2}
            />
            <NoteBlock
                type="attention"
                content={`Do not destruct props, state and profile inside constructor. `}
            />
            <NoteBlock
                type="info"
                content={`actions are static, as they are initialized only once and are not changed during the application run. But other properties including props, state and profile may change. Actions can be assigned to a scope variable inside constructor to be accessed globally through a single property "this.actions" in this case.`}
            />
            <Typography variant="body1" gutterBottom>The coming sections provide detail descriptions of each properties of NodeProps. Starting from State.</Typography>
            <NavigationButton
                back="Node"
                next="State"
            />
        </div>
    );
}

const showMessageCode = `
export const Component = (nodeProps) => {
    const { props, state, actions, profile } = nodeProps;

	return (
	    {YOUR JSX ELEMENTS GOES HERE}
    )
});
`;

const showMessageClassCode = `
class Component extends React.Component {
    constructor() { super(); }

    render() {
        const { props, state, actions, profile } = this.props;
        
        return (
            {YOUR JSX ELEMENTS GOES HERE}
        )
    }
} 
`;

const showMessageUseEffect = `
export const Component = (nodeProps) => {
    const { props, state, actions, profile } = nodeProps;

    React.useEffect(() => {
        actions.ACTION_ID();
    }, [actions]);

	return (
	    {YOUR JSX ELEMENTS GOES HERE}
    )
});
`;

const showMessageFromComposingComponent = `
export const Component = (nodeProps) => {
    const { props, state, actions, profile } = nodeProps;

	return (
        <CustomButton 
            label="Btn 1"
            btnClick={actions.ACTION_ID} 
        />
        <CustomButton 
            label="Btn 2" 
            btnClick={actions.ACTION_ID} 
        />
    )
});

const CustomButton = (props) => {
    return (
        <button onClick={props.btnClick}>
            {props.label}
        </button>
    )
}
`;

const showMessageFromLifecycle = `
class Component extends React.Component {
    constructor() { super(); }

    componentDidMount() {
        const { actions } = this.props;
        actions.ACTION_ID();
    }

    render() {
        return (
            {YOUR JSX ELEMENTS GOES HERE}
        )
    }
} 
`;

const showMessageFromLifecycle2 = `
class Component extends React.Component {
    constructor() { 
        super(); 
        this.actions = this.props.actions;
    }

    componentDidMount() {
        this.actions.ACTION_ID();
    }

    render() {
        const { props, state, profile } = this.props;
        return (
            {YOUR JSX ELEMENTS GOES HERE}
        )
    }
} 
`;