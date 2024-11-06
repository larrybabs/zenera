import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(`https://graph.instagram.com/me/media`, {
          params: {
            fields: 'id,caption,media_url,permalink',
            access_token: accessToken,
          },
        });
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching Instagram posts', error);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <h2 className="text-3xl text-center font-semibold mb-6 text-red-700">Our Instagram</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer">
            <div className="relative">
              <img
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
