
function validate1(){
    let firstNameIp=document.getElementById('first-name').value
    if(firstNameIp.length){
        document.getElementById('first-name-valid').style.display='block'
        document.getElementById('first-name-invalid').style.display='none'
    }
    else{
        document.getElementById('first-name-invalid').style.display='block'
        document.getElementById('first-name-valid').style.display='none'
        error=true
    }
}
function validate(){
let firstNameIp=document.getElementById('first-name').value
let lastNameIp=document.getElementById('last-name').value
let emailIp=document.getElementById('email').value
let cityIp=document.getElementById('city-name').value
let stateIp=document.getElementById('state-name').value
let zipIp=document.getElementById('zip').value
let tnCIp=document.getElementById('tnC').checked

let error=false

    if(firstNameIp.length){
        document.getElementById('first-name-valid').style.display='block'
        document.getElementById('first-name-invalid').style.display='none'
    }
    else{
        document.getElementById('first-name-invalid').style.display='block'
        document.getElementById('first-name-valid').style.display='none'
        error=true
    }

    if(tnCIp==false){
        error=true
        document.getElementById('tnC-valid').style.display='block'
    }
    else{
        document.getElementById('tnC-valid').style.display='none'
        
    }

    if(stateIp){
        document.getElementById('state-valid').style.display='block'
        document.getElementById('state-invalid').style.display='none'
    }
    else{
        document.getElementById('state-invalid').style.display='block'
        document.getElementById('state-valid').style.display='none'
        error=true
    }

    if(lastNameIp.length){
        document.getElementById('last-name-valid').style.display='block'
        document.getElementById('last-name-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('last-name-invalid').style.display='block'
        document.getElementById('last-name-valid').style.display='none'
    }

    if(cityIp.length>=3){
        document.getElementById('city-name-valid').style.display='block'
        document.getElementById('city-name-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('city-name-invalid').style.display='block'
        document.getElementById('city-name-valid').style.display='none'
    }

    var zipno = /^\d{6}$/;
    if(zipIp.match(zipno)){
        document.getElementById('zip-valid').style.display='block'
        document.getElementById('zip-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('zip-invalid').style.display='block'
        document.getElementById('zip-valid').style.display='none'
    }
    //console.log(firstNameIp,zipIp, lastNameIp,cityIp,emailIp,tnCIp,stateIp)
    //window.alert("Submitted")

    /*Email
    -whether exists?
    -@
    -.
    -after last . there should be atleast 2characters
    -1st char cant be @
    */
   if(emailIp && 
    emailIp.includes('@')&&
    emailIp.includes('.') && 
    (emailIp.lastIndexOf('.')<=emailIp.length-3) &&
    emailIp.indexOf('@')!==0
    ){
        document.getElementById('email-valid').style.display='block'
        document.getElementById('email-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('email-invalid').style.display='block'
        document.getElementById('email-valid').style.display='none'
    }

    

    if(!error){
        alert('Your details are saved')
        document.getElementById('first-name').value=''
        document.getElementById('last-name').value=''
        document.getElementById('email').value=''
        document.getElementById('city-name').value=''
        document.getElementById('state-name').value='None'
        document.getElementById('zip').value=''
        document.getElementById('tnC').checked=''

        document.getElementById('first-name-valid').style.display='none'
        document.getElementById('email-valid').style.display='none'
        document.getElementById('zip-valid').style.display='none'
        document.getElementById('state-valid').style.display='none'
        document.getElementById('tnC-valid').style.display='none'
        document.getElementById('last-name-valid').style.display='none'
        document.getElementById('city-name-valid').style.display='none'
    }

}