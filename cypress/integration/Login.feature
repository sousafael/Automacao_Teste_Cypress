Feature: Login site Lojinha
    COMO um usuario EU QUERO acessar a página secreta a partir do site
    da lojinha A FIM de ver meus ultimos produtos cadastrados
    
    Scenario: Fazer o Login no site da lojinha
        Given acesso o site da lojinha
        When digita  o login
        Then deverá visualizar a Pagina Secreta