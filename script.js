let display=document.getElementById('display');

function addHoverEffect(button) {
    button.classList.add('hover');
    setTimeout(() => button.classList.remove('hover'), 200); // Removes the class after 200ms
}

function appendValue(value){
    if(display.innerText==='0'){
        display.innerText=value;
    }
    else{
        display.innerText +=value;
    }
}

function clearDisplay(){
    display.innerText='0';
}

function deleteLast(){
    if(display.innerText==='ERROR'){
        clearDisplay();
    }
    display.innerText=display.innerText.slice(0,-1) || '0';
}

function calculate(){
    try{
        const result=eval(display.innerText);
        if(result===Infinity || result===-Infinity){
            display.innerText='ERROR';
            setTimeout(()=>{display.innerText='0'},500);
        }
        else{
            display.innerText=result||'0';
        }
    }
    catch(error){            
        display.innerText='ERROR';
        setTimeout(()=>{display.innerText='0'},500);

    }
}

document.addEventListener('keydown',(event)=>{
    const key=event.key;
    const button=document.querySelector(`button[data-key="${key}"]`);

    if(key>=0 && key<=9){
        appendValue(key);
    }
    else if(['+', '-', '*', '/'].includes(key)){
        appendValue(key);
        addHoverEffect(button);
    }
    else if(key === 'Enter'){
        event.preventDefault();
        calculate();
    }
    else if(key === 'Backspace'){
        deleteLast();
    }
    else if(key === 'Delete'){
        clearDisplay();
    }
    else if(key === '.'){
        appendValue('.');
    }
    if (button) {
        addHoverEffect(button);
    }
});


