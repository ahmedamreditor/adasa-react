import { Link } from 'react-router-dom'

function BlogCard({ post, view }) {
  return (
    <div className={`blog-card ${view}`}>

      <img src={post.image} alt={post.title} />

      <div className="card-content">

        <span>{post.category}</span>

        <h2>{post.title}</h2>

        <p>{post.excerpt}</p>

        <div className="card-info">
          <span>{post.author.name}</span>
          <span>{post.date}</span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          اقرأ المزيد
        </Link>

      </div>

    </div>
  )
}

export default BlogCard