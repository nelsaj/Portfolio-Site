let existing_css = [];
// ska kanske flyttas?
export function render_component (component, type = null){
    let {parent_id = false, self_id = false, render, klass = false, dom_type = "div", css = false, instance_data = false} = component;

    const instance_DOM = document.createElement(dom_type);

    instance_DOM.id = self_id;
    if(klass) klass.forEach(klass => instance_DOM.classList.add(klass));

    if(parent_id === "body") {
        document.querySelector("body").append(instance_DOM);
    }
    else document.getElementById(parent_id).append(instance_DOM);

    // fixing the dupe bug
    if(component.css) { // css
        if(!existing_css.includes(css_id())){
            let link = document.createElement("link");
            link.setAttribute("href", `./components/${css}`);
            link.setAttribute("rel", "stylesheet");
            link.id = css_id(); // makes the id into "cssname"_css
            existing_css.push(css_id());
            document.querySelector("head").append(link);
        }
    }
    function css_id (){
        return css.split("/")[css.split("/").length -1].replace(".", "_");
    }

    if(type) instance_data.type = type;
    render(instance_DOM, instance_data);
}