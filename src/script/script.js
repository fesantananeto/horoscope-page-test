function horoscope(){
        
    let dia = document.getElementById("day").value;
    let mes = document.getElementById("month").value;
    let signo = document.getElementById("result");
    let re = ""
    
   

    if ((dia >= 21 && dia <=31 && mes == 3) || (dia >= 1 && dia <=20 && mes == 4)){
        signo.textContent = "Áries";
        re= "Áries"
    }else if ((dia >= 21 && dia <=30 && mes == 4) || (dia >= 1 && dia <=20 && mes == 5)) {
        signo.textContent = "Touro";
        re= "Touro";
    }else if ((dia >= 21 && dia <=31 && mes == 5) || (dia >= 1 && dia <=20 && mes == 6)) {
        signo.textContent = "Gêmeos";
        re= "Gêmeos" ;
    }else if ((dia >= 21 && dia <=30 && mes == 6) || (dia >= 1 && dia <=22 && mes == 7)) {
        signo.textContent = "Câncer";
        re= "Câncer";
    }else if ((dia >= 23 && dia <=31 && mes == 7) || (dia >= 1 && dia <=22 && mes == 8)) {
        signo.textContent = "Leão";
        re= "Leão";
    }else if ((dia >= 23 && dia <=31 && mes == 8) || (dia >= 1 && dia <=22 && mes == 9)) {
        signo.textContent = "Virgem";
        re= "Virgem";
    }else if ((dia >= 23 && dia <=30 && mes == 9) || (dia >= 1 && dia <=22 && mes == 10)) {
        signo.textContent = "Libra";
        re= "Libra";
    }else if ((dia >= 23 && dia <=31 && mes == 10) || (dia >= 1 && dia <=21 && mes == 11)) {
        signo.textContent = "Escorpião";
        re= "Escorpião";
    }else if ((dia >= 22 && dia <=30 && mes == 11) || (dia >= 1 && dia <=21 && mes == 12)) {
        signo.textContent = "Sargitário";
        re= "Sargitário";
    }else if ((dia >= 22 && dia <=31 && mes == 12) || (dia >= 1 && dia <=20 && mes == 1)) {
        signo.textContent = "Capricórnio";
        re= "Capricórnio";
    }else if ((dia >= 21 && dia <=31 && mes == 1) || (dia >= 1 && dia <=18 && mes == 2)) {
        signo.textContent = "Aquário";
        re= "Aquário";
    }else if ((dia >= 19 && dia <=29 && mes == 2) || (dia >= 1 && dia <=20 && mes == 3)) {
        signo.textContent = "Peixes";
        re= "Peixes";
    }else {
        signo.textContent = "Data Inválida!";
    }
   
    if (re==="Gêmeos"){
    
    document.getElementById("imageoption").src = "assets/images/gemeos.png";
    document.getElementById("link").href ="https://astrologialuzesombra.com.br/horoscopo/signo-gemeos/";    
    
    
    

    }else if (re==="Câncer"){
    document.getElementById("imageoption").src = "assets/images/cancer.png";
    document.getElementById("link").href ="https://astrologialuzesombra.com.br/horoscopo/signo-cancer/";
    
    
        
    }else if (re==="Leão"){
    document.getElementById("imageoption").src = "assets/images/leao.png";
    document.getElementById("link").href ="https://astrologialuzesombra.com.br/horoscopo/signo-leao/";
    
    
        
    }else if (re==="Libra"){
    document.getElementById("imageoption").src = "assets/images/libra.png";
    document.getElementById("link").href ="https://astrologialuzesombra.com.br/horoscopo/signo-libra/";
    
    
        
    }else if (re==="Peixes"){
    document.getElementById("imageoption").src = "assets/images/peixes.png";
    document.getElementById("link").href ="https://astrologialuzesombra.com.br/horoscopo/signo-peixes/";
    
    
        
    }else if (re==="Aquário"){
    document.getElementById("imageoption").src = "assets/images/aquario.png";
    document.getElementById("link").href ="https://astrologialuzesombra.com.br/horoscopo/signo-aquario/";
    
    
        
    }else if (re==="Sargitário"){
    document.getElementById("imageoption").src = "assets/images/sargitario.png";
    document.getElementById("link").href ="https://astrologialuzesombra.com.br/horoscopo/signo-sagitario/";
    
    
        
    }else if (re==="Escorpião"){
    document.getElementById("imageoption").src = "assets/images/escorpiao.png";
    document.getElementById("link").href ="https://astrologialuzesombra.com.br/horoscopo/signo-escorpiao/";
    
    
        
    }else if (re==="Virgem"){
    document.getElementById("imageoption").src = "assets/images/virgem.png";
    document.getElementById("link").href ="https://astrologialuzesombra.com.br/horoscopo/signo-virgem/";
    
    
        
    }else if (re==="Touro"){
    document.getElementById("imageoption").src = "assets/images/touro.png";
    document.getElementById("link").href ="https://astrologialuzesombra.com.br/horoscopo/signo-touro/";
    
    
        
    }else if (re==="Capricórnio"){
    document.getElementById("imageoption").src = "assets/images/capricornio.png";
    document.getElementById("link").href ="https://astrologialuzesombra.com.br/horoscopo/signo-capricornio/";
    
    
        
    }else if (re==="Áries"){
    document.getElementById("imageoption").src = "assets/images/aries.png";
    document.getElementById("link").href ="https://astrologialuzesombra.com.br/horoscopo/signo-aries/";
    
    
        
    }else{ document.getElementById("imageoption").src = "assets/images/errorface.png"
    
    

    }

    
}