
import { createNode } from '@rootzjs/core';
import { Component } from '../../../components/Modules/Documentation/Contract';

const [node, dispatchNode] = createNode("ContractSection", Component);

export default dispatchNode(node);