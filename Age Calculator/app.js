let userinput = document.getElementById("dob");
userinput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let dob = new Date(userinput.value);
    let today = new Date(); //5/21/2005 1:45:67
    
    let y1 = dob.getFullYear(); //2000
    let m1 = dob.getMonth(); //4
    let d1 = dob.getDate(); //24

    let y2 = today.getFullYear(); //2024
    let m2 = today.getMonth(); //8
    let d2 = today.getDate(); //20

    let y3 = y2 - y1; //4
    let m3 = m2 - m1; //3
    let d3 = d2 - d1; // -4

    // Adjust for negative days and months
    if (d3 < 0) { -4<0
        m3--; //7
        d3 += getDaysInMonth(y2, m2); //31-4=26
    }
    if (m3 < 0) { //5-12=-7
        y3--; //5 
        m3 += 12; //-7+12=5 months
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
});

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
