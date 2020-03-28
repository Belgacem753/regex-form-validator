// validation script here

$( document ).ready(function() {
 let $userName = $('#user').val(),$password =$("#password").val(),$email=$("email").val(),$tel=("#tel").val(),$card=$("#card").val();
 let regxUsername=/[a-z]{5,12}\d+/gi;   
 let regxPsw= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,12}$/g;
 let regxTel= /00216[0-9]{8}/g;
 let regxEmail=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g
});
