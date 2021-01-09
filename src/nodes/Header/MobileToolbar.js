import { createNode } from '@rootzjs/core';
import { Component } from '../../components/Header/MobileToolbar';

// create Node for Mobile Toolbar
const [node, dispatchNode] = createNode("MobileToolbar", Component);

// on theme toggle update the #AppDrawer
node.useContract(
        "AppDrawer",
        "ON_APP_DRAWER_MENU_OPEN",
        { isMenuOpen: true, }
);

export default dispatchNode(node);