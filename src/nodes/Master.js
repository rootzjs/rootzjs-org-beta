import { createNode } from '@rootzjs/core';
import { Component } from '../components/Master';
import { getLangSupport } from '../lang';

const [node, dispatchNode] = createNode("AppMaster", Component);
const hours = new Date().getHours();
const isDay = hours >= 6 && hours < 18;

node.state({
        errorDetails: "",
        isAuthenticated: false,
        didSomethingWentWrong: false,
        theme: isDay ? "light" : "dark",
});

// on Error
node.useAction(
        "ON_ERROR_OCCURED",
        (state, [err, stack]) => {
                return {
                        didSomethingWentWrong: true,
                        errorDetails: err || "error"
                };
        }
);

node.setProfile({ ...getLangSupport("english") });

export const Master = dispatchNode(node);
