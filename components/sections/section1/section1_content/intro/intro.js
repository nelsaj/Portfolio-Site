import { PubSub } from "../../../../../logic/Pubsub.js";
import { render_component } from "../../../../component_manager.js";

const component = 
{
    parent_id: "section1",
    self_id: "intro_container",
    css: "sections/section1/section1_content/intro/intro.css",
    render: render
}

function render (instance_DOM) {

    instance_DOM.innerHTML = 
    `
        <p>/* Design and programmering for the web.*/</p>
        <h1>Nelly <br class="forMobile">Sajland ✸</h1>

        <div class="circle" id="intro_circle"></div>
    `;

    // PubSub.publish({event: "render::app", detail: {initer: "section1"}});
}

PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "section1") return; render_component(component)}});