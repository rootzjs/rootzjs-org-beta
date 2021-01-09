import React from 'react';
import { Typography } from '../../../Matlib';
import { CodeBlock } from '../Markdown/CodeBlock';
import { NoteBlock } from '../Markdown/NoteBlock';
import { HashLink } from '../../../nodes/Modules/Markdown/HashLink';
import { SelfLink } from '../../../nodes/Modules/Markdown/SelfLink';
import { NavigationButton } from '../../../nodes/Modules/Markdown/NavigationButton';

import { Styles } from '../styles/Documentation';
import { EmbedSandbox } from '../Markdown/EmbedCode';

export const Component = ({
    props
}) => {
    const styl = Styles();
    const isLight = props.theme === "light";
    const accessProfile = `<iframe src="https://codesandbox.io/embed/rootzjs-set-profile-l48tr?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fnodes%2FNode2.js&theme=${props.theme}"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="rootzjs-set-profile"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>`;
    const accessProfileFromLib = `<iframe src="https://codesandbox.io/embed/rootzjs-profile-from-library-within-node-u0bhy?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fnodes%2FNode2.js&theme=${props.theme}"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="rootzjs-profile-from-library-within-node"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>`;
    const accessProfileFromLibInsideComp = `<iframe src="https://codesandbox.io/embed/rootzjs-profile-from-library-x1s09?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNode2.jsx&theme=${props.theme}"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="rootzjs-profile-from-library"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>`;
    return (
        <div className={styl.root}>
            <div id="actions" className={styl.pageTitle}>Profile</div>
            <Typography variant="body1" gutterBottom>Profile is similar to the concept of <b>Bus</b> in Networks. It helps you to store application specific generic data which could be accessible at any point within the application execution.</Typography>
            <Typography variant="body1" gutterBottom>Profile provides simple <code>getters</code> and <code>setters</code> to set and retrieve the data. You can compare it to the concept of <code>context</code> in React, with a little more advantage of having it centrally stored and managed.</Typography>
            <HashLink id="set-profile" className={styl.contentTitle}>Set Anywhere access Everywhere</HashLink>
            <Typography variant="body1" gutterBottom>There are two ways you could set a Profile. One, by simply calling the <SelfLink name="node.setProfile" route="/node" mask="Node" id="node-setprofile" /> within a Node. Secondly by importing the <code>setProfile</code> from library.</Typography>
            <HashLink id="from-node" className={styl.contentSubTitle}>From Node</HashLink>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={profileFromNode}
            />
            <HashLink id="from-library" className={styl.contentSubTitle}>From Library</HashLink>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={profileFromLibrary}
            />
            <Typography variant="body1" gutterBottom>Profiles can be <SelfLink name="accessed through the NodeProps" route="/nodeprops" mask="NodeProps" id="properties-profile" /> property of <code>profile</code> as mentioned in the above examples. Another way of accessing them is through the library method <code>getProfile</code>.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={getProfile}
            />
            <Typography variant="body1" gutterBottom>The message <code>set anywhere access everywhere !!</code> in the below working example is set as profile inside Node2 but is accessed in Node1. <b>This makes it a unique but a very important feature to have in an application</b>. </Typography>
            <NoteBlock content="The profile if set through the node method (node.setProfile) can be accessed throughout the component irrespective to where it has been set. While in case of setProfile method imported from library, contents should be set before the other components tries to fetch it." />
            <HashLink id="set-within-a-node" className={styl.contentSubTitle}>Set within a Node</HashLink>
            <EmbedSandbox iFrame={accessProfile} />
            <HashLink id="set-through-the-library-method" className={styl.contentSubTitle}>Set through the library method</HashLink>
            <EmbedSandbox iFrame={accessProfileFromLib} />
            <NoteBlock content="Avoid setting profiles from within the component body. As nodes are accessed before the components, they would not be available in the NodeProps." type="attention" />
            <HashLink id="avoid-setting-in-component" className={styl.contentSubTitle}>Avoid setting inside component</HashLink>
            <EmbedSandbox iFrame={accessProfileFromLibInsideComp} />
            <NavigationButton
                back="State"
                next=""
            />
        </div>
    );
}

const profileFromNode = `
node.setProfile({
	sessionId: "9694dca333f01433ecb179d32251c946"
});
`;

const getProfile = `
import { getProfile } from '@rootzjs/core';
...

const { sessionId } = getProfile();
`;

const profileFromLibrary = `
import { setProfile } from '@rootzjs/core';
...

setProfile({
	sessionId: "9694dca333f01433ecb179d32251c946"
});
`