import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import youtube from "../image/youtube.jpeg";
import Avatar from "@mui/material/Avatar";
// import DeleteIcon from '@mui/icons-material/send';
// import IconButton from '@mui/material/IconButton';

import AvatarGroup from "@mui/material/AvatarGroup";
import TodoList from "./Todo";
import AnnouncementTable from "./Announement";
import CurrentTime from "./Time";
import IssueTracker from "./Issue";
import ChatBox from "./Chat";
import PomodoroTimer from "./Pomodore";
import Youtubecc from "./youtubecard";
import back from '../image/back.jpeg'

export default function Hyper() {

  const backgroundImageStyle = {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover', // This will cover the entire component
    backgroundPosition: 'center', // This will center the image
    height: '100vh', // Set the height of the component
    width: '100%', // Set the width of the component
    
  };

  return (
    <div className="flex flex-col" >
      <div className="p-8 ">
  <h1 className="text-center text-white text-3xl font-bold pt-6 pb-3 font-sans tracking-wide shadow-2xl">
    Welcome To Hyperverge Chrome Extension
  </h1>
  <h3 className="text-center text-white text-xl font-medium pt-6 pb-3 font-sans tracking-wide shadow-md">
    HyperVerge Dominates APAC Market with AI-Powered Identity Verification, Serving 700 Million Identities Globally
  </h3>
</div>



      <div className="flex flex-row p-8" >

        <div className="w-1/2">
            <div className="pt-4 pb-6">
            <CurrentTime/>
            </div>

            <div>
              <AnnouncementTable></AnnouncementTable>
            </div>

            <div>
                <ChatBox></ChatBox>
              </div>
        </div>

        <div className="w-1/2 flex flex-col justify-start">
            <div className="">

              <div>
                <PomodoroTimer></PomodoroTimer>
              </div>

                <div className="align-top">
                  <TodoList></TodoList>
                </div>

                <div className="p-3">
                  <IssueTracker></IssueTracker>
                </div>

                <div className="flex justify-center items-center pt-8">
                  <Youtubecc></Youtubecc>
                </div>

                
            </div>

        </div>
      </div>
    </div>
  );
}
