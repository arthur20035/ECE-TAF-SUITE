/** @jsxImportSource @emotion/react */
// Layout
import { useTheme } from "@mui/styles";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import CreerCanalIcon from "@mui/icons-material/CreerCanal";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

import PasswordIcon from "@mui/icons-material/Password";
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
  const styles = useStyles(useTheme());
  return (
    <div css={styles.root}>
      <div>
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            placeholder="Entrer votre nom d'utilisateur..."
            //helperText="Entrer un bon username"
          />
          <Divider sx={{ height: 30, m: 0.5 }} />
          <div>
            <TextField
              label="Mot de passe"
              type="password"
              id="password"
              size="small"
              name="password"
              variant="filled"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
                /* endAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ), */
              }}
              placeholder="Entrer votre mot de passe..."

              //helperText="Entrer un bon mot de passe"
            />
          </div>
          <Divider sx={{ height: 30, m: 0.5 }} />

          <div>
            <center>
              <Button
                variant="contained"
                size="large"
                color="success"
                centerRipple="true"
                onClick={(e) => {
                  e.stopPropagation();
                  onUser({ username: "david" });
                }}
                /* onClick={() => window.open("/Channels")} */
                endIcon={<CreerCanalIcon />}
              >
                CreerCanal
              </Button>
            </center>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default CreerCanal;
