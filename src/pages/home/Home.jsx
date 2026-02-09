import styles from "./Home.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";


const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
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
        {loading && <p>Loading posts...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noPosts}>
            <p>No posts found</p>
            <Link to="/posts/create" className="button">
              Create a new post
            </Link>
          </div>
        )}
        <div className={styles.posts__grid}>
          {posts && posts.map((post) => (
            <PostDetail key={post.id} post={post} />
          ))
          }
        </div>
      </section>
    </div>
  );
};

export default Home;
