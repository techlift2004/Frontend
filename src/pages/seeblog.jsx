import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Assuming React Router is used
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react"; // PortableText library for rendering Sanity content
import { client } from "../sanityClient"; // Adjust the path to your Sanity client
import Nav from "../layout/nav/nav"; // Adjust the path to your Nav component
import Footer from "../layout/footer/footer"; 
// import Blog from '../components/LandingPage/blog'


const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const PostPage = () => {
  const { slug } = useParams(); // Use React Router's `useParams` to get the dynamic slug
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await client.fetch(POST_QUERY, { slug });
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load post.");
      }
    };

    fetchPost();
  }, [slug]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!post) {
    return <p  className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></p>;
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <div>
      <Nav />
    <main className="container place-items-center mx-auto min-h-screen  p-8 pt-20 px-[20px] md:px-20 flex flex-col gap-2">
      <Link to="/blog" className="hover:underline">
        ← Back to posts
      </Link>
     
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl place-items-center"
          width="100%"
          height="100%"
        />
      )}
       <h1 className="text-4xl text-center font-bold font-poppins mt-8">{post.title}</h1>
       <p className="text-2xl text-center font-semi-bold font-montserrat pb-5">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
      <div className="prose">
        
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>

      <form className="mt-8 px-[10px] md:px-20 py-10 bg-gray-100 rounded-lg shadow-md w-[100%] h-[100%]">
        <h2 className="text-[23px] font-poppins font-bold ">Leave a Comment</h2>
        <p className="text-[20px] font-montserrat pb-[30px] font-normal">Your email address won’t be published</p>

        <textarea type="text" placeholder="Write your comment here..." className="w-full h-[314px] font-montserrat p-2 border shadow-2xl border-white  bg-white rounded-md mb-4 **:"></textarea>
        <div className="flex flex-col md:flex-row justify-between md:gap-10 items-center">
          <input type="text" placeholder="Full Name" className="w-full h-[80px] font-montserrat p-2 border shadow-2xl border-white bg-white rounded-md mb-4" />
          <input type="email" placeholder="Email Address" className="w-full h-[80px] p-2 border shadow-2xl font-montserrat  border-white bg-white rounded-md mb-4" />
          <button className="w-full h-[80px] text-white font-montserrat p-2 border shadow-2xl border-[#4B0082] bg-[#4B0082] rounded-md mb-4">Submit</button>
        </div>
      </form>

      {/* < Blog /> */}
    </main>
      <Footer />
    </div>  
  );
};

export default PostPage;
