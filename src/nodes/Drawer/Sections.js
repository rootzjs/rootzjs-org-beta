import { createNode } from '@rootzjs/core';
import { Component } from '../../components/Drawer/Sections';

const [node, dispatchNode] = createNode("DrawerSections", Component);

// update #AppDrawer on section change
node.useContract(
        "AppDrawer",
        "ON_SECTION_CLICK",
        (state, [item, history]) => {
                history.push(item.toLowerCase().replace(/ /g, "-"));
                return {
                        isMenuOpen: false,
                        activeSection: item
                };
        }
);

export default dispatchNode(node);