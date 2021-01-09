import { createNode } from '@rootzjs/core';
import { Component } from '../../components/Header/DesktopToolbar';

// create Node for App Header
const [node, dispatchNode] = createNode("DesktopToolbar", Component);

node.state({
    allContentLoaded: false
});

node.useAction("CONTENT_LOAD_COMPLETE", {
    allContentLoaded: true
});

// dispatch Node
export default dispatchNode(node);