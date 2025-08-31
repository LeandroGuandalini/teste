function fazerLogin() {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("senha").value;

    if (user === "leandro" && pass === "1234") {
      localStorage.setItem("logado", "true");
      window.location.href = "/";
    } else {
      alert("login inválido");
    }
  });

  //   const user = document.getElementById("usuario").value;
  //   const pass = document.getElementById("senha").value;

  //   if (user === "leandro" && pass === "1234") {
  //     localStorage.setItem("logado", "true");
  //     window.location.href = "/";
  //   } else {
  //     alert("login inválido");
  //   }
}
