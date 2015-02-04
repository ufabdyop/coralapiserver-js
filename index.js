"use strict";
// Multiline Function String - Nate Ferrero - Public Domain
function heredoc (f) {
    return f.toString().match(/\/\*\s*([\s\S]*?)\s*\*\//m)[1];
};

var txt = heredoc(function()
{/*
<script src="https://code.jquery.com/jquery-1.11.2.js"></script>
<h3>Version</h3>
<p>The simplest API call is to ask the API what version it is running.</p>

<h3>Authentication</h3>
<p>There are a few ways to authenticate to coral api server.  The simplest is a basic http auth with 
coral credentials.</p>

*/});

document.write(txt);
