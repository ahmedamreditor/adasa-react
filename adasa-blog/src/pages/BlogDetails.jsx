import { useParams, Link } from 'react-router-dom'
import postsData from '../data/posts.json'

function BlogDetails() {
  const { slug } = useParams()

  const post = postsData.posts.find(
    (item) => item.slug === slug
  )

  if (!post) {
    return <h2>المقال غير موجود</h2>
  }

  return (
    <div className="blog-details">
      <Link to="/blog">العودة للمدونة</Link>

      <h1>{post.title}</h1>

      <p>
      الكاتب: {post.author.name} | التاريخ: {post.date}
      </p>

      <img src={post.image} alt={post.title} />

      <p>{post.excerpt}</p>

      <div className="post-content">
        {post.content}
      </div>
    </div>
  )
}

export default BlogDetails