var tdee, over, food;
function boy(){
    var age, height, weight;
    age=document.getElementById('age').value;
    height=document.getElementById('height').value;
    weight=document.getElementById('weight').value;
    document.getElementById("noexport").innerHTML=1.2*(10*parseFloat(weight)+ 6.25*parseFloat(height)-5*parseFloat(age)+5);
    document.getElementById("some").innerHTML= 1.4*(10*parseFloat(weight)+ 6.25*parseFloat(height)-5*parseFloat(age)+5);
    document.getElementById("always").innerHTML= 1.6*(10*parseFloat(weight)+ 6.25*parseFloat(height)-5*parseFloat(age)+5);
    tdee=1.2*(10*parseFloat(weight)+ 6.25*parseFloat(height)-5*parseFloat(age)+5);
    over=1.6*(10*parseFloat(weight)+ 6.25*parseFloat(height)-5*parseFloat(age)+5);
    // (10 × 公斤體重) + (6.25 × 公分身高) - (5 × 年齡歲數) + 5
}

function girl(){
    var age, height, weight;
    age=document.getElementById('age').value;
    height=document.getElementById('height').value;
    weight=document.getElementById('weight').value;
    document.getElementById("noexport").innerHTML=1.2*(10*parseFloat(weight)+ 6.25*parseFloat(height)-5*parseFloat(age)-161);
    document.getElementById("some").innerHTML= 1.4*(10*parseFloat(weight)+ 6.25*parseFloat(height)-5*parseFloat(age)-161);
    document.getElementById("always").innerHTML= 1.6*(10*parseFloat(weight)+ 6.25*parseFloat(height)-5*parseFloat(age)-161);
    tdee=1.2*(10*parseFloat(weight)+ 6.25*parseFloat(height)-5*parseFloat(age)-161);
    over= 1.6*(10*parseFloat(weight)+ 6.25*parseFloat(height)-5*parseFloat(age)-161);
    // (10 × 公斤體重) + (6.25 × 公分身高) - (5 × 年齡歲數) – 161
}

function total(){
    var one, two, three, four, five, six, seven, eight, nine;
    one=document.getElementById('one').value;
    two=document.getElementById('two').value;
    three=document.getElementById('three').value;
    four=document.getElementById('four').value;
    five=document.getElementById('five').value;
    six=document.getElementById('six').value;
    seven=document.getElementById('seven').value;
    eight=document.getElementById('eight').value;
    nine=document.getElementById('nine').value;
    food=parseFloat(one)+parseFloat(two)+parseFloat(three)+parseFloat(four)+parseFloat(five)+parseFloat(six)+parseFloat(seven)+parseFloat(eight)+parseFloat(nine);
    document.getElementById("t").innerHTML=parseFloat(one)+parseFloat(two)+parseFloat(three)+parseFloat(four)+parseFloat(five)+parseFloat(six)+parseFloat(seven)+parseFloat(eight)+parseFloat(nine);
}

function range(){
    if(tdee>food){
        var g=document.getElementById("output");
        g.innerHTML="<img src='little.jpg'/>"
    }
    else if(food>over){
        var g=document.getElementById("output");
        g.innerHTML="<img src='pig.jpg'/>"
    }
    else {
        var g=document.getElementById("output");
        g.innerHTML="<img src='ok.jpg'/>"
    }
    
    
    // var a=document.createElement("img");
    // a.src='e.jpg';
    // img.style.display="block";
    // document.body.appendChild(a);
    
}




