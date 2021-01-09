
import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Documentation/NodeProps';

const [node, dispatchNode] = createNode("NodePropsSection", Component);

export default withRouter(dispatchNode(node));