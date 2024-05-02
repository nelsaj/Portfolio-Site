import { scrollTrigger } from "../../../../../identities/active.js";
import { PubSub } from "../../../../../logic/Pubsub.js";
import { render_component } from "../../../../component_manager.js";

const component = 
{
    parent_id: "section2",
    self_id: "circles_container",
    css: "sections/section2/section2_content/circles/circles.css",
    render: render
}

function render (instance_DOM) {
    if(localStorage.getItem("circlePosition")) instance_DOM.style.transform = `translateY(${localStorage.getItem("circlePosition")})`; 
    scrollTrigger("#" + component.parent_id);

    for (let i = 0; i < 3; i++) {
        let circle = document.createElement("div");
        circle.classList.add("circle");
        circle.id = "circle_" + i;
        instance_DOM.append(circle);

    }

    // PubSub.publish({event: "render::app", detail: {initer: "section1"}});
}

let counter = 0;
let ammount = 2.5;

let max = 300;
let min = -300;
PubSub.subscribe({event: "scroll::down", listener: () => { 
    if(!document.getElementById(component.parent_id).classList.contains("active")) return;
    counter -= ammount }});

PubSub.subscribe({event: "scroll::up", listener: () => { 
    if(!document.getElementById(component.parent_id).classList.contains("active")) {return};
    counter += ammount }});
    
PubSub.subscribe({event: "scroll::general", listener: () => { 
    if(!document.getElementById(component.parent_id).classList.contains("active")) return;

    if(counter > max) counter = max;
    if(counter < min) counter = min;

    document.getElementById(component.self_id).style.transform = `translateY(${counter}px)`; 
    localStorage.setItem("circlePosition", counter + "px"); 
}});

PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "section2") return; render_component(component)}});