import React from 'react';
import { Typography } from '../../../Matlib';
import { CodeBlock } from '../Markdown/CodeBlock';
import { NoteBlock } from '../Markdown/NoteBlock';
import { Link } from '../Markdown/ExternalLink';
import { HashLink } from '../../../nodes/Modules/Markdown/HashLink';
import { SelfLink } from '../../../nodes/Modules/Markdown/SelfLink';
import { NavigationButton } from '../../../nodes/Modules/Markdown/NavigationButton';

import { Styles } from '../styles/Documentation';
import { EmbedSandbox } from '../Markdown/EmbedCode';

export const Component = ({
    props
}) => {
    const styl = Styles();
    const isLight = props.theme === "light";
    const asynActionsCodesandbox = `<iframe src="https://codesandbox.io/embed/rootzjs-async-actions-60hqe?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fnodes%2FTodoAsync.js&theme=${props.theme}"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="rootzjs-async-actions"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>`;
    return (
        <div className={styl.root}>
            <div id="actions" className={styl.pageTitle}>Actions</div>
            <Typography variant="body1" gutterBottom>Actions describe the events occuring in an application. These events serves an intention to interact with the app and request changes. This means change in the existing state of the application. Rootz provides inbuilt <SelfLink name="boilerplate methods" route="/node" mask="Node" id="properties-of-node" /> to create actions, which otherwise had to be created by the user.</Typography>
            <Typography variant="body1" gutterBottom>Actions should always return serializable plain objects. These objects are then merged to the existing state, forming a new updated state object. In simple ways actions are the modes of interaction with the application.</Typography>
            <Typography variant="body1" gutterBottom>Let's take a look at what actions would look like <b>internally</b>.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={actionFunction}
            />
            <Typography variant="body1" gutterBottom>And this is how you would create one.</Typography>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={actionFunctionCreate}
            />
            <Typography variant="body1" gutterBottom>In Rootz you wouldn't need to create the function definition by yourself, rather it provides inbuilt methods to create them. These methods not only help you create functions but also bind them to the <SelfLink name="NodeProps" route="/nodeprops" id="accessing-nodeprops" />.</Typography>
            <HashLink id="actions-as-dependencies-parameter-for-react-effects" className={styl.contentSubTitle}>actions as dependency parameter for React Effects</HashLink>
            <Typography variant="body1" gutterBottom>Actions are static by nature. That is, they do not provide a new functional reference (pointer in memory) each time the component renders. This provides boost in performance as they are not re-created on every render. <code>actions</code> within a component can be used as dependency for <Link name="React Effects" url="https://reactjs.org/docs/hooks-effect.html" />. </Typography>
            <NoteBlock content="Non-static functions cannot be a part of the Effect hooks' dependency list. This would result in infinite loop re-rendering the component over and over agin. Each time the component renders, a new reference of these functions would be created making the effects to identify them as a dependency changed. This results in re-rendering of the components in a continuous cycle. Checkout the react documentation for using effect hooks." type="info">
                <ul>
                    <li><Link name="React Documentation on useEffect" url="https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect" /></li>
                    <li><Link name="how to read an often changing value from useCallback" url="https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback" /></li>
                </ul>
            </NoteBlock>
            <HashLink id="create-actions" className={styl.contentTitle}>Create Actions</HashLink>
            <Typography variant="body1" gutterBottom>Some frameworks like <Link name="Redux" route="https://redux.js.org" /> allow users to explicitly define actions and reducers. Such solutions still generate redundant code and too much boilerplate to follow even for a simple state update. Under the hood this is handled by keeping things simple, by <SelfLink name="Actions" route="/Node" id="node-useaction" />. Although <b>Actions</b> are created implicitly, you get complete control over its logical definition. It not only provides standalone functionality, but also binds them to <SelfLink name="NodeProps" route="/nodeprops" id="accessing-nodeprops" /> without explicitly defining its mappings.</Typography>
            <Typography variant="body1" gutterBottom>There are two approaches to create them, <code>node.useAction</code> and <code>node.useActionCallback</code>. They both serve different purposes, incase if you want to update the state without any prior conditions you could use <SelfLink name="node.useActions" route="/node" mask="Node" id="node-useaction" />. This are <b>Pure Actions</b>. In case if condition arises where you need to generate the state based on inputs, you could use <SelfLink name="node.useActionsCallback" route="/node" mask="Node" id="node-useactioncallback" />. This allows you to access the <code>state</code> variables and conditional parameters as arguments. These actions are called <b>Actions with update logic</b>.</Typography>
            <NoteBlock content={`useActionCallback allows you to describe the update logic. You can access the current state of the Node as well as pass arguments for computing.`} />
            <HashLink id="pure-actions" className={styl.contentSubTitle}>Pure Actions</HashLink>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={actionCreate}
            />
            <Typography variant="body1" gutterBottom>One with actions logic would appear like this.</Typography>
            <HashLink id="actions-with-update-logic" className={styl.contentSubTitle}>Actions with update logic</HashLink>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={actionFunctionCreate}
            />
            <Typography variant="body1" gutterBottom>In the above example <code>state</code> is predefined as the first argument variable. While the parameters sent would result as an constructed array in the second argument, <code>TodoName</code>. This provides </Typography>
            <NoteBlock content="state, represents the current state of the Node. For example if the state of the Node is updated earlier, you would get the updated state as the argument." />
            <HashLink id="create-async-actions" className={styl.contentTitle}>Create Async Actions</HashLink>
            <Typography variant="body1" gutterBottom>In scenarios where <SelfLink name="async state update" route="/go-async" mask="Go Async" /> is required, the procedure in creating an action would remain the same. The only change required would be during its call. In such scenario the action would be called inside the promise.</Typography>
            <Typography variant="body1" gutterBottom>Let's take an example of async state update.</Typography>
            <div className={styl.codeHeadLabel}>components/AddTodoAsync.js</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={asyncAddTodoComponent}
            />
            <Typography variant="body1" gutterBottom>Here the format of creating and calling an action remains the same. Only for async state update, actions are called within a promise. </Typography>
            <div className={styl.codeHeadLabel}>nodes/AddTodoAsync.jsx</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={asyncAddTodoNode}
            />
            <Typography variant="body1" gutterBottom>In this case the <code>Actions</code> are kept pure, letting the component decide which action to be called on success / failure. There is another way you could approach the same problem by adding an <code>async</code> call within an action itself. <b>Actions with Async dependency</b>.</Typography>
            <NoteBlock content='node.useActionCallback supports asynchronous callbacks. This helps implementing "call and forget" nature for components.' />
            <HashLink id="actions-with-async-dependencies" className={styl.contentTitle}>Actions with Async Dependency</HashLink>
            <Typography variant="body1" gutterBottom>This freedom of updating logic within an action, lets us write more <b>expressive async functions</b>. Where adding the API requests within an action <b>inverts the control from component to node</b>. This results in <b>call and forget</b> nature for a component. In this case the component wouldn't have to worry about it state update, the action would take care of it.</Typography>
            <NoteBlock content="Either of this approach will provide same result. We still recommend you to use the later one for moving its dependency from the component. As all of its dependencies are handled by the node." type="info" />
            <Typography variant="body1" gutterBottom>Let's take the same example to understand this.</Typography>
            <div className={styl.codeHeadLabel}>components/TodoAsync.js</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={asyncAddTodoComponent2}
            />
            <div className={styl.codeHeadLabel}>nodes/TodoAsync.jsx</div>
            <CodeBlock
                lang="javascript"
                isLight={isLight}
                codeString={asyncAddTodoNode2}
            />
            <div className={styl.codeHeadLabel}>Try it out...</div>
            <EmbedSandbox iFrame={asynActionsCodesandbox} />
            <Typography variant="body1" gutterBottom>It not only shifts the dependency on Node but also handle success / failure within the same action. This helps you to add specific behavior when you update the state.</Typography>
            <Typography variant="body1" gutterBottom>This is much less typing! You can still use a <code>.then()</code> <b>chaining</b> over <code>async await</code>. The later makes the code more readable, maintainable and easier to understand and test. It's purely a personal choice.</Typography>

            <NavigationButton
                back="State"
                next="Contract"
            />
        </div>
    );
}

