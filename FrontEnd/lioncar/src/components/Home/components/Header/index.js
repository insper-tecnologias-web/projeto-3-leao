import axios from "axios";
import React, { useEffect, useState } from "react";
import "./head.css";


function Head({b}){

return (
<>
<header class="site-header">
<div class="aa">
        <h1 class="site-title">Lion Cars</h1>
        </div>
        <nav class="main-nav">
            <ul>
                <li><a  href="#">Home</a></li>
                <li><a href="#">My Cars</a></li>
            </ul>
        </nav>
</header>
</>
)
}
export default Head;