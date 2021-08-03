const format = (choice) => {
    const result = document.getElementById("result");
    const text = document.querySelector(".desc").value;
    result.innerHTML = choice + text.toUpperCase().replace(/ /g, "_");
}   

const copiar = () => {
    const text = document.getElementById("result").innerHTML ;
    const alert = document.getElementById("alert");
    if(text !== '') {
        navigator.clipboard.writeText(text);
        showAlert(alert);
    }
} 

const showAlert = (element) => {
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}