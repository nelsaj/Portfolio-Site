import { PubSub } from "../../logic/Pubsub.js";
import { render_component } from "../component_manager.js";

const component = 
{
    parent_id: "wrapper",
    self_id: "nav",
    css: "nav/nav.css",
    render: render,

    dom_type: "nav"
}

function render (instance_DOM) {
    instance_DOM.innerHTML = 
    `
        <div id="nav_title">
            <p>✳ NELLY</p>
        </div>
        
        <div id="nav_links">
            <p id="link_to_section1">home</p>
            <p id="link_to_section2">about me</p>
            <p id="link_to_section3">projects</p>
            <p id="link_to_section4">contact me</p>
        </div>
    `;
    navlinks_functionality();

    PubSub.publish({event: "render::app", detail: {initer: "nav"}});
}

function navlinks_functionality () {
    // click on navbar
    const all_nav_links = document.querySelectorAll("#nav_links > *");
    all_nav_links.forEach(linkDOM => {
        linkDOM.addEventListener("click", e => {
            const destination = linkDOM.id.split("link_to_").pop();
            document.getElementById(`${destination}`).scrollIntoView({behavior: "smooth"});
        })
    })

    document.getElementById("nav_title").addEventListener("click", () => {
        document.getElementById("section1").scrollIntoView({behavior: "smooth"});
    });
}

PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "start") return; render_component(component)}});
PubSub.subscribe({event: "scroll::down", listener: () => { document.getElementById(component.self_id).style.top = "-60px" }});
PubSub.subscribe({event: "scroll::up", listener: () => { document.getElementById(component.self_id).style.top = "0" }});