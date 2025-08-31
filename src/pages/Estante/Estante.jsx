import { useEffect, useState } from "react";
import CardLivro from "../../components/CardLivro/CardLivro";
import styles from "./Estante.module.css";

export default function Estante() {
  const [livrosSalvos, setLivrosSalvos] = useState([]);
  useEffect(() => {
    const salvo = localStorage.getItem("estanteLivros");
    if (salvo) {
      setLivrosSalvos(JSON.parse(salvo));
    }
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Minha Estante Virtual</h1>
      {livrosSalvos.length === 0 && (
        <p className={styles.plceHolder}>Você não salvou nenhum livro ainda.</p>
      )}
      <section className={styles.grid}>
        {livrosSalvos.map((livro) => (
          <CardLivro key={livro.id} livro={livro} />
        ))}
      </section>
    </main>
  );
}
