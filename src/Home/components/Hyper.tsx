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

export default function Hyper() {
  return (
    <div className="flex">
      <div className="p-4 w-1/2">
        <div>
          <CurrentTime></CurrentTime>
        </div>

        <div>
          <IssueTracker></IssueTracker>
        </div>

        <div>

        <PomodoroTimer />
        </div>
       </div>
      <div className="flex flex-wrap justify-center items-center bg-blue-100 p-4 w-full">
        <div className="p-2">
          <Youtubecc/>
        </div>

        <div className="p-2">
         <TodoList />
        </div>
        <div className="p-2">
          <AnnouncementTable />
        </div>
      </div>
    </div>
  );
}
