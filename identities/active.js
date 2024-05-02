import { PubSub } from "../logic/Pubsub.js"

export function scrollTrigger(selector) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
      addObserver(el)
    })
}

export function addObserver(el){
    let options = {threshold: .35};
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active')
        // observer.unobserve(entry.target)

        PubSub.publish({event: "ele::active", detail: {initer: el.id}});
        
      } else {
        entry.target.classList.remove('active')
        
        PubSub.publish({event: "ele::not active", detail: {initer: el.id}});
      }
    })
  }, options)
  // Adding the observer to the element
  observer.observe(el)
}
