/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from "react";
import axios from "axios";
// Layout
import { List } from "@mui/material";

import { Link } from "@mui/material";
import { Grid } from "@mui/material";

import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const styles = {
  root: {
    minWidth: "200px",
  },
  channel: {
    padding: ".2rem .5rem",
    whiteSpace: "nowrap",
  },
  Link: {
    paddingLeft: "100px",
    marginTop: "100px",
    cursor: "pointer",
    width: "200px",
    display: "inline",
    heigth: "200px",
    background: "black",
  },
  reductionListe: {
    padding: "50px",
    position: "relative",
    top: "0px",
  },
};

export default function Channels({ onChannel }) {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { data: channels } = await axios.get(
        "http://localhost:3002/channels"
      );
      setChannels(channels);
      if (listRef.current) {
        listRef.current.scroll();
      }
    };
    fetch();
  }, []);

  const listRef = useRef();
  const [scrollDown, setScrollDown] = useState(false);

  const onScrollDown = (scrollDown) => {
    setScrollDown(scrollDown);
  };
  return (
    <Grid
      direction="row"
      justify="center"
      alignItems="center"
      spacing={1}
      css={styles.reductionListe}
    >
      <List
        sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}
        onScrollDown={onScrollDown}
        ref={listRef}
      >
        {channels.map((channel, i) => (
          <ListItem alignItems="flex-start" css={styles.root} key={i}>
            <ListItemAvatar>
              <Avatar alt={channel.name} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={channel.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    <Link
                      href={`http://localhost:3002/channels/${channel.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onChannel(channel);
                      }}
                    >
                      {"\n" + channel.name + "\n"}
                    </Link>
                  </Typography>
                </React.Fragment>
              }
            />
            <Divider variant="inset" component="li" />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}
