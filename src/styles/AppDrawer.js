import { fade, makeStyles } from '../Matlib';

const drawerWidth = 250;
const drawerWidthMobile = "75%";

export const Styles = makeStyles(theme => ({
      root: {
            display: 'flex',
            width: theme.isMobile ? 0 : 325
      },
      toolbar: {
            minHeight: 50
      },
      divider: {
            flexShrink: 0,
            backgroundImage: `linear-gradient(to right, ${theme.background[10]}, ${fade(theme.text[20], 0.12)}, ${theme.background[10]})`
      },
      dividerMain: {
            flexShrink: 0,
            backgroundColor: theme.text[80]
      },
      drawerPaper: {
            width: drawerWidth,
            borderRight: "none",
            color: theme.text[10],
            backgroundColor: theme.background["00"],
      },
      drawerPaperMobile: {
            width: drawerWidthMobile,
            backgroundColor: theme.background[10],
            color: theme.text[10],
            border: "none",
      },
      icons: {
            color: theme.text[30],
            minWidth: 40
      },
      iconSvg: {
            width: 40,
            fontSize: 20,
      },
      iconRemove: {
            fontSize: 11
      },
      listItem: {
            padding: "4px 0 4px 40px",

            "&:hover": {
                  backgroundColor: fade(theme.text[80], 0.5)
            },
      },
      activeSection: {
            borderRight: `solid 4px ${theme.palette.secondary.main}`,
            backgroundColor: fade(theme.palette.secondary.main, 0.1),

            "&:hover": {
                  backgroundColor: fade(theme.text[80], 0.5)
            },
            "& svg": {
                  fill: theme.palette.primary.main
            },
            "& span": {
                  fontWeight: "bold",
                  color: theme.text[10],
            }
      },
      sectionText: {
            margin: 0,
            color: theme.text[10],

            "& span": {
                  fontSize: 15
            }
      },
      sectionTextHeader: {
            paddingLeft: 24,
            margin: "12px 0 0",
            lineHeight: "30px",
            fontWeight: "bold",
            color: theme.text[50],
            textTransform: "uppercase",

            "& span": {
                  fontSize: 13
            }
      },
      listItemLabelButton: {
            cursor: "pointer",
            color: theme.palette.primary.main,
            paddingLeft: 11
      },
      listSubHeader: {
            color: theme.text[50],
            fontSize: theme.typography.body1.fontSize
      },
      addIconButton: {
            textTransform: "Capitalize",
            color: theme.palette.primary.main,
            padding: 7
      },
      addDynamicName: {
            fontSize: 14,
            color: theme.text[10]
      },
      buttonRemove: {
            padding: 5,
            minWidth: "auto"
      },
      logoContainer: {
            flex: 1,
            width: "70%",
            alignItems: "center",
            display: "inline-flex",
      },
      closeContainer: {
            display: "inline-flex",
            alignItems: "center"
      },
      iconContainer: {
            padding: "2px 0 1px 0",
            color: theme.text[10],

            "& svg": {
                  color: theme.text[20]
            }
      },
      title: {
            display: "inline-flex",
            fontSize: 17,
            color: theme.palette.secondary.main,
            marginLeft: 10,
            fontWeight: 400,
            alignItems: "center"
      },
      titleMobileExtraCss: {
            flex: 1
      },
      logo: {
            height: 35,
            marginRight: 5,
            cursor: "pointer",
            [theme.breakpoints.up('sm')]: {
                  display: 'block',
            },

            "& svg": {
                  color: theme.text[50],
            }
      },
      logoTitle: {
            height: 25,
            marginLeft: 4,
            cursor: "pointer",
            [theme.breakpoints.up('sm')]: {
                  display: 'block',
            },

            "& svg": {
                  color: theme.text[50],
            }
      },
      logoSectionDrawer: {
            display: "flex",
            padding: "5px 15px",
            backgroundColor: theme.background[20],
      },
      rotateIcon90deg: {
            transform: "rotate(135deg)"
      },
      drawerFooter: {
            flex: 0,
            display: "flex",
            marginBottom: 25
      },
      drawerBody: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
      },
      drawerMobileContainer: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.background["00"],
      }
}));