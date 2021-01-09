import React from 'react';
import {
      AppBar,
      Toolbar,
      useTheme,
      TabContext,
} from '../../Matlib';
// Import Components
import { ThemeToggler } from '../../nodes/Header/ThemeToggler';

import { Styles } from "../../styles/AppHeader";

const MobileToolbar = React.lazy(() => import('../../nodes/Header/MobileToolbar'));
const DesktopToolbar = React.lazy(() => import('../../nodes/Header/DesktopToolbar'));

export const Component = ({
      props,
      actions
}) => {
      const styl = Styles();
      const appTheme = useTheme();
      const isLight = props.theme === "light";
      const isSplashPage = props.history.location.pathname === "/";

      return (
            <div className={styl.root}>
                  <TabContext value={props.history.location.pathname}>
                        <AppBar position="fixed" color="primary" className={styl.appBar}>
                              <Toolbar variant="dense">
                                    {
                                          appTheme.isMobile && !isSplashPage ?
                                                <React.Suspense fallback={<div>Loading...</div>}>
                                                      <MobileToolbar />
                                                </React.Suspense>
                                                :
                                                <React.Suspense fallback={<div>Loading...</div>}>
                                                      <DesktopToolbar isLight={isLight} history={props.history} />
                                                </React.Suspense>
                                    }
                                    <ThemeToggler
                                          isLight={isLight}
                                          onToggle={actions.ON_THEME_CHANGE}
                                    />
                              </Toolbar>
                        </AppBar>
                  </TabContext>
            </div>
      );
};