import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Assuming React Router is used
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react"; // PortableText library for rendering Sanity content
import { client } from "../sanityClient"; // Adjust the path to your Sanity client
import Nav from "../layout/nav/nav"; // Adjust the path to your Nav component
import Footer from "../layout/footer/footer"; 


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
    <main className="container place-items-center mx-auto min-h-screen  p-8 pt-20 px-[20px] md:px-20 flex flex-col gap-4">
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
       <h1 className="text-4xl text-center font-bold font-poppins mb-8">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
      <Footer />
    </div>  
  );
};

export default PostPage;
