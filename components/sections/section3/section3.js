import { scrollTrigger } from "../../../identities/active.js";
import { PubSub } from "../../../logic/Pubsub.js";
import { render_component } from "../../component_manager.js";

const component = 
{
    parent_id: "wrapper",
    self_id: "section3",
    css: "sections/section3/section3.css",
    render: render,

    dom_type: "section"
}

function render (instance_DOM) {
    instance_DOM.innerHTML = 
    `
        <h1>PROJECTS :</h1>
    `;

    PubSub.publish({event: "render::app", detail: {initer: "section3"}});
}

PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "scrolling_text") return; render_component(component)}});