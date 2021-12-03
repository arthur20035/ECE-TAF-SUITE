/** @jsxImportSource @emotion/react */
import { useState } from "react";
import axios from "axios";
// Layout
import SendIcon from "@mui/icons-material/Send";
import { Button, TextField } from "@mui/material";
import { useTheme } from "@mui/styles";

const useStyles = (theme) => {
  // See https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/OutlinedInput/OutlinedInput.js
  const borderColor = "rgba(255, 255, 255, 0.23)";
  return {
    form: {
      borderTop: `2px solid ${borderColor}`,
      marginLeft: "0px",
      display: "flex",
    },
    content: {
      flex: "1 1 auto",
      "&.MuiTextField-root": {
        marginRight: "20px",
      },
    },
    send: {
      color: "black",
      height: "55px",
      width: "100px",
    },
  };
};

export default function Form({ addMessage, channel }) {
  const [content, setContent] = useState("");
  const styles = useStyles(useTheme());
  const onSubmit = async () => {
    const { data: message } = await axios.post(
      `http://localhost:3001/channels/${channel.id}/messages`,
      {
        content: content,
        author: "david",
      }
    );
    addMessage(message);
    setContent("");
  };
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <form css={styles.form} onSubmit={onSubmit} noValidate>
      <TextField
        id="outlined-multiline-flexible"
        placeholder="Entrer votre message..."
        multiline
        maxRows={4}
        value={content}
        onChange={handleChange}
        variant="outlined"
        css={styles.content}
      />
      <div>
        <Button
          variant="contained"
          color="primary"
          css={styles.send}
          endIcon={<SendIcon />}
          onClick={onSubmit}
        >
          Send
        </Button>
      </div>
    </form>
  );
}
