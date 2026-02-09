import styles from "./PostDetail.module.css";
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
    return (
        <article className={styles.post}>
            <Link to={`/posts/${post.id}`}>
                <img src={post.image} alt={post.title} loading="lazy" />
                <h3 className={styles.post__title}>{post.title}</h3>
                <p className={styles.post__author}>Author: <span>{post.createdBy}</span></p>
                <div className={styles.post__tags}>{post.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                ))}</div>
                <button className="button button--post">Read more</button>
            </Link>
        </article>
    )
}

export default PostDetail