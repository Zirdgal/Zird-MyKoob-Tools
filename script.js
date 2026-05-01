// const site = window.location.hostname; // for testing purposes
// alert("Injecting CSS to " + site); // for testing purposes

// For my mother who uses my pc and is technologically inept despite her differing opinion
//alert("You are using Zird MyKoob Tools Beta, there may be stylization issues as it is not yet complete...")

// css is below we just adding extra shit for fun :3

// moving the topbar to the left side panel on the homepage

// var newBtn = document.createElement("button");
// document.body.appendChild(newBtn);
// newBtn.innerText = "HEHEHAHA";

const zmtVersion = "1.3.001";
const runtime = typeof browser !== "undefined" ? browser : chrome;

let pollInterval;

// for Grade Calculation and Injection
function calculateAndInjectGrades() {
    const gradeMonthContainer = document.querySelector(
        "#gradesContent > div > div:nth-child(1) > table > tbody > tr > td:nth-child(2) > div > table > tbody",
    );
    const gradeAverageContainer = document.querySelector(
        "#gradesContent > div > div:nth-child(1) > table > tbody > tr > td:nth-child(3) > table > tbody",
    );
    const gradeTFoot = document.querySelector("#gradesContent > div > div:nth-child(1) > table > tfoot"); // Targeting the tfoot

    if (!gradeMonthContainer || !gradeAverageContainer || !gradeTFoot) {
        // Containers or tfoot not found, calculation did not succeed yet
        return false;
    }

    const gradeRows = [...gradeMonthContainer.children].slice(1);
    const averageRows = [...gradeAverageContainer.children].slice(1);

    // Array to store the calculated AVERAGE of each subject (not individual grades)
    const subjectAverages = [];

    gradeRows.forEach((rowElement, rowIndex) => {
        const targetAverageRow = averageRows[rowIndex];

        if (!targetAverageRow) {
            return;
        }

        const validGrades = [];
        const gradeCells = [...rowElement.children];

        gradeCells.forEach(cellElement => {
            // Use querySelectorAll to find all potential grade elements
            const innerSpans = cellElement.querySelectorAll("span > span");

            if (innerSpans.length > 0) {
                innerSpans.forEach(innerSpan => {
                    const gradeText = innerSpan.textContent.trim();
                    const gradeValue = parseInt(gradeText);

                    if (!isNaN(gradeValue) && gradeValue >= 1 && gradeValue <= 10 && String(gradeValue) === gradeText) {
                        validGrades.push(gradeValue);
                    }
                });
            } else {
                // Fallback for a single grade as text content
                let gradeText = cellElement.textContent.trim();
                const gradeValue = parseInt(gradeText);

                if (!isNaN(gradeValue) && gradeValue >= 1 && gradeValue <= 10 && String(gradeValue) === gradeText) {
                    validGrades.push(gradeValue);
                }
            }
        });

        // Calculate the final average for the row (subject)
        let average = 0;
        if (validGrades.length > 0) {
            const sum = validGrades.reduce((acc, grade) => acc + grade, 0);
            average = sum / validGrades.length;

            subjectAverages.push(average);
        }

        // Determine the injection value for the subject
        let injectionValue;
        if (validGrades.length === 0) {
            injectionValue = "";
        } else {
            injectionValue = average.toFixed(2);

            if (injectionValue.endsWith(".00")) {
                injectionValue = injectionValue.slice(0, -3);
            }
        }

        //  DOM Manipulation: Inject the Subject Average

        const averageCell = targetAverageRow.children[1];

        if (averageCell) {
            const averageSpan = averageCell.querySelector("span");

            if (averageSpan) {
                averageSpan.textContent = injectionValue;
            } else {
                averageCell.textContent = injectionValue;
            }
        }
    });

    //  Calculate and Inject the Total Average
    let totalAverage = 0;
    if (subjectAverages.length > 0) {
        const totalSum = subjectAverages.reduce((acc, avg) => acc + avg, 0);
        totalAverage = totalSum / subjectAverages.length;
    }

    // Format the Total Average
    let formattedTotalAverage = totalAverage > 0 ? totalAverage.toFixed(2) : "";

    if (formattedTotalAverage.endsWith(".00")) {
        formattedTotalAverage = formattedTotalAverage.slice(0, -3);
    }

    // Create the new row structure for tfoot
    const newTR = document.createElement("tr");
    newTR.setAttribute("class", "zebra_0");
    newTR.style.border = "1px black solid"; // <-- here

    //Create the first TD for the Label (Subject Name Column)
    const labelTD = document.createElement("td");
    labelTD.setAttribute("colspan", "2"); // Span across the name and month columns

    labelTD.innerHTML = `<strong>Visu vidējais (neieskaitot: a, i, %):</strong>`;
    newTR.appendChild(labelTD);

    //Create the second TD for the Value (Average Column)
    const valueTD = document.createElement("td");

    valueTD.style.display = "flex";
    valueTD.style.flexWrap = "nowrap";
    valueTD.style.flexDirection = "row";
    valueTD.style.padding = "6px 0px 6px 4px";

    // Create teh actual value container
    const valueSpan = document.createElement("span");
    valueSpan.textContent = formattedTotalAverage;
    valueSpan.style.textAlign = "center";
    valueSpan.style.height = "100%";
    valueSpan.style.width = "100%";
    valueSpan.style.flexBasis = "50%";

    // Create padding span

    const paddingSpan = document.createElement("span");
    paddingSpan.style.height = "100%";
    paddingSpan.style.width = "100%";
    paddingSpan.style.flexBasis = "50%";

    // add new items
    valueTD.appendChild(paddingSpan);
    valueTD.appendChild(valueSpan);
    newTR.appendChild(valueTD);

    // Inject the new row into the tfoot
    // Clear any existing content in tfoot before appending
    gradeTFoot.innerHTML = "";
    gradeTFoot.appendChild(newTR);

    return true;
}

