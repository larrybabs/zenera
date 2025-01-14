import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogImg from "../assets/img/zenBlog.png";

const PostDetailsComponent = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", email: "", content: "" });
  const [loading, setLoading] = useState(true);

  // Fetch Post and Comments
  useEffect(() => {
    fetch(`https://zenera.zeneraprojects.com/wp-json/wp/v2/posts/${id}?_embed`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });

    fetch(`https://zenera.zeneraprojects.com/wp-json/wp/v2/comments?post=${id}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, [id]);

  // Handle New Comment Submission
  const handleSubmitComment = (e) => {
    e.preventDefault();

    fetch("https://zenera.zeneraprojects.com/wp-json/wp/v2/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: id,
        author_name: newComment.name,
        author_email: newComment.email,
        content: newComment.content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setComments([...comments, data]);
        setNewComment({ name: "", email: "", content: "" });
      })
      .catch((error) => console.error("Error submitting comment:", error));
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="h-full">Loading...</div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#FFF] h-[100px]"></div>
      <div>
        <img
          src={
            post._embedded &&
            post._embedded["wp:featuredmedia"] &&
            post._embedded["wp:featuredmedia"][0].source_url
              ? post._embedded["wp:featuredmedia"][0].source_url
              : BlogImg
          }
          alt={post.title.rendered}
          className="w-full md:h-[500px] object-contain "
        />
      </div>
      <div className="mt-4 container mx-auto max-w-5xl px-4">
        <a href="/" className="text-blue-900">Home</a> / <a href="/press-releases" className=" text-blue-900">Press Releases</a> / <span className="opacity-60">In The News</span>
      </div>
      <div className="container mx-auto mt-6 md:mt-24 max-w-5xl px-4">
        <h2 className="text-primary capitalize text-2xl md:text-5xl md:w-3/5 md:my-28 leading-normal">
          {post.title.rendered}
        </h2>
        <div
          className="leading-loose mt-6"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>

      {/* Comments Section */}
      <div className="container mx-auto mt-12 max-w-5xl px-4">
        <h3 className="text-xl font-bold">Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 py-4">
              <h4 className="font-bold">{comment.author_name}</h4>
              <p>{comment.content.rendered}</p>
            </div>
          ))
        )}

        {/* Add Comment Form */}
        <form onSubmit={handleSubmitComment} className="mt-8">
          <h4 className="text-lg font-semibold">Leave a comment</h4>
          <div className="mt-4">
            <label className="block font-bold">Name</label>
            <input
              type="text"
              value={newComment.name}
              onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
              className="w-full p-2 border "
              placeholder="Enter name"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block font-bold">Email</label>
            <input
              type="email"
              value={newComment.email}
              onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
              className="w-full p-2 border "
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block font-bold">Comment</label>
            <textarea
              value={newComment.content}
              onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
              className="w-full p-2 border"
              rows="4"
              required
              placeholder="Your comment"
            ></textarea>
          </div>
          <button type="submit" className="mt-4 bg-primary text-white px-4 py-2 ">
            Submit Comment
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetailsComponent;
