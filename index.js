"use strict";
// Multiline Function String - Nate Ferrero - Public Domain
function heredoc (f) {
    return f.toString().match(/\/\*\s*([\s\S]*?)\s*\*\//m)[1];
};

var txt = heredoc(function()
{/*
A test of horrible
Multi-line strings!
<script src="https://code.jquery.com/jquery-1.11.2.js"></script>
*/});

document.write(txt);
