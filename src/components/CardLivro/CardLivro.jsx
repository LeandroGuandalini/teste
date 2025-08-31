import { Link } from "react-router-dom";
import styles from "./CardLivro.module.css";

export default function CardLivro({ livro }) {
  const info = livro.volumeInfo;

  return (
    <div className={styles.card}>
      <img
        src={info.imageLinks?.thumbnail || "https://placehold.co/128x192"}
        alt={info.title}
        className={styles.imagem}
      />
      <h3 className={styles.titulo}>{info.title}</h3>
      <p className={styles.autor}>
        {info.authors?.join(", ") || "Autor desconhecido"}
      </p>
      <Link to={`/livro/${livro.id}`} className={styles.detalhesLink}>
        Ver detalhes
      </Link>
    </div>
  );
}
