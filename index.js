//JSON
const profile = {
    description: "Это мой личный сайт на GitHub",
    logo_img: "./public/logo.png",
    name: "Artpupser",
    title: "Artpupser links",
    links: [
        {
            name: "youtube",
            href: "https://www.youtube.com/@hurmaria",
            src: "./public/youtube.svg"
        },
        {
            name: "twitch",
            href: "https://www.twitch.tv/hurmaria",
            src: "./public/twitch.svg"
        }
    ]
}

//SCRIPT
is_front = true
boot();
function boot()
{
    console.log("JavaScript is loaded!");
    build()
    handlers()
}

function handlers()
{
    const card = document.querySelector(".card");
    const container = document.querySelector(".container");
    const front = card.querySelector(".front");
    const back = card.querySelector(".back");
    container.addEventListener("mouseover", function() {
        card.setAttribute("class", "card card_hover");
    });
    container.addEventListener("mouseout", function() {
        card.setAttribute("class", "card");
    });
    container.addEventListener("click", function() {
        card.setAttribute("class", is_front ? "card" : "card card_hover");
    })
}

function build()
{
    const elements = {
        description: document.querySelector(".description"),
        logo_img: document.querySelector(".logo").querySelector("img"),
        links: document.querySelector(".links"),
    };
    document.title = profile.title
    elements.description.innerText = profile.description;
    elements.logo_img.src = profile.logo_img;
    for (let i = 0; i < profile.links.length; i++) {
        console.log(i)
        let link = profile.links[i];
        elements.links.appendChild(createLinkElement(link.href, link.src, link.name));
    }
}

function createLinkElement(href, src, alt)
{
    const a = document.createElement("a");
    const img = document.createElement("img");
    a.setAttribute("class", "link");
    img.src = src;
    img.alt = alt;
    a.href = href;
    a.appendChild(img);
    return a;
}