registerForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita que a página recarregue
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Enviar os dados para o backend
    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    alert(data.message); // Mostra a resposta do servidor
});
