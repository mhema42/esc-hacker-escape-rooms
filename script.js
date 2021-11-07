// Set JS variables and objects
const nav_menu = document.getElementById("nav_menu")
const a = document.createElement('a');
const style_menu = {
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
    zIndex: "1"
};
const style_close = {
    bottom: "450px",
    float: "right",
    fontFamily: "Dongle",
    fontSize: "95px",
    fontWeight: "400",
    position: "relative",
    right: "30px",
    transform: "scale(1.3, 1)"
};

// Listen to click on hamburger button(hb) and activate nav_menu in responsive design
document.getElementById("ham_btn").addEventListener("click", function() {

    // Show nav_menu if hamburger button is activated and apply styles
    Object.assign(nav_menu.style, style_menu);

    // Create close button "X", in nav_menu
    a.setAttribute("href", "");
    a.innerHTML = "X";
    a.id = "close";
    a.className = "close";
    nav_menu.appendChild(a);

    // set variable for close button and apply style
    const close = document.getElementById("close")
    Object.assign(close.style, style_close);

    document.getElementsByTagName("BODY")[0].onresize = function() {myFunction()};
        var x = 0;
        function myFunction() {
            window.location.href = "";
            // var txt = x += 1;
            // nav_menu.innerHTML = "hej";
        } 
});