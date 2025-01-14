import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostsComponent from '../../components/Post';


export default function useFetch(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function loadData() {
            const response = await fetch(url);
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json();
            setData(posts);
        }
    
        loadData();
    }, [url]);
    return data;
}

export const Press = () => {
    
    // const posts = useFetch('http://localhost/wp-json/wp/v2/posts');

  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="bg-about h-[80px] md:h-[300px] bg-contain bg-no-repeat md:bg-cover flex flex-col justify-center items-center">
        <h2 className="text-center mx-auto text-white text-2xl md:text-6xl ">
        Press Releases
        </h2>
      </div>
      {/* <div className="m-4 md:m-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <h2 className="font-bold text-4xl md:text-6xl text-primary">
            We are a sustainability-focused
            <span className="text-primary/40"> agency.</span>{" "}
          </h2>
          <p className=" font-medium text-2xl opacity-50">
            with a foremost sustainability consulting practice. We help our
            clients to constantly engage their audiences to achieve
            communications objectives.
          </p>
        </div> */}

        <PostsComponent />
      

      <Footer />
    </div>
  );
};
