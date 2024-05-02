import { PubSub } from "../../../../../logic/Pubsub.js";
import { render_component } from "../../../../component_manager.js";

const component = 
{
    parent_id: "section1",
    self_id: "circle_container",
    css: "sections/section1/section1_content/circle/circle.css",
    render: render
}

function render (instance_DOM) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.id = "circle";
    instance_DOM.append(circle);

    let bended_text = document.createElement("div");
    bended_text.id = "bended_text";
    instance_DOM.append(bended_text);

    // PubSub.publish({event: "render::app", detail: {initer: "section1"}});
}

PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "section1") return; render_component(component)}});