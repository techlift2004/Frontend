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

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt, 
  author, 
  category, 
  readTime, 
  mainImage {
    asset-> {
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
      <div className="bg-[#4B0082] pt-36 pb-28">
        <h1 className="text-center font-extrabold text-white text-5xl font-poppins">
          Latest Posts
        </h1>
        <p className="text-center text-[1.3rem] text-white px-20 mt-8 font-poppins">
          No matter where you are in your tech journey, our informative blogs are here to provide the knowledge and support you need to succeed.
        </p>
      </div>

      <main className="container mx-auto min-h-screen pt-20 max-w-7xl p-8">
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

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;




    const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gray-200 md:h-[500px] rounded-xl shadow-md overflow-hidden p-5"
    >
      <div className="relative h-[250px]">
        {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl place-items-center"
          width="100%"
          height="100%"
        />
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
          <span className="flex gap-1 font-montserrat items-center">
            <PiClock /> {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-lg font-bold font-poppins text-[24px]">{post.title}</h3>
        <Link to={`/post/${post.slug.current}`}>
          <button className="mt-4 w-[100px] h-[40px] bg-[#4B0082] font-montserrat text-white rounded-lg text-[16px] font-normal">
            Read more
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
``