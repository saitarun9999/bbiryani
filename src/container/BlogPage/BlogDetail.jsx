import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import BlogData from "../../constants/blogData";

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = BlogData.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div>
      <Navbar />
      <section className="bg-white mt-5">
        <div className="container mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-8 md:px-8 lg:py-20 sm:py-16">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#DA281C] mb-6">{blog.title}</h1>
            <p className="text-gray-600">{blog.date}</p>
          </div>
          <div className="mb-8">
            <img src={blog.imageUrl} className="object-cover w-full h-96 rounded-lg shadow-lg" alt={blog.title} />
          </div>
          <div
            className="text-lg text-black"
            dangerouslySetInnerHTML={{ __html: blog.description }} // Render the HTML content
          />
          <div
            className="text-lg text-black"
            dangerouslySetInnerHTML={{ __html: blog.content }} // Render the HTML content
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
