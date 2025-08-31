import { useState } from "react";
import CardLivro from "../../components/CardLivro/CardLivro";
import styles from "./Home.module.css";

export default function Home() {
  const [busca, setBusca] = useState("");
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarLivros = async () => {
    if (!busca.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          busca
        )}`
      );
      const data = await res.json();
      setLivros(data.items || []);
    } catch (error) {
      console.error("Erro ao buscar Livros: ", error);
      setLivros([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Explorador de Livros</h1>
      <div className={styles.buscarContainer}>
        <input
          type="text"
          placeholder="Busque por título, autor ou palavra-chave"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className={styles.input}
          onKeyDown={(e) => e.key === "Enter" && buscarLivros()}
        />
        <button onClick={buscarLivros} className={styles.botao}>
          Buscar
        </button>
      </div>
      {loading && <p>Carregando Resultados...</p>}

      <section className={styles.grid}>
        {livros.map((livro) => (
          <CardLivro key={livro.id} livro={livro} />
        ))}
      </section>
    </main>
  );
}
