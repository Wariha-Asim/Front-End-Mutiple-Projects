let userinput = document.getElementById("dob");
userinput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let dob = new Date(userinput.value);
    let today = new Date(); 
    
    let y1 = dob.getFullYear(); 
    let m1 = dob.getMonth(); 
    let d1 = dob.getDate(); 

    let y2 = today.getFullYear(); 
    let m2 = today.getMonth(); 
    let d2 = today.getDate(); 

    let y3 = y2 - y1; 
    let m3 = m2 - m1; 
    let d3 = d2 - d1; 

    
    if (d3 < 0) { -4<0
        m3--; //7
        d3 += getDaysInMonth(y2, m2); 
    }
    if (m3 < 0) { 
        y3--; 
        m3 += 12; 
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
});

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
