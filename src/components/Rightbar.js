import React from 'react'
import { Box, Container,Stack,Typography,ImageList,ImageListItem } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Rightbar = () => {
  return (
    <Box  flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed" width={300} mt={2} mb={2}>
        <Typography variant="h6" font-weight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/14327570/pexels-photo-14327570.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/13984623/pexels-photo-13984623.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/13958652/pexels-photo-13958652.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/14160581/pexels-photo-14160581.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/6173364/pexels-photo-6173364.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
    </AvatarGroup>
    <Typography variant="h6" fontWeight={100}>
      Latest Photos
    </Typography>
    <ImageList cols={2} rowWeight={100} gap={5}>
      <ImageListItem>
        <img src="https://images.pexels.com/photos/14268955/pexels-photo-14268955.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"   />
      </ImageListItem>
      <ImageListItem>
        <img src="https://images.pexels.com/photos/13240319/pexels-photo-13240319.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"   />
      </ImageListItem>
      <ImageListItem>
        <img src="https://images.pexels.com/photos/4277099/pexels-photo-4277099.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"   />
      </ImageListItem>
      <ImageListItem>
        <img src="https://images.pexels.com/photos/11586575/pexels-photo-11586575.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"   />
      </ImageListItem>
    </ImageList>
      </Box>
    </Box>
  )
}

export default Rightbar