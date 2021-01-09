import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../components/Header';

// create Node for App Header
const [node, dispatchNode] = createNode("AppHeader", Component);

// on theme toggle update the #AppMaster
node.useContract(
        "AppMaster",
        "ON_THEME_CHANGE",
        (state, [evt]) => ({
                theme: evt.target.checked ? "dark" : "light"
        })
);

export const AppHeader = withRouter(dispatchNode(node));