//
// NAV BAR
//

function createSideBar() {
    if (document.querySelector("#zmt-sidebar")) return;

    const sidebar = document.createElement("div");
    sidebar.id = "zmt-sidebar";

    sidebar.innerHTML = `
        <div id="zmt-sidebar-top">
            
        </div>
        <div id="zmt-sidebar-mid">
            <a href="?lessonsplan">Sākums</a>
            <a href="?lessonsplan">Dienasgrāmata</a>
            <a href="?viewgrades/period">Atzīmes</a>
            <a href="?messagingWeb">Vēstules</a>
            <a href="?assignments">Uzdevumi</a>
            <a href="?files">Faili</a>
            <a href="?viewgrades/periodAttendance">Kavējumi</a>
            <a href="?statistic/show">Statistika</a>
            <a href="?journal/notes">Zīmes</a>
            <a href="?reportperiod">Liecība</a>
        </div>
        <div id="zmt-sidebar-bot">
            <a id="zmt-sidebar-end-work" href="?world/bye">Beigt Darbu!</a>
        </div>
    `;
    document.body.appendChild(sidebar);
}

function createDesktopNav() {
    if (document.querySelector("#zmt-desktop-nav")) return;

    const nav = document.createElement("div");
    nav.id = "zmt-desktop-nav";

    nav.innerHTML = `
        <div class="zmt-left">
            <a href=?profile><span class="logo"></span></a>
        </div>
        <div class="zmt-center">
            <a href="?lessonsplan">Dienasgrāmata</a>
            <a href="?viewgrades/period">Atzīmes</a>
            <a href="?messagingWeb">Vēstules</a>
            <a href="?assignments">Uzdevumi</a>
            <a href="?files">Faili</a>
        </div>
        <div class="zmt-right">
            <a id="zmt-desktop-modal-btn" href="#"><img src="${runtime.runtime.getURL("img/list.png")}"></a>
        </div>
    `;

    document.body.prepend(nav); // append at the start / top
}

