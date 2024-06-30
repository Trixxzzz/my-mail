import { Box, Checkbox, Typography, styled } from "@mui/material";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes/Routes";
import UseApi from "../Hooks/UseApi";
import { API_URLS } from "../Services/Api.urls";

const Wrapper = styled(Box)({
  padding: "0 0 0 10px",
  backgroundColor: "#f2f6fc",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  "& > div": {
    display: "flex",
    width: "100%",
    "& > p": {
      fontSize: 14,
    },
  },
});

const Indicator = styled(Typography)({
  fontSize: "12px !important",
  background: "#ddd",
  color: "#222",
  padding: "0 4px",
  borderRadius: "4px",
  marginRight: 6,
});

const Date = styled(Typography)({
  marginLeft: "auto",
  marginRight: 20,
  fontSize: 12,
  color: "#5F6368",
});

const Email = ({ email, selectedEmails, setRefreshScreen ,setSelectedEmails}) => {
  const navigate = useNavigate();
  const toggleStarredService = UseApi(API_URLS.toggleStarredEmail);
  const toggleStarredMails = () => {
    toggleStarredService.call({ id: email._id, value: !email.starred });
    setRefreshScreen((prevState) => !prevState);
  };

  const onValueChange=()=>{
    if(selectedEmails.includes(email._id)){
        setSelectedEmails(prevState=>prevState.filter(id=>id !==  email._id))
    }else{
        setSelectedEmails(prevState=>[...prevState,email._id])
    }
  }
  return (
    <Wrapper>
      <Checkbox size="small" checked={selectedEmails.includes(email._id)} 
      onChange={()=>onValueChange()}/>
      {email.starred ? (
        <StarIcon
          fontSize="small"
          style={{ marginRight: 10, color: "#FFF200" }}
          onClick={() => toggleStarredMails()}
        />
      ) : (
        <StarBorderIcon
          fontSize="small"
          style={{ marginRight: "10px" }}
          onClick={() => toggleStarredMails()}
        />
      )}
      <Box
        onClick={() => navigate(routes.view.path, { state: { email: email } })}
      >
        <Typography style={{ width: 200, overflow: "hidden" }}>
          {email.name}
        </Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {email.subject}
          {email.body && "-"} {email.body}
        </Typography>
        <Date>
          {new window.Date(email.date).getDate()}
          {new window.Date(email.date).toLocaleString("default", {
            month: "long",
          })}
        </Date>
      </Box>
    </Wrapper>
  );
};

export default Email;
