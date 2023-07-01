/*JS Document*/

/*Objetivo: Acessar programa via login*/


function verificar_acesso(){

    /*Declaração das variáveis*/
    var email;
    var senha;
    /*Entrada de dados*/
    
    email=document.f_login.f_email.value;
    senha=document.f_login.f_senha.value;

    /*Saída de dados*/
        
        if (email !== 'renata_venturim@hotmail.com'){
        
            window.alert('E mail não encontrado e/ou senha incorreta');
        }
    
            else {if(senha !=='1234'){
                window.alert('Acesso não autorizado');
                }   
                else{
                    window.alert('Acesso autorizado');
                }
            }
        }
    
