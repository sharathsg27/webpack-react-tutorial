import FormContainer from "./js/components/container/FormContainer.js";
import ReactDOM from "react-dom";
import React from "react";


const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
