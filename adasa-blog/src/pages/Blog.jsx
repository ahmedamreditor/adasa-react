import { useState } from 'react'
import postsData from '../data/posts.json'
import BlogCard from '../components/BlogCard'

function Blog() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('الكل')
  const [view, setView] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)

  const posts = postsData.posts

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      activeCategory === 'الكل' ||
      post.category === activeCategory

    return matchesSearch && matchesCategory
  })

  const postsPerPage = 6
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const startIndex = (currentPage - 1) * postsPerPage

  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  )

  return (
    <div className="blog-page">
      <h1>مدونة عدسة</h1>
      <p>اكتشف أحدث المقالات في عالم التصوير الفوتوغرافي</p>

      <input
        type="text"
        placeholder="ابحث عن مقال..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setCurrentPage(1)
        }}
      />

      <div className="categories">
        {['الكل', ...postsData.categories.map((cat) => cat.name)].map(
          (category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setCurrentPage(1)
              }}
              className={activeCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="view-buttons">
        <button onClick={() => setView('grid')}>Grid</button>
        <button onClick={() => setView('list')}>List</button>
      </div>

      <div className={view === 'grid' ? 'posts-grid' : 'posts-list'}>
        {currentPosts.map((post) => (
          <BlogCard key={post.id} post={post} view={view} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            السابق
          </button>

          <span>
            {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            التالي
          </button>
        </div>
      )}
    </div>
  )
}

export default Blog