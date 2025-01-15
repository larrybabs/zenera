import React, { useEffect, useState } from "react";
import BlogImg from "../assets/img/zenBlog.png";
import { useNavigate } from "react-router-dom";
import MinimalLoader from "./Loader";

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  // Fetch posts with pagination
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://zenera.zeneraprojects.com/wp-json/wp/v2/posts?_embed&per_page=9&page=${currentPage}`
    )
      .then((response) => {
        // Check total pages from response headers
        const total = response.headers.get("X-WP-TotalPages");
        setTotalPages(Number(total));
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto flex justify-center items-center">
       <MinimalLoader />
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-40">
      <div className="flex flex-wrap gap-8 justify-between px-12">
        {posts.map((post) => (
          <div key={post.id} className="h-[450px] md:w-[320px]">
            <div className="relative w-full h-[300px] md:h-[280px] overflow-hidden group">
              <img
              onClick={() => navigate(`/press/${post.id}`)}
                src={
                  post._embedded &&
                  post._embedded["wp:featuredmedia"] &&
                  post._embedded["wp:featuredmedia"][0].source_url
                    ? post._embedded["wp:featuredmedia"][0].source_url
                    : BlogImg
                }
                alt={post.title.rendered}
                className="min-w-[320px] min-h-[300px] object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
              />
            </div>
            <div>
              <h2 className="font-normal pt-2">{post.title.rendered}</h2>
            </div>
            <button
              className="text-sm underline text-blue-900 mt-6 bottom-0"
              onClick={() => navigate(`/press/${post.id}`)}
            >
              Read the story
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-full ${
              currentPage === index + 1
                ? "bg-primary text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsComponent;
