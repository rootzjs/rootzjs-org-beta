
import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Documentation/AppStructure';

const [node, dispatchNode] = createNode("AppStructureSection", Component);

export default withRouter(dispatchNode(node));