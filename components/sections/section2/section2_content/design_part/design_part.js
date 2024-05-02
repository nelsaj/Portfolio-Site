import { addObserver, scrollTrigger } from "../../../../../identities/active.js";
import { PubSub } from "../../../../../logic/Pubsub.js";
import { render_component } from "../../../../component_manager.js";

const component = 
{
    parent_id: "section2_wrapper",
    self_id: "design_part",
    klass: ["_part"],
    css: "sections/section2/section2_content/design_part/design_part.css",
    render: render,
}

function render (instance_DOM) {
    instance_DOM.innerHTML = 
    `
        <h1>Design</h1>
        <p>I have a 3-year high school education in graphic design, along with receiving a scholarship for Graphic Design Student of the Year, which I was awarded at my graduation in 2021.</p>
        <p>During the course of my university program I have worked with Figma, where my knowledge is still fresh. I have worked with wireframing, prototyping, collaborative designs, responsive designs and more.</p>
        <h3>Programs :</h3>
        <ul>
            <li>Figma ✳</li>
            <li>Photoshop ✳</li>
            <li>Illustrator ✳</li>
        </ul>
    `;

    scrollTrigger("#" + component.self_id);

    PubSub.publish({event: "render::app", detail: {initer: "design_part"}});
}

PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "programming_part") return; render_component(component)}});