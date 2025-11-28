// const site = window.location.hostname; // for testing purposes
// alert("Injecting CSS to " + site); // for testing purposes

// For my mother who uses my pc and is technologically inept despite her differing opinion
//alert("You are using Zird MyKoob Tools Beta, there may be stylization issues as it is not yet complete...")

// css is below we just adding extra shit for fun :3



// moving the topbar to the left side panel on the homepage

// var newBtn = document.createElement("button");
// document.body.appendChild(newBtn);
// newBtn.innerText = "HEHEHAHA";


// Injects a lot of html stuff into the webpage
function injectContent() {
    const homepageLeftBar = document.querySelector("#profile_left_data > table > tbody > tr > td");
    // this is to move the secondary top bar items to the main page
    if (homepageLeftBar) {

        homepageLeftBar.setAttribute("id", "homePageLeftBar");
        const endWorkDiv = document.querySelector(`#homePageLeftBar > div:nth-child(8)`);
        const socialBtnsDiv = document.querySelector(`#homePageLeftBar > div:nth-child(23)`);
        
        if (endWorkDiv && endWorkDiv.childElementCount < 1) {
            endWorkDiv.setAttribute("id", "endWorkParent");
            const endWorkBtn = document.createElement("a");
            endWorkBtn.href = "?world/bye";
            endWorkBtn.innerText = "➜] Beigt darbu";
            endWorkDiv.appendChild(endWorkBtn);

            if (socialBtnsDiv && socialBtnsDiv.childElementCount < 1) {
                socialBtnsDiv.setAttribute("id", "socialBtnsDiv");
                
                // reparents the topbar to here
                let topbarDiv = document.querySelector("#header-buttons");
                socialBtnsDiv.appendChild(topbarDiv);
            
            
            
                clearInterval(pollInterval);

            };
        };
    };

    // Footer Injection

    const footer = document.querySelector("#foot > #footer");
    if (footer) { // if it exists
        if (footer.childElementCount < 3) {
            const zmtVersionDiv = document.createElement("div");
            footer.appendChild(zmtVersionDiv);
            zmtVersionDiv.setAttribute("id", "zmtVersion");

            zmtVersionDiv.innerText = "Zird MyKoob Tools Version: 0.0.001"
        };
    };
};

const pollInterval = setInterval(injectContent, 100);



// Add custom CSS:
const add_Custom_CSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;


/*
white mode: 
--text( #080a11 )
--bg( #e1e6f9 )
--primary( #202f69 )
--secondary( #a2ecff )


dark mode:
--text( #eef0f7 )
--bg( #060b1e)
--primary( #96a4df)
--secondary( #00495c )
*/

// .portfolio-wrapper .col:nth-child(5n + 1) .portfolio-box-title b
// 

