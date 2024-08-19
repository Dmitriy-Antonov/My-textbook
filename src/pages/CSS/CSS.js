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