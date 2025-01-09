const sites = [
    {name: "rysaiah", href: "https://www.rysaiah.com"},
    {name: "d2l", href: "https://learning.gcc.edu"},
    {name: "myGCC", href: "https://my.gcc.edu/ICS"},
    {name: "search", href: "https://duckduckgo.com/"},
    
]

document.addEventListener("DOMContentLoaded", function(){
    const contentDiv = document.getElementById("content")

    sites.forEach(function(site){
        const siteDiv = document.createElement("a")
        siteDiv.innerText = site.name
        siteDiv.href = site.href
        contentDiv.appendChild(siteDiv)
    })
})