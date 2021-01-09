import { makeStyles } from "../Matlib";

export const Styles = makeStyles(theme => ({
      root: {
            width: "100vw",
            display: "flex",
            height: "100vh",
            backgroundColor: theme.background[10],
      },
      playgroundMasterContainer: {
            marginTop: 48,
            width: "100%",
            display: "flex",
            overflowY: "auto",
            justifyContent: "center",
            height: "calc(100% - 50px)",
            backgroundColor: theme.background[10],
            marginBottom: theme.isMobile ? 50 : 0,
            padding: theme.isMobile ? "0 15px 48px 15px" : "",

            "& h1": {
                  fontSize: 15,
                  fontWeight: "normal",
                  color: theme.text[50],
            }
      },
      oopsSomethingWentWrongContianer: {

      },
}))