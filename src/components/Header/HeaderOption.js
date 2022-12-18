import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

export default function HeaderOption({ Avatar, Icon, title }){
    return(
        <div className="headerOption">
            {Icon && <Icon className="headerOption_icon" />}
            {Avatar && <Avatar className="headerOption_icon"> ⬇</Avatar>}
            <h8 className="headerOption_title">{title}</h8>
        </div>
    )
}