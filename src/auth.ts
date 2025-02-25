async function getAuthToken(): Promise<string> {
    const token = process.env.CODEIUM_TOKEN;
    if (!token) {
        throw new Error('Token do Codeium não encontrado. Configure a variável de ambiente CODEIUM_TOKEN');
    }
    return token;
}

export function getHeaders(): HeadersInit {
    const token = process.env.CODEIUM_TOKEN;
    if (!token) {
        throw new Error('Token do Codeium não encontrado');
    }
    return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
}

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
async function getAuthToken(): Promise<string> {
    const token = process.env.CODEIUM_TOKEN;
    if (!token) {
        throw new Error('Token do Codeium não encontrado. Configure a variável de ambiente CODEIUM_TOKEN');
    }
    return token;
}

export function getHeaders(): HeadersInit {
    const token = process.env.CODEIUM_TOKEN;
    if (!token) {
        throw new Error('Token do Codeium não encontrado');
    }
    return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
}

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

// const data = await response.json();
// return data.token;

// Opção 2: Obter da interface web
// Faça login em https://codeium.com
// Vá para Configurações -> API Tokens
// Copie o token gerado

// Opção 1: Obter via API
// const response = await fetch('https://api.codeium.com/auth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     username: 'seu_email@exemplo.com',
//     password: 'sua_senha'
//   })
// });

//