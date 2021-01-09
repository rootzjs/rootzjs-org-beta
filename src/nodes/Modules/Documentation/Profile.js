
import { createNode } from '@rootzjs/core';
import { Component } from '../../../components/Modules/Documentation/Profile';

const [node, dispatchNode] = createNode("ProfileSection", Component);

export default dispatchNode(node);