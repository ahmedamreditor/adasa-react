import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>

      <h2>الصفحة غير موجودة</h2>

      <p>عذرًا، الصفحة التي تبحث عنها غير متاحة.</p>

      <Link to="/">العودة للرئيسية</Link>
    </div>
  )
}

export default NotFound