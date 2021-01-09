import { createNode } from '@rootzjs/core';
import { withRouter } from 'react-router-dom';
import { Component } from '../../../components/Modules/Documentation/Introduction';

const [node, dispatchNode] = createNode("IntroductionSection", Component);

export default withRouter(dispatchNode(node));