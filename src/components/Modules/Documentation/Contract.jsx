import React from 'react';
import { Typography } from '../../../Matlib';
import { CodeBlock } from '../Markdown/CodeBlock';
import { NoteBlock } from '../Markdown/NoteBlock';
import { Link } from '../Markdown/ExternalLink';
import { HashLink } from '../../../nodes/Modules/Markdown/HashLink';
import { SelfLink } from '../../../nodes/Modules/Markdown/SelfLink';
import { NavigationButton } from '../../../nodes/Modules/Markdown/NavigationButton';
import React_Todo from '../../../assets/images/react-todo.svg';
import Rootz_Todo from '../../../assets/images/rootz-todo.svg';
import { Styles } from '../styles/Documentation';
import { EmbedSandbox } from '../Markdown/EmbedCode';

export const Component = ({
    props,
}) => {
    const styl = Styles();
    const isLight = props.theme === "light";
    const addTodoAppExample = `<iframe src="https://codesandbox.io/embed/bold-lamarr-jtj48?fontsize=14&hidenavigation=1&theme=${props.theme}"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="rootzjs-simple-todo-app"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>`;
    const addTodoExampleAsync = `<iframe src="https://codesandbox.io/embed/solitary-glitter-7y83n?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fnodes%2FFetchTodo.js&theme=${props.theme}"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="rootzjs-create-async-contract"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>`;
    const avoidCyclicDependency = `<iframe src="https://codesandbox.io/embed/rootzjs-cyclic-dependecy-solution-2dbjn?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNode1.jsx&theme=${props.theme}"
style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
title="rootzjs-cyclic-dependecy-solution"
allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>`;
    return (
        <div className={styl.root}>
            <div id="actions" className={styl.pageTitle}>Contract</div>
            <Typography variant="body1" gutterBottom>Contracts are actions with different intentions. <code>Actions</code> are intended to update the state in which it is defined. While a contract can <SelfLink name="update the state" route="/state" mask="State" id="updating-state" /> of any Node defined within an application. </Typography>
            <HashLink id="its-still-action-by-nature" className={styl.contentSubTitle}>It's still an action by nature</HashLink>
            <Typography variant="body1" gutterBottom>If contracts and actions have such a small difference then why call it contract and not actions? This is because the term "contract" self explains its purpose of having an agreement. This agreement can be between two or more nodes. Conceptually the node which initiates the update is called as the <b>contractee</b> while the one who receives the update is called the <b>contractor</b>. These terms are basically to understand the connections and differentiate them from one another.</Typography>
            <NoteBlock content="The terms contractee and contractor is just for understanding the relationship between nodes. They are not used as keywords within the app !" />
            <HashLink id="why-use-contract" className={styl.contentTitle}>Why use Contract ?</HashLink>
            <Typography variant="body1" gutterBottom>To update a component from another component you would need <Link name="to lift the state up" url="https://reactjs.org/docs/lifting-state-up.html" />. At one point eventually you might end up declaring the state and most of the functions changing it, at the parent component. And passing them as props to the child components to update when required. With this approach we end up defining some parts of state and its update logic; of the child components in the parent one.</Typography>
            <HashLink id="lifting-state-up" className={styl.contentSubTitle}>Lifting state Up</HashLink>
            <div className={styl.imgWrapper}>
                <img
                    alt="logo"
                    src={React_Todo}
                    className={styl.logoContract}
                />
            </div>
            <Typography variant="body1" gutterBottom>How about keeping the the state and most importantly its update logic at their respective component level. And finding an alternative to update the state of one component from another. Without letting you disturb the location of defining the state and its logic. With this approach the state can now be defined within its component's scope. This keeps the descriptive nature of the component while <b>reducing the burden on a single component handling different states</b> and most importantly <b>avoiding redundant renderings</b>.</Typography>
            <HashLink id="defining-a-contract" className={styl.contentSubTitle}>Having a contract</HashLink>
            <div className={styl.imgWrapper}>
                <img
                    alt="logo"
                    src={Rootz_Todo}
                    className={styl.logoContract}
                />
            </div>
            <HashLink id="accessing-contract" className={styl.contentTitle}>Accessing Contract</HashLink>
            <Typography variant="body1" gutterBottom>As we have tried creating a Contract, we must see how we could access them in a component. <b>You can access a contract within a component by the <SelfLink name="actions property of NodeProps" route="/nodeprops" mask="NodeProps" id="accessing-nodeprops" /></b>. Contract is no different than an action. A Contract can be treated as an action if you mention the NODE_ID of the existing Node within which it is defined. An action gets it handled internally which lets the user not pass the NODE_ID, as it is defined within the scope of the same Node.</Typography>
            <NoteBlock content='An "Action" and a "Contract" is the same when the later has the NODE_ID set to its own Node.' type="info" />
            <div className={styl.codeHeadLabel}>nodes/AddTodo.js</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={accessingContractNode}
            />
            <Typography variant="body1" gutterBottom><b>There is no difference in accessing and using a contract or an action within a component</b>. Both are accessed through NodeProps.actions property.</Typography>
            <div className={styl.codeHeadLabel}>components/AddTodo.js</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={accessingContractComponents}
            />
            <NoteBlock content='Actions and Contract are defined separately, but both are accessible through NodeProps.actions only. Internally they are pretty much the same functionality, contract having an extra parameter to let the state container know whom to update when called.' />

            <HashLink id="create-contract" className={styl.contentTitle}>Create Contract</HashLink>
            <Typography variant="body1" gutterBottom>Creating a contract is pretty similar to <SelfLink name="creating an action" route="/actions" mask="Actions" id="create-actions" />. There are two approaches to create them, <code>node.useContract</code> and <code>node.useContractCallback</code>. The only syntactical difference in creating a Contract over action is, it accepts the <code>id</code> of the target Node. The <SelfLink name="node.useContract" route="/node" mask="Node" id="node-usecontract" /> accepts three parameters <code>NODE_ID</code>, <code>ACTION_ID</code> and <code>new state object</code>, it's a <b>Pure Contract</b>. It is used for updating a Node with a simple state object, not relying on any update logic. While the <SelfLink name="node.useContractCallback" route="/node" mask="Node" id="node-usecontractcallback" /> comes into picture when you have an update logic or any dependency on conditional parameters to generate state.</Typography>
            <Typography variant="body1" gutterBottom>Let's take an example to understand more about them.</Typography>
            <HashLink id="pure-contract" className={styl.contentSubTitle}>Pure Contract</HashLink>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={contractCreate}
            />
            <Typography variant="body1" gutterBottom>The <b>AddTodo</b> represents the <code>NODE_ID</code>, while the <b>ADD_TODO</b> is the <code>ACTIONS_ID</code> followed by the new state object.</Typography>
            <HashLink id="contract-with-update-logic" className={styl.contentSubTitle}>Contract with Update Logic</HashLink>
            <Typography variant="body1" gutterBottom>To understand the one with the update logic, let's take an <Link name="example of a Todo App" url="https://rootzjs.github.io/examples-todo-with-ui/" />. Consider a scenario mentioned in the <SelfLink name="above diagram" route="/contract" mask="Contract" id="defining-a-contract" />, where the TodoList is maintained at the TodoList Node. And the AddTodo Node is making a contract with it for updating the todos whenever a new todo is added. As a part of the contract the <b>TodoList allows the AddTodo to access its current state by passing it as a paramter.</b></Typography>
            <div className={styl.codeHeadLabel}>nodes/TodoList.js</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={todoList}
            />
            <div className={styl.codeHeadLabel}>nodes/AddTodo.js</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={contractCreateCallback}
            />
            <div className={styl.codeHeadLabel}>Try it out...</div>
            <EmbedSandbox iFrame={addTodoAppExample} />
            <NoteBlock content='The "state" argument of contract ADD_TODO, represents the current state of "TodoList". A Contract lets you access the state of the Node you are updating.' />
            <HashLink id="create-async-contract" className={styl.contentTitle}>Create Async Contract</HashLink>
            <Typography variant="body1" gutterBottom>As we have already discussed the advantages of taking the <SelfLink name="async await approach over fetch chaining" route="/actions" mask="Actions" id="actions-with-async-dependencies" /> and would be following the same, for examples coming ahead.</Typography>
            <Typography variant="body1" gutterBottom>Let's consider the same example of adding a todo. But this time we would fetch the todos through an API.</Typography>
            <div className={styl.codeHeadLabel}>nodes/TodoListAsync.js</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={todoListAsync}
            />
            <div className={styl.codeHeadLabel}>nodes/FetchTodo.js</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={contractCreateCallbackAsync}
            />
            <div className={styl.codeHeadLabel}>components/FetchTodo.jsx</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={contractComponentAsync}
            />
            <Typography variant="body1" gutterBottom>The <code>FETCH_TODOS</code> is a contract with an async callback which handles the state update based on the response. When compared to the traditional approach of updating the state of the parent, this provides a <b>call and forget</b> approach for the contractor i.e the <b>FetchTodo</b> Node as well the contractee, <b>TodoList</b>. Let's take an working example of a Todo App fetching and displaying the list of Todos with async logic.</Typography>
            <div className={styl.codeHeadLabel}>Try it out...</div>
            <EmbedSandbox iFrame={addTodoExampleAsync} />
            <HashLink id="cyclic-dependency" className={styl.contentSubTitle}>Cyclic Dependency</HashLink>
            <Typography variant="body1" gutterBottom><b>Cyclic Dependency</b> are scenarios where a contractor is also a contractee. That is one Node updating another, which intern updates the same Node creating a cyclic dependency calls. This is basically a common scenario which can occur in any application.</Typography>
            <Typography variant="body1" gutterBottom>This can be easily solved by <code>React.useRef</code> hook. Let's consider an example.</Typography>
            <div className={styl.codeHeadLabel}>Try it out...</div>
            <EmbedSandbox iFrame={avoidCyclicDependency} />
            <NavigationButton
                back="Actions"
                next="Profile"
            />
        </div>
    );
}

