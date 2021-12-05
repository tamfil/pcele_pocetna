let = 0;
function pretplata(){

   let div = document.getElementById("pretplata")

   

    console.log(div);

    if(let === 0){
        div.innerHTML += `<br>`;
        let tekst = document.createElement("label");
        
        tekst.textContent = "Unesite email";
        
        div.appendChild(tekst);
        div.innerHTML += `<br>`;
        
        let unos = document.createElement("input");
        unos.classList.add("zdravo")
        unos.type = "text";
        unos.placeholder = "Unesite Vas email."
        div.appendChild(unos);
        console.log(unos.value);
        
        let dugme = document.createElement("button");
        dugme.innerText = "Pretplata";
        dugme.addEventListener("click", () => {
            
            let tekst = document.getElementsByClassName('zdravo')[0].value;
            if(tekst == ""){
                alert("unesite mail")
            }else{
            alert("uspresno ste se pretplatili");}
        });
        div.innerHTML += `<br>`;
        
        div.appendChild(dugme); 
        window.scrollTo(0, document.body.scrollHeight);
    }

        let++;

    

}

