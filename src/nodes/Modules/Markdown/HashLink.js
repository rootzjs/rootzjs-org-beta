import { createNode } from '@rootzjs/core';
import { Component } from '../../../components/Modules/Markdown/HashLink';

const [node, dispatchNode] = createNode("HashLink", Component);

export const HashLink = dispatchNode(node);