import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import UseApi from "../Hooks/UseApi";
import { API_URLS } from "../Services/Api.urls";
import { Box, Checkbox, List } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Email from "./Email";
import NoMails from "./NoMails";
import { EMPTY_TABS } from "../Constants/Constants";

const Emails = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);
  const { openDrawer } = useOutletContext();

  const { type } = useParams();

  const getEmailsService = UseApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService = UseApi(API_URLS.moveEmailsToBin);
  const deleteEmailService=UseApi(API_URLS.deleteEmail)

  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type, refreshScreen]);

  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getEmailsService?.response?.map((email) => email._id);
      setSelectedEmails(emails);
    } else {
      setSelectedEmails([]);
    }
  };
  const deleteSelectedEmails = () => {
    if (type === "bin") {
      deleteEmailService.call(selectedEmails)
    }
    setRefreshScreen((prevState) => !prevState);
  };
  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, width: "calc(100%-250px)" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
        <DeleteOutlineIcon onClick={(e) => deleteSelectedEmails(e)} />
      </Box>
      <List>
        {getEmailsService?.response?.map((email) => (
          <Email
            key={email._id}
            email={email}
            selectedEmails={selectedEmails}
            setRefreshScreen={setRefreshScreen}
            setSelectedEmails={setSelectedEmails}
          />
        ))}
      </List>
      {getEmailsService?.response?.length === 0 && (
        <NoMails message={EMPTY_TABS[type]} />
      )}
    </Box>
  );
};

export default Emails;
