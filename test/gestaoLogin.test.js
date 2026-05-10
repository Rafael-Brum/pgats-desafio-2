import { realizarLogin }  from "../src/gestaoLogin.js";
import assert from "assert";

describe("Testes para a Gestao Login", function() {
    describe("Testes para a função realizarLogin", function(){
        it("Deve realizar o login com sucesso", function(){
            //Arrange
            const email = 'rafael@email.com'
            const senha = '1234'
            const mensagemEsperada = 'Login realizado com sucesso'

            // Act
            const mensagemEncontrada = realizarLogin(email,senha);

            //Assert
            assert.equal(mensagemEncontrada,mensagemEsperada)
        })
        it("Deve realizar teste de validação de credencial expirada", function(){
            //Arrange
            const email = 'luciana@email.com'
            const senha = '4321a'
            const mensagemEsperada = 'Renove suas credenciais'

            // Act
            const mensagemEncontrada = realizarLogin(email,senha);

            //Assert
            assert.equal(mensagemEncontrada,mensagemEsperada)
        })
        it("Deve realizar teste de validação quando o usuário não for encontrado", function(){
            //Arrange
            const email = 'sergio@email.com'
            const senha = '4321a'
            const mensagemEsperada = 'Credenciais estão incorretas'

            // Act
            const mensagemEncontrada = realizarLogin(email,senha);

            //Assert
            assert.equal(mensagemEncontrada,mensagemEsperada)
        })
        it("Deve realizar teste de validação quando a senha for incorreta", function(){
            //Arrange
            const email = 'luciana@email.com'
            const senha = '1234'
            const mensagemEsperada = 'Credenciais estão incorretas'

            // Act
            const mensagemEncontrada = realizarLogin(email,senha);

            //Assert
            assert.equal(mensagemEncontrada,mensagemEsperada)
        })
    })
})