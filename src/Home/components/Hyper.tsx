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
    <div className="flex flex-col">
      <div className="p-8">
        <h1 className="text-center font-black text-2xl pt-6 pb-3 font-sans">
          Welcome To Hyperverge chrome Extension
        </h1>
      </div>

      <div className="flex flex-row p-8">

        <div className="w-1/2">
            <div className="pt-4">
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
