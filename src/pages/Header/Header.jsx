import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("logado") === "true";
    setLogado(status);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("logado");
    setLogado(false);
    window.location.reload();
  };

  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/estante"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Estante Virtual
        </NavLink>
        {logado ? (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLogout();
            }}
            className={styles.logoutBtn}
          >
            Sair
          </a>
        ) : (
          // <button onClick={handleLogout}>Sair</button>
          <a href="/login.html" className={styles.loginLink}>
            Login
          </a>
        )}
      </nav>
    </header>
  );
}
