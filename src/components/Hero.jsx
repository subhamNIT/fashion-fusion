import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">Best Clothing Shop Of The Year!</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
          Discover the latest trends and timeless classics with our award-winning collection. Shop now to find best in fashion today!
        </p>
        <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Shop Now</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero