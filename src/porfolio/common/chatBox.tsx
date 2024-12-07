import { TextField, makeStyles } from "@material-ui/core";
import { Modal } from "antd";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "Inter-Bold",
    // color: "#505482",
    color: "#333333",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
}));

function ChatBox(props: any) {
  const classes = useStyles();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic to Formspree
    fetch("https://formspree.io/f/xzzbbdlj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset the form
        } else {
          alert("Failed to send the message.");
        }
      })
      .catch((error) => {
        console.error("Error sending the message:", error);
        alert("Error sending the message.");
      });
  };
  return (
    <>
      <Modal
        open={props.openDialog}
        footer={null}
        title={<div className={classes.heading}>Let's Connect</div>}
        onCancel={() => props.setOpenDialog(false)}
      >
        <p
          style={{
            paddingBottom: "13px",
            // color: "#565979",
            color: "#333333",
            fontFamily: "InriaSerif-Bold",
          }}
        >
          Discussions, Collaboration or even a Coffee :)
        </p>
        <div style={{ paddingBottom: "10px" }}>
          <TextField
            required
            label="Full Name"
            variant="outlined"
            style={{ width: "100%", color: "#565979" }}
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <TextField
            required
            label="Email"
            variant="outlined"
            style={{ width: "100%" }}
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <TextField
            required
            label="Message"
            variant="outlined"
            multiline
            maxRows={4}
            rows={4}
            style={{ width: "100%" }}
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
          />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* @ts-ignore */}
          <button className="chatBoxButtonStyle" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ChatBox;
