import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detalhes.module.css";

export default function Detalhes() {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLivro() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        const data = await res.json();
        setLivro(data);
      } catch (error) {
        console.error("Erro ao carregar detalhes: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLivro();
  }, [id]);
  if (loading) return <p className={styles.loading}>Carregando detalhes....</p>;

  if (!livro || livro.error) {
    return <p className={styles.erro}>Livro não encontrado.</p>;
  }
  const info = livro.volumeInfo;

  return (
    <main className={styles.main}>
      <Link to="/" className={styles.voltar}>
        &larr; Voltar
      </Link>
      <h1 className={styles.titulo}>
        {info.title || "Título não disponível."}
      </h1>
      <p className={styles.autor}>
        {info.authors?.join(", ") || "Autor desconhecido"}
      </p>
      <img
        src={info.imageLinks?.thumbnail || "https://placehold.co/128x192"}
        alt={info.title || "Capa do Livro."}
        className={styles.capa}
      />
      <p
        className={styles.descricao}
        dangerouslySetInnerHTML={{
          __html: info.description || "<i>Sem descrição</i>",
        }}
      ></p>
    </main>
  );
}
