// Set JS variables and objects
const ham_btn = document.getElementById("ham_btn");
const nav_menu = document.getElementById("nav_menu");
const a = document.createElement('a');
const style_menu = {
    animation: "fadeIn 0.8s",
    boxShadow: "0px 0px 150px 1px white",
    display: "block",
    fontWeight: "700",
    left: "2.5%",
    margin: "auto",
    minHeight: "93vh",
    position: "absolute",
    textAlign: "center",
    top: "50px",
    width: "95%",
    webkitAnimation: "fadeIn 0.8s",
    zIndex: "1"
};
const style_close = {
    animation: "fadeIn 3s",
    bottom: "450px",
    display: "block",
    float: "right",
    fontFamily: "Dongle",
    fontSize: "95px",
    fontWeight: "400",
    position: "relative",
    right: "30px",
    transform: "scale(1.3, 1)",
};

// Listen to click on hamburger button(hb) and activate nav_menu in responsive design
ham_btn.addEventListener("click", function() {
    
    Object.assign(nav_menu.style, style_menu);

    // Create close button "X", in nav_menu and hide
    a.setAttribute("href", "");
    a.innerHTML = "X";
    a.id = "close";
    a.className = "close";
    nav_menu.appendChild(a);

    // set variable for close button and apply style
    const close = document.getElementById("close")
    Object.assign(close.style, style_close);

    // reload page onresize to close nav_menu
    document.getElementsByTagName("body")[0].onresize = function() {myFunction()};
        var x = 0;
        function myFunction() {
            window.location.href = "";
        } 
});