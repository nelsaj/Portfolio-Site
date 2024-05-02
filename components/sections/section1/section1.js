import { PubSub } from "../../../logic/Pubsub.js";
import { render_component } from "../../component_manager.js";

const component = 
{
    parent_id: "wrapper",
    self_id: "section1",
    css: "sections/section1/section1.css",
    render: render,

    dom_type: "section"
}

function render (instance_DOM) {

    PubSub.publish({event: "render::app", detail: {initer: "section1"}});
}

PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "nav") return; render_component(component)}});