// Actual CSS rules
const custom_Style = `

    /* complete change in layout */

    body, span {
        font-family: "Inter" !important;
        font-weight: 500 !important;
    }
    #head, #middle, #foot, #main_content {
        background-color: #fff;
    }
    #header, #main_content {
        max-width: 1200px !important;
        background-color: #fff;
    }
    /* Cookie forms */
    .stpd_cmp_form, .stpd_cmp_wrapper, .stpd_cmp, #c-p-bn, #s-all-bn, #s-sv-bn, .c  {
        display: none !important;
    }
    
    #c-s-bn, #s-rall-bn {
        background-color: #a2ecff;
    }



    /*header*/
    
    #head, .tta, .sel, #mtab_1, #mtab_2, #mtab_3, #mtab_4, #mtab_5, #mtab_6, #mtab_7, #mtab_8, .profile-container, .left_corner, .middle_border, .right_corner {
        background-image: none !important;
        background: none !important;
    }
    #header { 
        width: auto !important;
    }
    .tta, .header-subtabs li a {
        text-shadow: none !important;
        display: flex !important;
        align-items: center;
        justify-content: center;
        background-color: none;
        border-radius: 15px;
        transition: 0.5s;
    }
    .tta:hover, .header-subtabs li a:hover {
        background-color: #92e9ffff !important;
    }
    .tta span, .header-subtabs li a span {
        color: #000 !important;
        margin: 0vh 1.2vw;
        max-height: none !important;
    }
    #head {
        padding-top: 5px !important;
        height: 45px !important;
    }

    #header-bottom {
        height: auto;
        margin-top: 0px !important;
        /*background-color: #cef5ffff;*/
    }
    .sel, .tta, #mtab_1, #mtab_2, #mtab_3, #mtab_4, #mtab_5, #mtab_6, #mtab_7, #mtab_8 {
        height: 45px !important;
    }
    .top-menu-tab {
        font-size: 16px !important;
    }
    #main-tabs-ul, .header-subtabs {
        display: flex !important;
        justify-content: center;
        align-items: center;
    }
    .header-subtabs {
        margin: 0;
        flex-direction: column;
        border: none !important;
    }
    .header-subtabs li {
        text-shadow: none !important;
        background: none !important;
        border: none !important;
    }
    .header-subtabs li a {
        padding: 4px 2px;
        background-color: #f3f4ffff !important;
        border-radius: 10px;
        border: 1px #d0d5ffff solid;
    }
    .header-subtabs li a span {
        font-size: 15px !important;
        text-align: center;
    }
    .header-subtabs > li:nth-child(2) {
        margin-top: 10px !important;
    }
    #stab_active {
        height: 27px !important;
    }
    #counter_assignments, #counter_materials {
        left: 80% !important;
        background-image: none;
        width: 1.5em;
        height: 1.5em;
        background-color: #5bbed6ff;
        border-radius: 50%;
        font-size: 14px;
        text-align: center;
        line-height: 1.45;
    }
    .header-opt-logout, #top_user_info {
        display: none !important;
    }
    #mtab_1 div a span, #main-tabs-ul > .sel:nth-child(1) div a span {
        width: 82px !important;
        font-size: 0px !important;
        background: url('https://family-cdn.mykoob.lv//static/img/mykoob_logo_small.png') no-repeat;
    }
    
    /* Footer  */
    #zmtVersion {
        padding-left: 20vw;
    }



    /* middle/ aktivitātes */

    .main {
        width: 100% !important;
    }

    #middle {
        display: flex !important;
        justify-content: center;
    }
    #main_content {
        margin: 0% 1%;
        display: flex !important;
        justify-content: center;
    }
    #profile_right_data {
        max-width: 900px !important;
    }
    #profile_right_data .datatable td[style*="width:300px"], #settings_content, #header-top  {
        display: none !important;
    }
    .activities-class {
        max-width: none !important;
    }





    /* homepage  left */


    .profile-container .f1 {
        white-space: break-spaces !important;
        text-align: center;
    }

    .datatable .both-borders { 
        border-radius: 10px;
        border: 1px solid #e2e2e3;
    }

    .profile-container {
        font-size: 14px !important;
    }
    .my_profile_picture {
        border-radius: 15px;
        border: solid 1px #e2e2e3;
    }
    #e497548c2f4d913b7901c4e51ba59207, #profile_left_data .both-borders>div:nth-child(4),  #profile_left_data .both-borders>div:nth-child(5),  #profile_left_data .both-borders>div:nth-child(7), .seperator, #header-opt-help a, .mykoob-logo  {
        display: none !important;
    }
    #endWorkParent {
        height: 30px !important;
        display: flex !important;
        justify-content: center;
    }
    #endWorkParent a {
        color: #c60000ff !important;
        font-size: 13.6px;
    }
    #endWorkParent a:hover {
        text-decoration: underline !important;
    }
    /* homepage right */
    #activities_settings {

        color: #000 !important;
    }
    #activities_settings:hover {
        text-decoration: underline !important;
    }
    #activities_settings:before {
        content: "⚙︎ ";
        text-decoration: none;
    }
    #socialBtnsDiv {
        height: 30px !important;
        display: flex !important;
        justify-content: center;
    }


    /* chat page*/
    iframe {
        width: 90vw;
        max-width: 1200px !important;
    }

    /* Assignment page (uzd) */
    .assignments_button_panel {
        padding-bottom: 35px !important;
    }
    #assigment_popup {
        width: 600px !important;
        height: 300px !important;
    }
    #ap_description {
        width: 98% !important;
        overflow-x: hidden !important;
    }



    /* Dienasgrāmata */

    .uncheck {
        width: 20px;
        height: 20px;
        background-size: 16px 16px;
    }
    .blank_gray {
        display: none;
    }

    select {
        border-radius: 5px;
    }

`;

// too lazy to actually make this into one thing so its seperated :3
add_Custom_CSS(custom_Style);



// 
