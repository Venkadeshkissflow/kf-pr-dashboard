import styles from "./toolbar.module.css";

export default function Toolbar({ title, handleSearch, searchTerm }) {
  return (
    <section>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-grey font-bold">{title}</h1>
        <div>
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className={styles.searchInput}
          />
        </div>
      </div>
    </section>
  );
}
