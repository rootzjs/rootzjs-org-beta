import { fade } from "@material-ui/core";
import { makeStyles } from "../Matlib";

export const Styles = makeStyles(theme => ({
    root: {
        marginTop: 48,
        width: "100vw",
        overflowY: "auto",
        backgroundColor: theme.background[20],
    },
    titleSection: {
        padding: 20,
        display: "flex",
        minHeight: "55vh",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: fade(theme.palette.primary.main, 0.075),
    },
    title: {
        fontWeight: 300,
        color: theme.text[10],
        fontSize: theme.isMobile ? "14vmin" : "11vmin",
    },
    subTitle: {
        color: theme.text[40],
        fontSize: theme.isMobile ? "5vmin" : "4vmin",
        margin: theme.isMobile ? "2vmin 0 10vmin" : "1vmin 0 6vmin",
    },
    btnContainer: {
    },
    getStartedBtn: {
        margin: 7,
        border: "none",
        outline: "none",
        borderRadius: 4,
        color: theme.background[20],
        width: theme.isMobile ? "55vmin" : "auto",
        fontSize: theme.isMobile ? "5vmin" : "3vmin",
        backgroundColor: theme.palette.secondary.main,
        padding: theme.isMobile ? "3vmin 7vmin" : "1.5vmin 4vmin",

        "&:hover": {
            cursor: "pointer",
            backgroundColor: fade(theme.palette.secondary.main, 0.9)
        },

        "&:clicked": {
            border: "none",
            backgroundColor: fade(theme.palette.secondary.main, 0.75)
        }
    },
    devtoolsLink: {
        margin: 7,
        border: "none",
        outline: "none",
        borderRadius: 4,
        color: theme.palette.secondary.main,
        backgroundColor: theme.background[20],
        width: theme.isMobile ? "55vmin" : "auto",
        fontSize: theme.isMobile ? "5vmin" : "3vmin",
        padding: theme.isMobile ? "3vmin 7vmin" : "1.5vmin 4vmin",
    },
    featuresContainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: fade(theme.background[10], 0.5),
    },
    featureWrapper: {
        display: "flex",
        margin: "7vmin 0",
        flexDirection: "row"
    },
    featureImgWrapper: {
        width: "45vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: theme.isMobile ? "3vmin" : "7vmin",
    },
    featureImg: {
        width: "35vmin",
        height: "30vmin",
    },
    featureTextWrapper: {
        width: "55vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: theme.isMobile ? "0 7vmin 0 2vmin" : "0 16vmin 0 2vmin",
    },
    contentTile: {
        fontSize: "4vmin",
        fontWeight: "bold",
        color: theme.text[20],
    },
    contentText: {
        fontSize: "3vmin",
        color: theme.text[30],
    },
    footerWrapper: {
        width: "100%",
        display: "flex",
        margin: "4vmin 0 8vmin",
        flexDirection: theme.isMobile ? "column" : "row"
    },
    copyrights: {
        width: "45vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: theme.isMobile ? "flex-start" : "center",
    },
    imgWrapper: {
        padding: 15,
        opacity: 0.5,
        borderRadius: 7,
        backgroundColor: fade(theme.text[80], 0.3),

        "& img": {
            height: "7vmin",
            width: "8.9vmin"
        }
    },
    footerLinksWrapper: {
        display: "flex",
        flexDirection: "row",
        width: theme.isMobile ? "100%" : "55vw",
        margin: theme.isMobile ? "0" : "0 16vmin 0 2vmin",
        justifyContent: theme.isMobile ? "space-evenly" : "flex-start",
    },
    footerSection: {
        display: "flex",
        padding: "20px 0 0",
        flexDirection: "column",
        backgroundColor: theme.text[30],
    },
    footerLinkHead: {
        marginBottom: 15,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: theme.background[10],
        fontSize: theme.isMobile ? "3vmin" : "2vmin",
    },
    footerLinks: {
        marginBottom: 7,
        fontSize: theme.isMobile ? "3vmin" : "2vmin",
        color: theme.background[20],

        "& span:hover": {
            cursor: "pointer",
            color: theme.background[20],
        }
    },
    sectionPartition: {
        width: "30vmin"
    },
    linkDisabled: {
        color: theme.background[20],

        "&:hover": {
            color: theme.background[20]
        }
    },
    copyrightText: {
        padding: "15px 0",
        textAlign: "center",
        color: theme.background[10],
        fontSize: theme.isMobile ? "3vmin" : "2vmin",
    },
    copyrightTextMobileWrapper: {
        paddingBottom: "30vmin",
        backgroundColor: theme.text[30],
    }
}))