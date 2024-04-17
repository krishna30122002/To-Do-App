"use client";
import React from "react";
import icon from "../img/icon.svg";
import Image from "next/image";

export default function Header() {
    return (
        <div className="header_section">
            <Image
                className="header_image"
                src={icon}
                width={60}
                alt="icon_image"
            />
            <h1>TODO App</h1>
        </div>
    );
}
