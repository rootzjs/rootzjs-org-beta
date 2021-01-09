import React from 'react';
import {
      List,
      ListItem,
      ListItemText,
      ListSubheader,
} from '../../Matlib';

// styles 
import { Styles } from "../../styles/AppDrawer";

export const Component = ({
      props,
      actions
}) => {
      const styl = Styles();
      
      return (
            <React.Fragment>
                  <div className={styl.drawerBody}>

                        {
                              props.sections.map((section, index) =>
                                    <List
                                          key={section.id + index}
                                          subheader={
                                                <ListSubheader
                                                      component="div"
                                                      className={styl.sectionTextHeader}
                                                >
                                                      {section.id}
                                                </ListSubheader>
                                          }
                                    >
                                          {
                                                section.subSections.map((text, index) => {
                                                      const isComingSoon = props.comminSoon.includes(text);
                                                      return (
                                                            <ListItem
                                                                  button
                                                                  key={text + index}
                                                                  disabled={isComingSoon}
                                                                  onClick={() => actions.ON_SECTION_CLICK(text, props.history)}
                                                                  className={`${styl.listItem} ${props.activeSection.toLowerCase() === text.toLowerCase() && styl.activeSection}`}
                                                            >
                                                                  <ListItemText
                                                                        className={styl.sectionText}
                                                                        primary={`${text} ${isComingSoon ? "(premiere)" : ""}`}
                                                                  />
                                                            </ListItem>
                                                      )
                                                })
                                          }
                                    </List>
                              )
                        }
                  </div>
                  <div className={styl.drawerFooter}>

                  </div>
            </React.Fragment>
      )
}