document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label"),n=e.name.split(/(?=[A-Z])/).map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ");t.className="field-label",t.htmlFor=e.id,t.textContent=n,e.insertAdjacentElement("beforebegin",t),e.placeholder=n});
//# sourceMappingURL=index.3ff8f77e.js.map
