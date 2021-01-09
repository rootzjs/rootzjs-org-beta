import { createNode } from '@rootzjs/core';
import { Component } from '../../components/Header/ThemeToggler';

// create Node for Theme Toggler
const [node, dispatchNode] = createNode("ThemeToggler", Component);

export const ThemeToggler = dispatchNode(node);