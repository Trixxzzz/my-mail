import React, { useState } from 'react';
import { Box, Button, Dialog, InputBase, TextField, Typography, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UseApi from '../Hooks/UseApi';
import { API_URLS } from '../Services/Api.urls';

const dialogStyle = {
  height: '90%',
  width: '80%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  borderRadius: '10px 10px 0 0',
};

const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 15px',
  background: '#f2f6fc',
  '& > p': {
    fontSize: 14,
    fontWeight: 500,
  },
});

const RecipientsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 15px',
  '& > div': {
    fontSize: 14,
    borderBottom: '1px solid #F5F5F5',
    marginTop: 10,
  },
});

const Footer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 15px',
  alignItems: 'center',
});

const SendButton = styled(Button)({
  background: '#0B57D0',
  color: '#fff',
  fontWeight: 500,
  textTransform: 'none',
  borderRadius: 18,
  width: 100,
});

const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState({});
  const sentEmailService = UseApi(API_URLS.saveSentEmail);
  const saveDraftService=UseApi(API_URLS.saveDraftEmails)

  const config = {
    Host: "smtp.elasticemail.com",
    Username: 'trixxzzz@yopmail.com',
    Password: "D5101137671D602671DD743A589891DCB2AB",
    Port: 2525,
  };

  const closeComposeMail = async(e) => {
    e.preventDefault();
    const payload = {
      to: data.to,
      from: "ramtekearyan2003@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: '',
      name: 'Trixxzzz',
      starred: false,
      type: 'drafts',
    };

    await saveDraftService.call(payload);

    if (!saveDraftService.error) {
      setOpenDialog(false)
      setData({});
    } else {
      alert(saveDraftService.error.message);
    }
  };

  const sendMail = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!data.to || !data.subject || !data.body) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      if (window.Email) {
        const emailResponse = await window.Email.send({
          ...config,
          To: data.to,
          From: "ramtekearyan2003@gmail.com",
          Subject: data.subject,
          Body: data.body,
        });

        alert(emailResponse);
      }

      const payload = {
        to: data.to,
        from: "ramtekearyan2003@gmail.com",
        subject: data.subject,
        body: data.body,
        date: new Date(),
        image: '',
        name: 'Trixxzzz',
        starred: false,
        type: 'sent',
      };

      await sentEmailService.call(payload);

      if (!sentEmailService.error) {
        setOpenDialog(false)
        setData({});
      } else {
        alert(sentEmailService.error.message);
      }

      setOpenDialog(false);
    } catch (error) {
      alert('Failed to send email. Please try again.');
      console.error('Error sending email:', error);
    }
  };

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Dialog 
      open={openDialog}
      PaperProps={{ sx: dialogStyle }}
    >
      {/* Header */}
      <Header>
        <Typography>New Message</Typography>
        <CloseIcon fontSize='small' onClick={closeComposeMail} />
      </Header>

      {/* Data */}
      <RecipientsWrapper>
        <InputBase placeholder='Recipients' name='to' onChange={onValueChange} />
        <InputBase placeholder='Subject' name='subject' onChange={onValueChange} />
      </RecipientsWrapper>

      {/* TextArea */}
      <TextField
        multiline
        rows={21}
        onChange={onValueChange}
        name='body'
        sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
      />

      {/* Footer */}
      <Footer>
        <SendButton onClick={sendMail}>Send</SendButton>
        <DeleteOutlineIcon onClick={() => setOpenDialog(false)} />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
