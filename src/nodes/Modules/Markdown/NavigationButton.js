import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Markdown/NavigationButton';

const [node, dispatchNode] = createNode("NavigationButton", Component);

// action to update #AppDrawer for current selected section
node.useContract(
        "AppDrawer",
        "GOTO_NEXT",
        (state, [{ next, history }]) => {
                history.push("/" + next.toLowerCase().replace(/ /g, "-"));
                return { activeSection: next }
        }
)

node.useContract(
        "AppDrawer",
        "GOTO_PREVIOUS",
        (state, [{ back, history }]) => {
                history.push("/" + back.toLowerCase().replace(/ /g, "-"));
                return { activeSection: back }
        }
)

export const NavigationButton = withRouter(dispatchNode(node));