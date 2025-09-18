import React from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Hello(props) {
    const {n,m} = useParams();
    const uristring = new URLSearchParams(useLocation().search);
    const name = uristring.get("name");
    const surname = uristring.get("surname");
    return (
        <>
            <h1>Hello {n} {m} {name} {surname}</h1>
        </>
    );
}