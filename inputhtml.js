document.querySelector("#fileInput")


document.querySelector("#uploadBtn").addEventListener("click", function() {
    document.querySelector("#fileInput").click();
});
document.querySelector("#fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    console.log("Selected file:", file);
});
document.querySelector("#fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        document.querySelector("#uploadBtn").textContent =  file.name;    
    
    }    
});
