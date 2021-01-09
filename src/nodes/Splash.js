import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../components/Splash';

const [node, dispatchNode] = createNode("SplashPage", Component);

node.state({
    allContentLoaded: false
});

node.useAction("CONTENT_LOAD_COMPLETE", {
    allContentLoaded: true
});

node.useContract("AppDrawer", "KEEP_DRAWER_CLOSED", { isMenuOpen: false })

export default withRouter(dispatchNode(node));
