import React from 'react';
import { Typography } from '../../../Matlib';
import { CodeBlock } from '../Markdown/CodeBlock';
import { EmbedSandbox } from '../Markdown/EmbedCode';
import { SelfLink } from '../../../nodes/Modules/Markdown/SelfLink';
import { NavigationButton } from '../../../nodes/Modules/Markdown/NavigationButton';

import { Styles } from '../styles/Documentation';

export const Component = ({
    props
}) => {
    const styl = Styles();
    const isLight = props.theme === "light";
    const embedComponentExample = `<iframe src="https://codesandbox.io/embed/rootzjs-concepts-example1-dyv6g?autoresize=1&fontsize=14&module=%2Fsrc%2Fcomponents%2FMaster.jsx&theme=${props.theme}"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="rootzjs-concepts-example1"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>`;

    return (
        <div className={styl.root}>
            <div id="components" className={styl.pageTitle}>Components</div>
            <Typography variant="body1" gutterBottom>A component is the basic building block of any application. They can be created generically to extend its reusability. Components in React-Rootz app is a controlled component handling the rendering part of the application. While the Node provides a character to a component making it dynamic in nature.</Typography>
            <Typography variant="body1" gutterBottom>A component in Rootz can be a React class or a functional component with a pre-defined object passed as props, known as <SelfLink name="NodeProps" route="/nodeprops" id="accessing-nodeprops" />. The props object for the component is defined by Rootz and have properties which help in accessing the defined functionalities. </Typography>
            <Typography variant="body1" gutterBottom>Let's take a look at a simple functional component in a React-Rootz application.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageCode}
            />
            <Typography variant="body1" gutterBottom>Components should solve a single purpose for what it is intended to solve. Adding conditional rendering complexities in an existing component makes it complex in terms of maintainability. </Typography>
            <Typography variant="body1" gutterBottom>Let's take a look at a simple class component in a React-Rootz application. </Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={showMessageClassCode}
            />
            <Typography variant="body1" gutterBottom>Accessing NodeProps works similarly in class components, with slightly different syntax. Here you destructure props in the <code>render()</code> function. </Typography>
            <div className={styl.codeHeadLabel}>Try it out...</div>
            <EmbedSandbox iFrame={embedComponentExample} />
            <Typography variant="body1" gutterBottom>NodeProps helps in accessing the state, props, actions and profile in a Component. These properties are defined in a Node. Let's take a look at how Node handles a Component in our next chapter <b>Node</b>.</Typography>
            <NavigationButton
                back="Thinking Rootz"
                next="Node"
            />
        </div>
    );
}

const showMessageCode = `
import React from 'react';

/*
* @param: { props, state, actions, profile } nodeProps
* @type: NodeProps
* @proptype: Object
*/
export const Component = (nodeProps) => {
    const { props, state, actions, profile } = nodeProps;
	return (
	    {YOUR JSX ELEMENTS GOES HERE}
    )
});
`;

const showMessageClassCode = `
import React from 'react';

/*
* @param: { props, state, actions, profile } this.props
* @type: NodeProps
* @proptype: Object
*/
class Component extends React.Component {
    constructor() {
        super();
    }
    render() {
        const {
            props,
            state,
            actions,
            profile,
        } = this.props;
        
        return (
            {YOUR JSX ELEMENTS GOES HERE}
        )
    }
} 
`;

