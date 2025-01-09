const sites = [
    {name: "rysaiah", type: "site", href: "https://www.rysaiah.com"},
    {name: "d2l", type: "site", href: "https://learning.gcc.edu"},
    {name: "myGCC", type: "site", href: "https://my.gcc.edu/ICS"},
    {name: "search", type: "search", href: "https://duckduckgo.com/"},
    
]

document.addEventListener("DOMContentLoaded", function(){
    const contentDiv = document.getElementById("content")

    sites.forEach(function(site){
        if(site.type == "site"){
            const siteDiv = document.createElement("a")
            siteDiv.innerText = site.name
            siteDiv.href = site.href
            contentDiv.appendChild(siteDiv)
        }else if(site.type == "search"){
            const searchDiv = document.createElement("div")
            searchDiv.id = "search_container"
            const searchBar = document.createElement("input")
            searchBar.type = "text"
            searchBar.id = "search_bar"
            const searchButton = document.createElement("img")
            searchButton.src = "search.svg"
            searchButton.onclick = searchFromInput
            searchButton.id = "search_button"
            searchDiv.appendChild(searchBar)
            searchDiv.appendChild(searchButton)
            contentDiv.appendChild(searchDiv)
        }
    })
})

function searchFromInput(){
    // duckduckgo.com/?q=bruh+momen
    const input = document.querySelector("#search_bar").value
    const words = input.split(" ").map(element => element.trim());
    const query = words.join("+")
    window.location.href = `https://www.duckduckgo.com/?q=${query}`;
}

document.addEventListener("keypress", function(keypress){
    if(document.querySelector("#search_bar") === keypress.target){
        if(keypress.key == "Enter"){
            searchFromInput()
        }
    }
})