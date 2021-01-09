import { createNode } from '@rootzjs/core';
import { Component } from '../../../components/Modules/Home';

const [node, dispatchNode] = createNode("Home", Component);

export const HomeSection = dispatchNode(node);