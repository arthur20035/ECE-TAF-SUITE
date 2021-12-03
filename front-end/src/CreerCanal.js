/** @jsxImportSource @emotion/react */
// Layout
import { useTheme } from "@mui/styles";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import AddBoxIcon from "@mui/icons-material/AddBox";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import AccountCircle from "@mui/icons-material/AccountCircle";

function CreerCanal({ onUser }) {
  const useStyles = (theme) => ({
    root: {
      flex: "1 1 auto",
      background: "primary",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      "& > div": {
        margin: 1,
        marginLeft: "auto",
        marginRight: "auto",
      },
      "& fieldset": {
        border: "none",
        "& label": {
          marginBottom: 0.5,
          display: "block",
        },
      },
    },
  });

  const [nom, setNom] = useState("");
  const history = useHistory();

  const CreerCanal = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/channels", {
      nom: nom,
    });
    history.push("/");
  };

  const styles = useStyles(useTheme());
  return (
    <div css={styles.root}>
      <div>
        <form onSubmit={CreerCanal}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "56ch" },
              width: 500,
              height: 300,
              backgroundColor: "black",
              opacity: [0.5, 0.5, 0.5],
              borderRadius: 5,
              padding: 7,
              "&:hover": {
                backgroundColor: "black",
                opacity: [0.5, 0.5, 0.5],
              },
            }}
            noValidate
            autoComplete="off"
          >
            <center>
              <Avatar sx={{ width: 56, height: 56, marginBottom: 3 }}>
                CreerCanal
              </Avatar>
            </center>

            <TextField
              id="nom"
              name="nom"
              label="Nom du canal"
              variant="filled"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              placeholder="Entrer le nom de votre canal..."
              //helperText="Entrer un bon username"
            />
            <Divider sx={{ height: 30, m: 0.5 }} />

            <div>
              <center>
                <Button
                  variant="contained"
                  size="large"
                  color="success"
                  centerRipple="true"
                  /* onClick={() => window.open("/Channels")} */
                  endIcon={<AddBoxIcon />}
                >
                  CreerCanal
                </Button>
              </center>
            </div>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default CreerCanal;
