


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../sanityClient";
import Nav from "../layout/nav/nav";
import Footer from "../layout/footer/footer";
import { FaRegUser } from "react-icons/fa";
import { SlEvent } from "react-icons/sl";
import { PiClock } from "react-icons/pi";
import { motion, useInView } from "framer-motion";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);

const POSTS_QUERY = `*[ 
  _type == "post" 
  && defined(slug.current) 
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt, 
  author, 
  category, 
  readTime, 
  mainImage{
    asset->{
      _id,
      url
    }
  }
}`;

export default function Blog() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(POSTS_QUERY);
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts.");
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Nav />
      <main className="container mx-auto min-h-screen pt-20 max-w-7xl p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Latest Posts</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {posts === null ? (
          <p className="text-center">Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post._id} post={post} index={index} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function BlogCard({ post, index }) {
  const ref = React.useRef();
  const [inView, setInView] = React.useState(false);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) setInView(true);
  }, [isInView]);

// Get the properly formatted image URL
const imageUrl = post.mainImage?.asset?._id
? builder.image(post.mainImage).width(500).height(300).url()
: null;
  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gray-200 h-[400px] rounded-xl shadow-md overflow-hidden p-5"
    >
      <div className="relative">
      {imageUrl ? (
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300' viewBox='0 0 500 300'%3E%3Crect width='500' height='300' fill='%234B0082'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='20' fill='%23ffffff' text-anchor='middle' dominant-baseline='middle'%3EImage not available%3C/text%3E%3C/svg%3E";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#4B0082] text-white">
            No image available
          </div>
        )}
       
      </div>

      <div className="mt-14 flex flex-col gap-6">
        <div className="flex items-center gap-5 text-gray-600 text-sm">
          <span className="flex gap-1 items-center">
            <FaRegUser /> {post.author}
          </span>
          <span className="flex gap-1 items-center">
            <SlEvent /> {post.category}
          </span>
          <span className="flex gap-1 items-center">
            <PiClock />{new Date(post.publishedAt).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-lg font-bold text-[24px]">{post.title}</h3>
        <Link to={`/post/${post.slug.current}`}>
          <button className="mt-4 w-[100px] h-[40px] bg-[#4B0082] text-white rounded-lg text-[16px] font-normal">
            Read more
          </button>
        </Link>
      </div>
    </motion.div>
  );
}




