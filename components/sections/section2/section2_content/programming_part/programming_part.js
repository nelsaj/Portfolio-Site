import { scrollTrigger } from "../../../../../identities/active.js";
import { PubSub } from "../../../../../logic/Pubsub.js";
import { render_component } from "../../../../component_manager.js";

const component = 
{
    parent_id: "section2_wrapper",
    self_id: "programming_part",
    klass: ["_part"],
    css: "sections/section2/section2_content/programming_part/programming_part.css",
    render: render,
}

function render (instance_DOM) {
    instance_DOM.innerHTML = 
    `
        <h1>Coding</h1>
        <p>I am currently studying Media Technology: Webb-based Design and Development (Medieteknik: Webbaserad
            design och utveckling) at Malmö University. It's a candidate program that covers several different skills within coding for the web. I have experience in frontend, backend, design, datavisualization with d3, coding in groups and more.</p>
        <p><span>/* I have studied 2 out of 3 years in my program! */</span></p>
        <p>Furthermore, I have enrolled in an elective university course where I assist students one year junior to me in coding. This experience equips me with teaching expertise in coding as well.</p>
        <h3>Languages :</h3>
        <ul>
            <li>✳ JavaScript <span>/* <-- This is what I'm best at!! ☆☆ */</span></li>
            <li>✳ PHP</li>
            <li>✳ <i>D3</i> <span>/* Although, this is a library, not a language */</span></li>
            <li><span>/* I can also use HTML and CSS. This portfolio site is designed and coded by me. */</span></li>
        </ul>
    `;

    scrollTrigger("#" + component.self_id);

    PubSub.publish({event: "render::app", detail: {initer: "programming_part"}});
}


PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "section2") return; render_component(component)}});