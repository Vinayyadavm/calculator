function add() {
    var act = f.ddd.value;
    var b = act.charAt(act.length - 1);
    
    if (isOperator(b)) {
        f.ddd.value = act.substring(0, act.length - 1);
    }
    
    f.ddd.value += '+';
}

function sub() {
    var act = f.ddd.value;
    var b = act.charAt(act.length - 1);
    
    if (isOperator(b)) {
        f.ddd.value = act.substring(0, act.length - 1);
    }
    
    f.ddd.value += '-';
}

function di() {
    var act = f.ddd.value;
    var b = act.charAt(act.length - 1);
    
    if (isOperator(b)) {
        f.ddd.value = act.substring(0, act.length - 1);
    }
    
    f.ddd.value += '/';
}

function mul() {
    var act = f.ddd.value;
    var b = act.charAt(act.length - 1);
    
    if (isOperator(b)) {
        f.ddd.value = act.substring(0, act.length - 1);
    }
    
    f.ddd.value += '*';
}

function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

function calculate() {
    try {
        f.ddd.value = eval(f.ddd.value);
    } catch (error) {
        f.ddd.value = 'Error';
    }
}
