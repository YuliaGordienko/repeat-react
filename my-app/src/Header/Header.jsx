import s from "./Header.module.css";
export default function Header({ title, name }) {
  return (
    <header>
      <h1 className={s.title}>{title}</h1>
      <p>Welcome{name}</p>
    </header>
  );
}
