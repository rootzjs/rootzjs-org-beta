import { createNode } from '@rootzjs/core';
import { Component } from '../../components/Drawer/MobileSections';

const [node, dispatchNode] = createNode("MobileSection", Component);

// on drawer close click
node.useContract(
        "AppDrawer",
        "ON_CLOSE_CLICK",
        { isMenuOpen: false, }
);

export default dispatchNode(node);