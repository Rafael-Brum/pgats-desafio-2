const usuarios = [ 
    {
        id      : 1,
        nome    : 'Rafael' , 
        email   : 'rafael@email.com', 
        senha   : '1234',
        expirado: false,
    },
    {
        id      : 2,
        nome    : 'Julio' , 
        email   : 'julio@email.com', 
        senha   : '4321',
        expirado: false,
    },
    {
        id      : 3,
        nome    : 'Luciana' , 
        email   : 'luciana@email.com', 
        senha   : '4321a',
        expirado: true,
    }
 ]

 export function realizarLogin(email,senha){
    let mensagem = 'Credenciais estão incorretas';
    usuarios.forEach(usuario => {
        if(usuario.email == email && usuario.senha == senha){
            if(usuario.expirado === true){
                mensagem = 'Renove suas credenciais';
            }else{
                mensagem = 'Login realizado com sucesso';
            }
        }
    });
    return mensagem;
 }