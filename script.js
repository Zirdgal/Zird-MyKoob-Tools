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

let pollInterval;

// for Grade Calculation and Injection
function calculateAndInjectGrades() {
    const gradeMonthContainer = document.querySelector("#gradesContent > div > div:nth-child(1) > table > tbody > tr > td:nth-child(2) > div > table > tbody");
    const gradeAverageContainer = document.querySelector("#gradesContent > div > div:nth-child(1) > table > tbody > tr > td:nth-child(3) > table > tbody");
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

        gradeCells.forEach((cellElement) => {
            
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
    let formattedTotalAverage = (totalAverage > 0) ? totalAverage.toFixed(2) : "";

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
    gradeTFoot.innerHTML = ''; 
    gradeTFoot.appendChild(newTR);



    return true; 
}

// Injects a lot of html stuff into the webpage
function injectContent() {
    const currentURL = window.location.href;
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
            };
        };
    };

    //  Footer Injection 
    const footer = document.querySelector("#foot > #footer");
    if (footer) {
        if (footer.childElementCount < 3) {
            const zmtVersionDiv = document.createElement("div");
            footer.appendChild(zmtVersionDiv);
            zmtVersionDiv.setAttribute("id", "zmtVersion");

            zmtVersionDiv.innerText = `Zird MyKoob Tools Version: ${zmtVersion}`;
        };
    };
    
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

pollInterval = setInterval(injectContent, 100);