const actionFunction = `
const ADD_TODO = (TodoName) => {
    return {
        todos: [
            ...state.todos,
            { name: TodoName, completed: false }
        ]
    };  
}
`;
;

const actionFunctionCreate = `
node.useAction("ADD_TODO", (state, [TodoName]) => {
    return {
        todos: [
            ...state.todos,
            { name: TodoName, completed: false }
        ]
    }
});
`;

const actionCreate = ` 
node.useAction("ADD_TODO", { 
    name: "Learn Rootz JS", completed: false 
}); 
`;

const asyncAddTodoComponent = `
export const Component = (nodeProps) => {
    const { state, actions } = nodeProps;

    React.useEffect(() => {
        fetch("http://mockapi.com/todoapp/todos.json")
            .then(resp => resp.json())
            .then(data => {
                actions.ADD_TODO(data.todos);
            })
            .catch(err => {
                actions.ERROR_FETCHING_TODOS(err);
            });
    }, [actions]); 

    if(state.hasErrorFetchingTodos) {
        return <p>error fetching Todos...</p>
    } else {
        return { 
            /* CODE_FOR_DISPLAYING_TODOS */ 
        }
    }
}
`;

const asyncAddTodoNode = `
node.state({ 
    todos: [],
    hasErrorFetchingTodos: false
});

// existingTodos would be fetched through API
node.useAction("ADD_TODO", (state, [existingTodos]) => {
    return {
        todos: [
            ...state.todos,
            ...existingTodos
        ]
    }
});

// error fetching todos from API
node.useAction("ERROR_FETCHING_TODOS", { 
    hasErrorFetchingTodos: true 
});
`;

const asyncAddTodoComponent2 = `
export const Component = (nodeProps) => {
    const { state, actions } = nodeProps;

    React.useEffect(() => {
        actions.FETCH_TODOS();
    }, [actions]); // actions are static and can be added as the dependency.

    if(state.hasErrorFetchingTodos) {
        return <p>error fetching Todos...</p>
    } else {
        return { 
            /* CODE_FOR_DISPLAYING_TODOS */ 
        }
    }
}
`;

const asyncAddTodoNode2 = `
node.state({ 
    todos: [],
    hasErrorFetchingTodos: false
});

// here the action decides what to be done on success / failure
node.useAction("FETCH_TODOS", async (state, args) => {
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
`;