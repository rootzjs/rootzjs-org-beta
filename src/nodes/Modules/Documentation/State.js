
import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Documentation/State';

const [node, dispatchNode] = createNode("StateSection", Component);

export default withRouter(dispatchNode(node));