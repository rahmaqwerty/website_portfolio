window.onload = function(){

    
    const about_me = document.querySelector("#about_me");

    about_me.addEventListener("mouseover", showAboutMe,  {once : true});
}

function showAboutMe(){

    const div = document.querySelector("#content");


    const paragraph = document.createElement("p");

    const content = document.createTextNode("I am a recent career switcher and Im embarking on a career as a frontend developer.");

    paragraph.appendChild(content);

    div.appendChild(paragraph);

    document.body.appendChild(div);

const x = document.createElement("IMG");
    x.setAttribute("src", "profile_image.png");
    x.setAttribute("width", "450");
    x.setAttribute("height", "500");
    x.setAttribute("alt", "Picture of Rahma");
    x.style.position = "absolute";
    x.style.left = 695+'px';
    x.style.top = 400 +'px';
    document.body.appendChild(x);
}
