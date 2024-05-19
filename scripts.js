// Adiciona um listener de evento ao formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário de recarregar a página
    event.preventDefault();

    // Obtém os valores dos campos de usuário e senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de validação de login (deve ser substituída por uma validação real)
    if (username === 'admin' && password === '123456') {
        alert('Login bem-sucedido!');
        // Redireciona para a página principal ou dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuário ou senha inválidos.');
    }
});