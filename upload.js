let file = document.querySelector("input");
let image = document.querySelector("img");
let url="https://script.google.com/macros/s/AKfycbx0k-JorY3zjQO4T60vyaJ2C-WweK-J4sTO4z65v-5j60XXlj-VIydId-WcYS8X5hcD/exec";

file.addEventListener('change', () =>{
    let fileReader = new FileReader();
    fileReader.addEventListener('loadend', () =>{
        let choice = fileReader.result;
        image.src = choice;
        let simplify= choice.split("base64," )[1];

        let object = {
            base64: simplify,
            type: file.files[0].type,
            name:file.files[0].name
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify(object)
        })
        .then(r => r.text())
        .then(data=> console.log(data))
    })
    fileReader.readAsDataURL(file.files[0]);

})

var upload = document.getElementById('upload');
upload.addEventListener("click", function(){
    location.replace("final.html");
})