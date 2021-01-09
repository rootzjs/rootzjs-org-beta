import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Documentation/Installation';

const [node, dispatchNode] = createNode("InstallationSection", Component);

export default withRouter(dispatchNode(node));