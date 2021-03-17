let a = '';
let b = '';
let sk = [];
let ats;

// funkcija atgavinanti skaiciu klaviatura bei parastas aritmetines funkcijas:

function sendNum(reiksme){

    sk.push(reiksme);

    if(sk.length != 1){
            a = '';
            document.getElementById('display').innerHTML = a;
    }
    
    for (let i = 0; i < sk.length; i++) {
        a = a + sk[i];
    }

document.getElementById('display').innerHTML = a;
}

// funkcija ijungianti ligybes zenkla:

function equalTo() {
        document.getElementById('display').innerHTML = '';

        for (let i = 0; i < sk.length; i++) {
            b = b + sk[i];
        }

        ats = eval(b);

        document.getElementById('display').innerHTML = ats;

        while (sk.length > 0) {
            sk.pop(); // ismata ivesta elementa is ekrano;
        }

        sk.push(ats.toString());

    }

    //istrinimo funkcija AC:

    function clearScr() {
        document.getElementById('display').innerHTML = '';

        while (sk.length > 0) {
            sk.pop();
        }

        a = '';
        b = '';

    }

    //funkcija del:

    function delRez() {
        sk.pop(); // pasalina paskutini masyvo elementa

        document.getElementById('display').innerHTML = sk.join(''); // sujungia likusius masyvo elementus
    }
