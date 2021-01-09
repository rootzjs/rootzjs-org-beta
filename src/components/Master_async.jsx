// IMPORT DEPENDECIES
import React from 'react';
import { CssBaseline } from '../Matlib';
import { AppTheme } from '../theme/App';
import { AppDrawer } from '../nodes/Drawer';
import { AppHeader } from '../nodes/Header';
// import { OopsSomethingWentWrong } from './Errors';
import { Route, BrowserRouter as Router } from 'react-router-dom';


// IMPORT STYLES
import { Styles } from '../styles/Master';


// IMPORT MODULES 
const SplashPage = React.lazy(() => import("../nodes/Splash"));
const NodeSection = React.lazy(() => import("../nodes/Modules/Documentation/Node"));
const StateSection = React.lazy(() => import("../nodes/Modules/Documentation/State"));
const ActionsSection = React.lazy(() => import("../nodes/Modules/Documentation/Actions"));
const ProfileSection = React.lazy(() => import("../nodes/Modules/Documentation/Profile"));
const ContractSection = React.lazy(() => import("../nodes/Modules/Documentation/Contract"));
const WorkbookSection = React.lazy(() => import("../nodes/Modules/Documentation/Workbook"));
const NodePropsSection = React.lazy(() => import("../nodes/Modules/Documentation/NodeProps"));
const ComponentsSection = React.lazy(() => import("../nodes/Modules/Documentation/Components"));
const IntroductionSection = React.lazy(() => import("../nodes/Modules/Documentation/Introduction"));
const InstallationSection = React.lazy(() => import("../nodes/Modules/Documentation/Installation"));
const AppStructureSection = React.lazy(() => import("../nodes/Modules/Documentation/AppStructure"));
const ThinkingRootzSection = React.lazy(() => import("../nodes/Modules/Documentation/ThinkingRootz"));

const ComponentBody = props => {
      const styl = Styles();
      return (
            <Router>
                  <div className={styl.root} >
                        <CssBaseline />
                        <AppHeader
                              noIcons={false}
                              theme={props.theme}
                              config={props.config}
                        />
                        <AppDrawer theme={props.theme} />
                        <Route
                              exact
                              path="/overview"
                              component={() =>
                                    <div id="masterPage" className={styl.playgroundMasterContainer}>
                                          <React.Suspense fallback={<div>Loading...</div>}>
                                                <WorkbookSection theme={props.theme} />
                                          </React.Suspense>
                                    </div>
                              }
                        />
                        <Route
                              exact
                              path="/profile"
                              component={() =>
                                    <div id="masterPage" className={styl.playgroundMasterContainer}>
                                          <React.Suspense fallback={<div>Loading...</div>}>
                                                <ProfileSection theme={props.theme} />
                                          </React.Suspense>
                                    </div>
                              }
                        />
                        <Route
                              exact
                              path="/contract"
                              component={() =>
                                    <div id="masterPage" className={styl.playgroundMasterContainer}>
                                          <React.Suspense fallback={<div>Loading...</div>}>
                                                <ContractSection theme={props.theme} />
                                          </React.Suspense>
                                    </div>
                              }
                        />
                        <Route
                              exact
                              path="/actions"
                              component={() =>
                                    <div id="masterPage" className={styl.playgroundMasterContainer}>
                                          <React.Suspense fallback={<div>Loading...</div>}>
                                                <ActionsSection theme={props.theme} />
                                          </React.Suspense>
                                    </div>}
                        />
                        <Route
                              exact
                              path="/state"
                              component={() =>
                                    <div id="masterPage" className={styl.playgroundMasterContainer}>
                                          <React.Suspense fallback={<div>Loading...</div>}>
                                                <StateSection theme={props.theme} />
                                          </React.Suspense>
                                    </div>}
                        />
                        <Route
                              exact
                              path="/nodeprops"
                              component={() =>
                                    <div id="masterPage" className={styl.playgroundMasterContainer}>
                                          <React.Suspense fallback={<div>Loading...</div>}>
                                                <NodePropsSection theme={props.theme} />
                                          </React.Suspense>
                                    </div>}
                        />
                        <Route
                              exact
                              path="/node"
                              component={() =>
                                    <div id="masterPage" className={styl.playgroundMasterContainer}>
                                          <React.Suspense fallback={<div>Loading...</div>}>
                                                <NodeSection theme={props.theme} />
                                          </React.Suspense>
                                    </div>}
                        />
                        <Route
                              exact
                              path="/app-structure"
                              component={() =>
                                    <div id="masterPage" className={styl.playgroundMasterContainer}>
                                          <React.Suspense fallback={<div>Loading...</div>}>
                                                <AppStructureSection theme={props.theme} />
                                          </React.Suspense>
                                    </div>}
                        />
                        <Route
                              exact
                              path="/thinking-rootz"
                              component={() =>
                                    <div id="masterPage" className={styl.playgroundMasterContainer}>
                                          <React.Suspense fallback={<div>Loading...</div>}>
                                                <ThinkingRootzSection theme={props.theme} />
                                          </React.Suspense>
                                    </div>}
                        />
                        <Route
                              exact
                              path="/components"
                              component={() =>
                                    <div id="masterPage" className={styl.playgroundMasterContainer}>
                                          <React.Suspense fallback={<div>Loading...</div>}>
                                                <ComponentsSection theme={props.theme} />
                                          </React.Suspense>
                                    </div>}
                        />
                        <Route
                              exact
                              path="/introduction"
                              component={() =>
                                    <div id="masterPage" className={styl.playgroundMasterContainer}>
                                          <React.Suspense fallback={<div>Loading...</div>}>
                                                <IntroductionSection theme={props.theme} />
                                          </React.Suspense>
                                    </div>}
                        />
                        <Route
                              exact
                              path="/installation"
                              component={() =>
                                    <div id="masterPage" className={styl.playgroundMasterContainer}>
                                          <React.Suspense fallback={<div>Loading...</div>}>
                                                <InstallationSection theme={props.theme} />
                                          </React.Suspense>
                                    </div>}
                        />
                        <Route
                              exact
                              path="/"
                              component={() =>
                                    <React.Suspense fallback={<div>Loading...</div>}>
                                          <SplashPage theme={props.theme} />
                                    </React.Suspense>
                              }
                        />
                        {/* {
                              !props.didSomethingWentWrong ?
                                    <React.Fragment></React.Fragment>
                                    :
                                    <OopsSomethingWentWrong
                                          details={props.errorDetails}
                                          onReload={() => {
                                                window.location.reload(true)
                                          }}
                                    />
                        } */}
                  </div>
            </Router >
      );
}

export const Component = ({
      props,
      state,
}) => {

      // React.useEffect(() => {
      //       windowErrorHandler(actions.ON_ERROR_OCCURED);
      // }, [actions.ON_ERROR_OCCURED]);

      return (
            <AppTheme theme={state.theme} forComponent="APP">
                  <ComponentBody {...props} {...state} />
            </AppTheme>
      )
};
