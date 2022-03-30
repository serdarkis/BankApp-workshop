const activeUserEl = document.getElementsByClassName("active-account")[0]
const activeUserBalanceEl = document.getElementsByClassName("total-money")[0]
const balanceInputEl = document.getElementsByClassName("money-input")[0]
const accounts=[]
let activeUser = null

function createAccount(){
    let name= prompt("Hesap adı girin").trim();
    let password= prompt("sifrenizi giriniz")
    if(name === ""|| password ===""){
        alert("Hesap adı veya şifre girmediniz");
           return;
       }

    for(let i=0; i<accounts.length; i++){
        if(accounts[i].name === name){
            alert("Bu hesap adi kullanılmaktadir");
            return;
        }
    }

    let newAccount ={

        id: accounts.length +1,
        name: name,
        password: password,
        balance: 0


    }
    accounts.push(newAccount)
    alert("Yeni Kullanıcı Eklendi.")
}
function changeAccount(){
    let name= prompt("Hesap adı girin");
    let password= prompt("sifrenizi giriniz");

    let isUserFound =false;

    for(let i=0;i<accounts.length;i++){
        if(name==accounts[i].name && password==accounts[i].password){
            //we found user
            activeUser=accounts[i]
            updateAccount(activeUser)
            console.log("Fount user", activeUser)
            alert("Giriş Başarılı")
            isUserFound = true;
            break;
        }

    if(!isUserFound) alert("kullanıcı bulunamadı");
    }

}
function updateAccount(user){
    activeUserEl.innerHTML = `Account Name : ${user.name}`;
    activeUserBalanceEl.innerHTML = `Total Balance : ${user.balance}`;


}

function deposit( ){
    let amount = parseInt(balanceInputEl.value);
    activeUser.balance+= amount;
    alert("Hesaba "+ amount + " ekledi" );
    updateAccount(activeUser);

}

function withdraw( ){
    let amount = parseInt(balanceInputEl.value);
    activeUser.balance-= amount;
    alert("Hesaptan "+ amount + " çekildi" );
    updateAccount(activeUser);

}
