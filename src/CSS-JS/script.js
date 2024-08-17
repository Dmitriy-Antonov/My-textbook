let counter = 0;

function show_menu() {
    counter += 1;

    if (counter % 2 == 1) {
        let menu = document.getElementById('container_menu').style.opacity = "100";
    } else {
        document.getElementById('container_menu').style.opacity = "0";
    }
}

// function show_menu() {
//     let menu = document.getElementById('container_menu').style.opacity;

//     console.log(menu);
//     // menu.style.opacity == "0" ? menu.style.opacity = "100" : menu.style.opacity = "0";
//     if (menu == "0") {
//         menu = "100";
//     } else {
//         menu = "0";
//     }
// }