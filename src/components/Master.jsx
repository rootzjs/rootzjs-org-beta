// IMPORT DEPENDECIES
import React from 'react';
import { CssBaseline } from '../Matlib';
import { AppTheme } from '../theme/App';
import { AppDrawer } from '../nodes/Drawer';
import { AppHeader } from '../nodes/Header';
// import { OopsSomethingWentWrong } from './Errors';
import { Route, BrowserRouter as Router, Switch, HashRouter } from 'react-router-dom';

// IMPORT MODULES 
import SplashPage from "../nodes/Splash";
import NodeSection from "../nodes/Modules/Documentation/Node";
import StateSection from "../nodes/Modules/Documentation/State";
import ActionsSection from "../nodes/Modules/Documentation/Actions";
import ProfileSection from "../nodes/Modules/Documentation/Profile";
import ContractSection from "../nodes/Modules/Documentation/Contract";
import WorkbookSection from "../nodes/Modules/Documentation/Workbook";
import NodePropsSection from "../nodes/Modules/Documentation/NodeProps";
import ComponentsSection from "../nodes/Modules/Documentation/Components";
import IntroductionSection from "../nodes/Modules/Documentation/Introduction";
import InstallationSection from "../nodes/Modules/Documentation/Installation";
import AppStructureSection from "../nodes/Modules/Documentation/AppStructure";
import ThinkingRootzSection from "../nodes/Modules/Documentation/ThinkingRootz";

// IMPORT STYLES
import { Styles } from '../styles/Master';

const ComponentBody = props => {
      const styl = Styles();
      return (
            <HashRouter>
                  <div className={styl.root} >
                        <CssBaseline />
                        <AppHeader
                              noIcons={false}
                              theme={props.theme}
                              config={props.config}
                        />
                        <AppDrawer theme={props.theme} />
                        <Switch>
                              <Route
                                    exact
                                    path="/overview"
                                    component={() =>
                                          <div id="masterPage" className={styl.playgroundMasterContainer}>
                                                <WorkbookSection theme={props.theme} />
                                          </div>
                                    }
                              />
                              <Route
                                    exact
                                    path="/profile"
                                    component={() =>
                                          <div id="masterPage" className={styl.playgroundMasterContainer}>
                                                <ProfileSection theme={props.theme} />
                                          </div>
                                    }
                              />
                              <Route
                                    exact
                                    path="/contract"
                                    component={() =>
                                          <div id="masterPage" className={styl.playgroundMasterContainer}>
                                                <ContractSection theme={props.theme} />
                                          </div>
                                    }
                              />
                              <Route
                                    exact
                                    path="/actions"
                                    component={() =>
                                          <div id="masterPage" className={styl.playgroundMasterContainer}>
                                                <ActionsSection theme={props.theme} />
                                          </div>}
                              />
                              <Route
                                    exact
                                    path="/state"
                                    component={() =>
                                          <div id="masterPage" className={styl.playgroundMasterContainer}>
                                                <StateSection theme={props.theme} />
                                          </div>}
                              />
                              <Route
                                    exact
                                    path="/nodeprops"
                                    component={() =>
                                          <div id="masterPage" className={styl.playgroundMasterContainer}>
                                                <NodePropsSection theme={props.theme} />
                                          </div>}
                              />
                              <Route
                                    exact
                                    path="/node"
                                    component={() =>
                                          <div id="masterPage" className={styl.playgroundMasterContainer}>
                                                <NodeSection theme={props.theme} />
                                          </div>}
                              />
                              <Route
                                    exact
                                    path="/app-structure"
                                    component={() =>
                                          <div id="masterPage" className={styl.playgroundMasterContainer}>
                                                <AppStructureSection theme={props.theme} />
                                          </div>}
                              />
                              <Route
                                    exact
                                    path="/thinking-rootz"
                                    component={() =>
                                          <div id="masterPage" className={styl.playgroundMasterContainer}>
                                                <ThinkingRootzSection theme={props.theme} />
                                          </div>}
                              />
                              <Route
                                    exact
                                    path="/components"
                                    component={() =>
                                          <div id="masterPage" className={styl.playgroundMasterContainer}>
                                                <ComponentsSection theme={props.theme} />
                                          </div>}
                              />
                              <Route
                                    exact
                                    path="/introduction"
                                    component={() =>
                                          <div id="masterPage" className={styl.playgroundMasterContainer}>
                                                <IntroductionSection theme={props.theme} />
                                          </div>}
                              />
                              <Route
                                    exact
                                    path="/installation"
                                    component={() =>
                                          <div id="masterPage" className={styl.playgroundMasterContainer}>
                                                <InstallationSection theme={props.theme} />
                                          </div>}
                              />
                              <Route
                                    exact
                                    path="/"
                                    component={() =>
                                          <SplashPage theme={props.theme} />
                                    }
                              />
                              <Route component={() => 
                                    <IntroductionSection theme={props.theme} />} 
                              />
                        </Switch>
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
            </HashRouter>
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
