"use strict";
// Multiline Function String - Nate Ferrero - Public Domain
function heredoc (f) {
    return f.toString().match(/\/\*\s*([\s\S]*?)\s*\*\//m)[1];
};

var txt = heredoc(function()
{/*