function createNav() {
    if (document.querySelector("#zmt-nav")) return;

    const nav = document.createElement("div");
    nav.id = "zmt-nav";

    nav.innerHTML = `
        <a href="?profile"><img class="nav-img" src="${runtime.runtime.getURL("img/home.png")}"></a>
        <a href="?lessonsplan"><img class="nav-img" src="${runtime.runtime.getURL("img/calendar.png")}"></a>
        <a href="?messagingWeb"><img class="nav-img" src="${runtime.runtime.getURL("img/mail.png")}"></a>
        <a href="?viewgrades/period"><img class="nav-img" src="${runtime.runtime.getURL("img/marking.png")}"></a>
        <a href="#" id="zmt-modal-btn"><img class="nav-img" src="${runtime.runtime.getURL("img/list.png")}"></a>
    `;
    document.body.appendChild(nav);
}

function handleNav() {
    const desktop = document.querySelector("#zmt-desktop-nav");
    const mobile = document.querySelector("#zmt-nav");
    const sidebar = document.querySelector("#zmt-sidebar");

    if (window.innerWidth <= 768) {
        if (desktop) {
            desktop.remove();
        }
        if (!mobile) {
            createNav();
        }
    } else {
        if (mobile) {
            mobile.remove();
        }
        if (!desktop) {
            createDesktopNav();
        }
    }

    if (!sidebar) {
        createSideBar();
    }
}

// Injects a lot of html stuff into the webpage
function injectContent() {
    const currentURL = window.location.href;
    handleCSS(currentURL);
    let stopPolling = false;

    //  Homepage & Topbar Injection
    const homepageLeftBar = document.querySelector("#profile_left_data > table > tbody > tr > td");

    if (homepageLeftBar) {
        // ... (existing homepage content injection logic)
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

                let topbarDiv = document.querySelector("#header-buttons");
                socialBtnsDiv.appendChild(topbarDiv);

                if (!currentURL.includes("mykoob.lv/?viewgrades/period")) {
                    stopPolling = true;
                }
            }
        }
    }

    //  Footer Injection
    const footer = document.querySelector("#foot > #footer");
    if (footer) {
        if (footer.childElementCount < 3) {
            const zmtVersionDiv = document.createElement("div");
            footer.appendChild(zmtVersionDiv);
            zmtVersionDiv.setAttribute("id", "zmtVersion");

            zmtVersionDiv.innerText = `Zird MyKoob Tools Version: ${zmtVersion}`;
        }
    }

    //  Grade Calculator Integration
    if (currentURL.includes("mykoob.lv/?viewgrades/period")) {
        const calculationSucceeded = calculateAndInjectGrades();

        if (calculationSucceeded) {
            stopPolling = true;
        }
    }

    //  Final Polling Stop Check
    if (stopPolling) {
        clearInterval(pollInterval);
    }
}

pollInterval = setInterval(injectContent, 500);

// css file injection
function injectCSS(fileName) {
    const existing = document.querySelector(`link[data-zmt="${fileName}"]`);
    const runtime = typeof browser !== "undefined" ? browser : chrome; // if undefined set it to chrome, otherwise the found browser

    if (existing) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = runtime.runtime.getURL(`css/${fileName}`);
    link.setAttribute("data-zmt", fileName);

    document.head.appendChild(link);
}
function handleCSS(url) {
    // Always load global
    injectCSS("global.css");

    // Page-specific
    if (url.includes("?viewgrades")) {
        injectCSS("grades.css");
    } else if (url.includes("?assignments.css")) {
        injectCSS("assignments.css");
    } else if (url.includes("?messagingWeb")) {
        injectCSS("chat.css");
    } else if (url.includes("?lessonsplan")) {
        injectCSS("lessonplan.css");
    } else {
        injectCSS("homepage.css");
    }
}

// add in modern html mobile viewports
if (!document.querySelector('meta[name="viewport"]')) {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(meta);
}

handleNav(); // run handleNav at the start and never again
createSideBar();
// if the user resizes their tab
window.addEventListener("resize", handleNav);

// for user that clicks outside the sidebar
document.addEventListener("click", e => {
    const sidebar = document.querySelector("#zmt-sidebar");
    if (!sidebar) return;

    const hamburger = e.target.closest("#zmt-modal-btn, #zmt-desktop-modal-btn");

    if (hamburger) {
        e.preventDefault();
        e.stopPropagation();
        sidebar.classList.toggle("open");
        return;
    }

    if (!sidebar.contains(e.target)) {
        sidebar.classList.remove("open");
    }
});
