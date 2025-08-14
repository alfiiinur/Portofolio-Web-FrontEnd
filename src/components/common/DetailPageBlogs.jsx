import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { fetchBlogBySlug, fetchBlogs } from "../../api/api";
import SkeletonCard from "./SkeletonCard";

// Komponen untuk merender konten rich text HTML
const BlockRenderer = ({ block }) => {
  if (!block) return null;

  switch (block.__component) {
    case "shared.rich-text":
      if (!block.body || typeof block.body !== "string") {
        console.warn("Konten rich-text kosong:", block);
        return <p className="text-red-500">Konten tidak tersedia.</p>;
      }

      return (
        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-6"
          dangerouslySetInnerHTML={{ __html: block.body }}
        />
      );

    default:
      return null;
  }
};

const DetailPageBlogs = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const [allPosts, setAllPosts] = useState(location.state?.allPosts || []);

  const [nextBlog, setNextBlog] = useState(null);
  const [prevBlog, setPrevBlog] = useState(null);

  useEffect(() => {
    const getBlogAndNav = async () => {
      setLoading(true);
      try {
        const blogData = await fetchBlogBySlug(slug);
        setBlog(blogData);

        let postsForNav = allPosts;

        if (postsForNav.length === 0) {
          const fetchedPosts = await fetchBlogs();
          postsForNav = fetchedPosts;
          setAllPosts(fetchedPosts);
        }

        if (postsForNav.length > 0) {
          const currentIndex = postsForNav.findIndex((p) => p.slug === slug);
          if (currentIndex !== -1) {
            const prevIndex =
              (currentIndex - 1 + postsForNav.length) % postsForNav.length;
            const nextIndex = (currentIndex + 1) % postsForNav.length;
            setPrevBlog(postsForNav[prevIndex]);
            setNextBlog(postsForNav[nextIndex]);
          }
        }
      } catch (error) {
        console.error("Gagal mengambil detail blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      getBlogAndNav();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Anda bisa tetap menampilkan header dan filter jika mau */}

        {/* Grid untuk Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {/* Tampilkan beberapa skeleton card untuk mengisi ruang */}
          {[...Array(4)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl">Blog tidak ditemukan.</h1>
        <Link
          to="/blog"
          className="text-light-primary dark:text-dark-primary mt-4 inline-block"
        >
          Kembali ke Blogs dan Artikel
        </Link>
      </div>
    );
  }

  const imageUrl = blog.cover?.url
    ? `http://localhost:1337${blog.cover.url}`
    : "";

  // const authorImageUrl = blog.author?.AVATAR?.data?.attributes?.url
  //   ? `http://localhost:1337${blog.author.AVATAR.data.attributes.url}`
  //   : "";

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tombol Kembali */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-light-text/80 dark:text-dark-text/80 hover:text-light-primary dark:hover:text-dark-primary transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        <span>Semua Blogs dan Artikel</span>
      </Link>

      {/* Header Artikel */}
      <header className="text-center mb-12">
        <p className="text-light-primary dark:text-dark-primary font-semibold mb-2">
          {blog.category?.name}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-light-text dark:text-dark-text">
          {blog.title}
        </h1>
      </header>

      {/* Gambar Utama */}
      <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12">
        <img
          src={imageUrl}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Konten & Info Blog */}
      <div className="">
        {/* Konten Utama */}
        <main className="lg:col-span-8">
          <div className="prose prose-lg dark:prose-invert max-w-none text-light-text/90 dark:text-dark-text/90">
            <p className="lead text-xl !mb-8">{blog.description}</p>

            {/* Render blocks */}
            {Array.isArray(blog.blocks) &&
              blog.blocks.map((block) => (
                <BlockRenderer key={block.id} block={block} />
              ))}
          </div>
        </main>
      </div>

      {/* Navigasi ke blog sebelumnya/selanjutnya */}
      {nextBlog && nextBlog.slug !== slug && (
        <footer className="mt-20 pt-12 border-t border-light-border dark:border-dark-border">
          {prevBlog && prevBlog.slug !== slug && (
            <Link
              to={`/blog/${prevBlog.slug}`}
              state={{ allPosts }}
              className="group block text-left"
            >
              <p className="text-sm text-light-text/70 dark:text-dark-text/70">
                Blog Sebelumnya
              </p>
              <h4 className="text-2md md:text-4md font-bold mt-2 text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                {prevBlog.title}
              </h4>
            </Link>
          )}

          <Link
            to={`/blog/${nextBlog.slug}`}
            state={{ allPosts }}
            className="group block text-right"
          >
            <p className="text-sm text-light-text/70 dark:text-dark-text/70">
              Blog Selanjutnya
            </p>
            <h4 className="text-2md md:text-4md font-bold mt-2 text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
              {nextBlog.title}
            </h4>
          </Link>
        </footer>
      )}
    </div>
  );
};

export default DetailPageBlogs;
