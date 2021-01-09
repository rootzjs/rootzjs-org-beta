import { createNode } from '@rootzjs/core';
import { Component } from '../../../components/Modules/Markdown/SelfLink';

const [node, dispatchNode] = createNode("SelfLink", Component);

// action to update #AppDrawer for current selected section
node.useContract(
        "AppDrawer",
        "NAVIGATE_TO",
        (state, [{ name, route, mask = false }]) => {
                return { activeSection: mask || name }
        }
)

export const SelfLink = dispatchNode(node);