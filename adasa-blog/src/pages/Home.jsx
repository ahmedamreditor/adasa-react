import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>عدسة | عالم التصوير الفوتوغرافي</h1>

        <p>
          اكتشف عالم التصوير وتعلم أسرار المحترفين
          وطور مهاراتك في التقاط الصور.
        </p>

        <Link to="/blog" className="btn">
          استكشف المقالات
        </Link>
      </section>
    </div>
  )
}

export default Home