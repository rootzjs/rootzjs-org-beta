import { createNode } from '@rootzjs/core';
import { Component } from '../../../components/Modules/Documentation/Workbook';

const [node, dispatchNode] = createNode("WorkbookSection", Component);

export default dispatchNode(node);