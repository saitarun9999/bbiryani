import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../Footer/Footer';
import BlogData from "../../constants/blogData";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-white mt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#DA281C]">Our Blogs</h1>
        </div>
        <div className="container mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-8 md:px-8 lg:py-20 sm:py-16">
          <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {BlogData.map((blog, index) => (
              <div className="relative" key={index}>
                <Link to={`/blog/${blog.id}`} className="block overflow-hidden group rounded-xl shadow-lg">
                  <img
                    src={blog.imageUrl}
                    className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                    alt={blog.title}
                  />
                </Link>
                <div className="relative mt-5">
                  <p className="uppercase font-semibold text-xs mb-2.5 text-[#DA281C]">{blog.date}</p>
                  <Link to={`/blog/${blog.id}`} className="block mb-3 hover:underline">
                    <h2 className="text-2xl font-bold leading-tight tracking-wide text-[#DA281C] transition-colors duration-200 hover:text-[#DA281C]">
                      {blog.title}
                    </h2>
                  </Link>
                  <p className="mb-4 text-black dark:text-black line-clamp-3">
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
