import React from "react";
import "./head.css";


function Head() {

    return (
        <>
            <header class="site-header">
                <div class="aa">
                    <h1 class="site-title">Lion Cars</h1>
                </div>
                <nav class="main-nav">
                    <ul>
                        <li><a href="http://10.102.8.95:3000/home">Home</a></li>
                        <li><a href="http://10.102.8.95:3000/home">Publishied Cars</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Head;