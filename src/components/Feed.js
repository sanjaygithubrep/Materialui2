import React from 'react'
import { Box, Container,Stack,Card } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box  flex={4} p={2}>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
</Box>
  )
}

export default Feed