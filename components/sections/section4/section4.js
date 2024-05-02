import { scrollTrigger } from "../../../identities/active.js";
import { PubSub } from "../../../logic/Pubsub.js";
import { render_component } from "../../component_manager.js";
import { cardAnimationTime, cardDelayTime } from "../section3/section3_content/card_container/card_container.js";

const component = 
{
    parent_id: "wrapper",
    self_id: "section4",
    css: "sections/section4/section4.css",
    render: render,

    dom_type: "section"
}

function render (instance_DOM) {
    instance_DOM.innerHTML = 
    `
        <h1 id="section4_title">✽ Contact Me!</h1>
        <div class="line"></div>

        <div id="contact_list">
            <h3>✳ nelly.sajland@gmail.com</h3>
            <h3>✳ 076 140 40 10</h3>
        </div>

        <div id="svg_holder">
            <a href="https://www.linkedin.com/in/nelly-sajland-18382b212/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            <a href="https://github.com/nelsaj" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 98"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/></svg></a>
            <a href="https://www.instagram.com/n.eel.ly/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
        </div>

        <div id="blob">
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    `;

    scrollTrigger("#section4_title");
    scrollTrigger("#blob");

    PubSub.publish({event: "render::app", detail: {initer: "section4"}});
}

// PubSub.subscribe({event: "ele::active", listener: (detail) => {if(detail.initer !== "card_container") return; document.getElementById(component.self_id).style.animationDelay = (cardAnimationTime * cardDelayTime) + "s"; document.getElementById(component.self_id).classList.add("appear") }});

PubSub.subscribe({event: "ele::active", listener: (detail) => {
    if(detail.initer === "section4_title")  
    {
        document.getElementById(component.self_id).classList.add("dark_mode");
        document.querySelector("body").classList.add("dark_mode");
        document.getElementById("wrapper").classList.add("dark_mode");
        document.getElementById("cursor").classList.add("dark_mode");
        document.querySelector("nav").classList.add("dark_mode");
        document.getElementById("section3").classList.add("dark_mode");
        document.querySelectorAll(".card").forEach(card => card.classList.add("dark_mode"));
        document.querySelector("#section4 .line").classList.add("extend");
    }
    else if (detail.initer === "blob")
    {
        document.querySelectorAll("#svg_holder a").forEach((svg, i) => {
            svg.style.animationDelay = ((cardAnimationTime * cardDelayTime) * i) + "s";
            svg.classList.add("appear");
        })
    }
    else return;

}});
PubSub.subscribe({event: "ele::not active", listener: (detail) => {
    if(detail.initer === "section4_title") 
    {
        document.getElementById(component.self_id).classList.remove("dark_mode");
        document.querySelector("body").classList.remove("dark_mode");
        document.getElementById("wrapper").classList.remove("dark_mode");
        document.getElementById("cursor").classList.remove("dark_mode");
        document.querySelector("nav").classList.remove("dark_mode");
        document.getElementById("section3").classList.remove("dark_mode");
        document.querySelectorAll(".card").forEach(card => card.classList.remove("dark_mode")); 
    } 
    else if (detail.initer === "blob") 
    {
    }
    else return;
}});

PubSub.subscribe({event: "render::app", listener: (detail) => {if(detail.initer !== "section3") return; render_component(component)}});