const accessingContractNode = `
node.useContract("TodoList", "ADD_TODO", (state, [TodoName]) => {
    return {
        todos: [
            ...state.todos,
            { name: TodoName, completed: false }
        ]
    }
});
`;

const accessingContractComponents = `
let inputRef = null;

const Component = ({ actions }) => {
    return (
        <div>
            <input type="text" ref={ref => { inputRef = ref }} />
            <button onClick={() => actions.ADD_TODO(inputRef.value)}>
                Add Todo
            </button>
        </div>
    )
}
`;

const contractCreate = ` 
node.useContract("TodoList", "ADD_TODO", { 
    name: "Learn Rootz JS", completed: false 
}); 
`;

const contractCreateCallback = ` 
import { createNode } from "@rootzjs/core";
import { Component } from "../components/AddTodo";

const [node, dispatchNode] = createNode("AddTodo", Component);

//** here the state param represents the current state of todoList
node.useContract("TodoList", "ADD_TODO", (state, [TodoName]) => {
    return {
        todos: [
            ...state.todos,
            { name: TodoName, completed: false }
        ]
    }
});

export const AddTodo = dispatchNode(node);
`;

const todoList = `
import { createNode } from "@rootzjs/core";
import { Component } from "../components/TodoList";

const [node, dispatchNode] = createNode("TodoList", Component);

node.state({
    todos: []
});

export const TodoList = dispatchNode(node);
`;

const todoListAsync = `
import { createNode } from "@rootzjs/core";
import { Component } from "../components/TodoList";

const [node, dispatchNode] = createNode("TodoList", Component);

node.state({
    todos: []
});

export const TodoList = dispatchNode(node);
`;

const contractCreateCallbackAsync = ` 
import { createNode } from "@rootzjs/core";
import { Component } from "../components/AddTodo";

const [node, dispatchNode] = createNode("AddTodo", Component);

//** here the state param represents the current state of todoList
node.useContract("TodoList", "FETCH_TODOS", async (state, args) => {
    try {
        const resp = await fetch("http://mockapi.com/todoapp/todos");
        const data = await resp.json();
        return { 
            todos: [
                ...state.todos,
                ...data.todos
            ]
        }
    } catch {
        return {
            hasErrorFetchingTodos: true
        }
    }
});

export const AddTodo = dispatchNode(node);
`;


const contractComponentAsync = `
let inputRef = null;

const Component = ({ actions }) => {
    return (
        <div>
            <button onClick={actions.FETCH_TODOS}>
                Fetch Todo
            </button>
        </div>
    )
}
`;