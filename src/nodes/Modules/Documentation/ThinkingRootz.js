import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Documentation/ThinkingRootz';

const [node, dispatchNode] = createNode("ThinkingRootzSection", Component);

export default withRouter(dispatchNode(node));