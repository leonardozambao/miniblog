import styles from "./Home.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";



const Home = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.home}>
      <section className={styles.header}>
        <h1>See our latest posts</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search by tags" onChange={(e) => setQuery(e.target.value)} />
          <button type="submit" className="button button-dark">Search</button>
        </form>
      </section>
      <section className={styles.posts}>
        <h2>Posts</h2>
        {posts && posts.length === 0 ? (
          <div className={styles.noPosts}>
            <p>No posts found</p>
            <Link to="/posts/create" className="button">
              Create a new post
            </Link>
          </div>
        ) : (
          posts.map((post) => (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </article>
          ))
        )}
      </section>
    </div>
  );
};

export default Home;
