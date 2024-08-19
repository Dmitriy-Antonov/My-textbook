let action = false;

function show_menu() {
    if (action == false) {
        document.getElementById('container_menu').style.opacity = "100";
        document.getElementById('arrow_png').style.transform = "rotate(180deg)";
        document.getElementById('arrow_png').style.transition = "0.2s";
        action = true;
    } else {
        document.getElementById('container_menu').style.opacity = "0";
        document.getElementById('arrow_png').style.transform = "rotate(0deg)";
        action = false;
    }
}

let action_2 = false;

function show_content() {
    if (action_2 == false) {
        document.getElementById('main_content_themes_content').style.opacity = "100";
        document.getElementById('main_content_themes_content').style.marginTop = "0";
        document.getElementById('main-content-themes-arrow_png-1').style.transform = "rotate(180deg)";
        document.getElementById('main-content-themes-arrow_png-1').style.transition = "0.2s";
        action_2 = true;
    } else {
        document.getElementById('main_content_themes_content').style.opacity = "0";
        document.getElementById('main_content_themes_content').style.marginTop = "-100px";

        document.getElementById('main-content-themes-arrow_png-1').style.transform = "rotate(0deg)";
        action_2 = false;
    }
}

