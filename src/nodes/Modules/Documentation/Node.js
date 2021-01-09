
import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Documentation/Node';

const [node, dispatchNode] = createNode("NodeSection", Component);

export default withRouter(dispatchNode(node));