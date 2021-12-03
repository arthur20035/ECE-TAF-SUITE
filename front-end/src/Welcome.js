/** @jsxImportSource @emotion/react */
// Layout
import { useTheme } from "@mui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Channel from "./Channel";
import Login from "./Login";
import Main from "./Main";

import { Grid, Typography } from "@mui/material";
import { ReactComponent as ChannelIcon } from "./icons/channel.svg";
import { ReactComponent as FriendsIcon } from "./icons/friends.svg";
import { ReactComponent as SettingsIcon } from "./icons/settings.svg";

const useStyles = (theme) => ({
  root: {
    height: "100%",
    flex: "1 1 auto",
    display: "flex",
    background: "rgba(0,0,0,.2)",
  },
  card: {
    textAlign: "center",
    border: "2px solid white",
    borderRadius: "7px",
    background: "#400CCC",
    width: "220px",
    height: "220px",
    cursor: "pointer",

    //cursor: "pointer",
    padding: "2ch",
  },
  titre: {
    cursor: "pointer",
    fontWeight: 700,
  },
  a: {
    color: "white",
    fontWeight: 700,
    size: "28px",
  },
  icon: {
    width: "70%",
    padding: "2ch",

    fill: "#fff",
  },
});

export default function Welcome() {
  const styles = useStyles(useTheme());
  return (
    <div css={styles.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item xs>
          <div css={styles.card}>
            <ChannelIcon css={styles.icon} />
            <Typography color="textPrimary" css={styles.titre}>
              Creer un canal
            </Typography>
          </div>
        </Grid>
        <Grid item xs>
          <div css={styles.card}>
            <FriendsIcon css={styles.icon} />
            <Typography color="textPrimary" css={styles.titre}>
              Ajouter des amis
            </Typography>
          </div>
        </Grid>
        <Grid item xs>
          <div css={styles.card}>
            <SettingsIcon css={styles.icon} />
            <Typography color="textPrimary" css={styles.titre}>
              Paramètres
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Router>
        <Switch>
          <Route exact path={"/parametres"}>
            <Main />
          </Route>
          <Route exact path={"/ajouterUtilisateur"}>
            <Login />
          </Route>
          <Route exact path={"/creerCanal"} css={styles.a}>
            <Channel />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
