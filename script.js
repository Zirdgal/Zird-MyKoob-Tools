// const site = window.location.hostname; // for testing purposes
// alert("Injecting CSS to " + site); // for testing purposes

// For my mother who uses my pc and is technologically inept despite her differing opinion
//alert("You are using Zird MyKoob Tools Beta, there may be stylization issues as it is not yet complete...")

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
        height: 93px !important;
    }
    #header-top {
        padding: 0vh 0vh;
    }
    #header-bottom {
        margin-top: 0px !important;
        height: 62px !important;
        /*background-color: #cef5ffff;*/
    }
    .sel, .tta, #mtab_1, #mtab_2, #mtab_3, #mtab_4, #mtab_5, #mtab_6, #mtab_7, #mtab_8 {
        height: 60px !important;
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
    }
    .header-opt-logout a {
        color: #c60000ff !important;   
    }
    .header-opt-logout a:before {
        content: "➜] ";
    }
    .header-opt-logout {
        margin-left: 3em !important;
    }
    #mtab_1 div a span, #main-tabs-ul > .sel:nth-child(1) div a span {
        width: 82px !important;
        font-size: 0px !important;
        background: url('https://family-cdn.mykoob.lv//static/img/mykoob_logo_small.png') no-repeat;
    }
    





    /* middle/ aktivitātes */

    #middle {
        display: flex !important;
        justify-content: center;
    }
    #main_content {
        margin: 0% 1%;
        display: flex !important;
        justify-content: center;
    }
    #middle {
        padding-top: 93px !important;
    }
    #profile_right_data {
        width: 900px !important;
    }
    #profile_right_data .datatable td[style*="width:300px"], #settings_content {
        display: none !important;
    }
    .activities-class {
        max-width: none !important;
    }

    /* homepage  left */

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


    /* homepage right */
    #activities_settings {

        color: #000 !important;
    }
    #activities_settings:hover {
        text-decoration: underline !important;
    }
    #activities_settings:before {
        content: "⚙️";
        text-decoration: none;
    }


    /* chat page*/
    iframe {
        width: 90vw;
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

`;

// too lazy to actually make this into one thing so its seperated :3
add_Custom_CSS(custom_Style);



// 
