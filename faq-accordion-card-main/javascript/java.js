function mostra(one,id, img){
    if (document.getElementById(id).style.display == "inline"){
        document.getElementById(id).style.display = "none"
        document.getElementById(img).style.transform= 'rotate(360deg)'
        var text = document.getElementById(one)
        text.style.fontWeight= "400"
        text.style.color ='hsl(240, 6%, 50%)'

    } else{
        document.getElementById(id).style.display = "inline"
        document.getElementById(img).style.transform= 'rotate(180deg)'
        var text = document.getElementById(one)
        text.style.fontWeight= "700"
        text.style.color ='hsl(238, 29%, 16%)'

    }
    
}
