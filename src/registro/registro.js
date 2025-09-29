function ConfirmarSenha(item){
 item.setCustomValidity('');
 item.checkValidity();

 if(item == confSenha){
    if(item.value === senha.value){
        item.setCustomValidity('');
    }else{
        item.setCustomValidity('As senhas informadas não são correspondentes.')
    }
 }
}