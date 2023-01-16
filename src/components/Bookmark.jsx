import React from "react"
import { useState } from "react";

const Bookmark = ({status, ...rest}) => {
    return (<>
    <i {...rest} className={"bi bi-bookmark" + (status ? "-fill" : "")}></i>
    </>)
}
export default Bookmark
