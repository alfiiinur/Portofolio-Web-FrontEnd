import React, { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import BlogPostCard from "../components/common/ProjectBlogs";
import { fetchBlogs } from "../api/api"; // Import API
import SkeletonCard from "../components/common/SkeletonCard";
import img404 from "../assets/images/404.svg";

const categories = [
  "View all",
  "Design",
  "Product",
  "Development",
  "Customer Support",
  "Leadership",
  "technology",
];

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("View all");
  const [searchQuery, setSearchQuery] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data dari Strapi saat mount
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetchBlogs(); // Ini sudah berisi { data: [...], meta: ... }
        const blogs = response.data; // Langsung akses array 'data'

        // Konversi data dari API agar sesuai dengan struktur BlogPostCard
        const formatted = blogs.map((blog) => {
          // Hapus 'attr', akses properti langsung dari 'blog'
          return {
            id: blog.id,
            slug: blog.slug, // Asumsi slug ada di objek blog
            title: blog.title,
            // Akses 'name' dari objek 'category'
            category: blog.category?.name || "Uncategorized",
            // Akses 'name' dari objek 'author'
            author: blog.author?.name || "Anonymous",
            date: new Date(blog.publishedAt).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            excerpt: blog.description, // Ganti dari excerpt ke description sesuai JSON
            imageUrl: blog.cover?.url
              ? `http://localhost:1337${blog.cover.url}`
              : "", // URL gambar utama
            // Asumsi gambar author ada di dalam objek author, sesuaikan jika perlu
            authorImageUrl: blog.author?.avatar?.data?.attributes?.url
              ? `http://localhost:1337${blog.author.avatar.data.attributes.url}`
              : "",
          };
        });

        setAllPosts(formatted);
      } catch (error) {
        console.error("Gagal mengambil data blog:", error);
        setAllPosts([]); // Pastikan state kosong jika ada error
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  // Filter berdasarkan kategori dan pencarian
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    if (activeFilter !== "View all") {
      posts = posts.filter((post) => post.category === activeFilter);
    }

    if (searchQuery) {
      posts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return posts;
  }, [allPosts, activeFilter, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
          Blogs and Artikel
        </h1>
        <p className="text-lg text-light-text/80 dark:text-dark-text/80 max-w-2xl">
          New product features, the latest in technology, solutions, and
          updates.
        </p>

        {/* Kolom Pencarian */}
        <div className="relative mt-8 max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-light-text/50 dark:text-dark-text/50"
          />
          <input
            type="text"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-light-card/80 dark:bg-dark-card/80 focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary outline-none transition-all"
          />
        </div>
      </header>

      {/* Filter */}
      <div className="border-b border-light-border dark:border-dark-border mb-12">
        <nav className="flex flex-wrap -mb-px">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-1 py-4 mx-3 sm:mx-4 text-sm font-semibold transition-colors duration-200
                ${
                  activeFilter === category
                    ? "border-b-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary"
                    : "border-b-2 border-transparent text-light-text/70 dark:text-dark-text/70 hover:text-light-text dark:hover:text-dark-text"
                }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>

      {/* Grid Artikel */}
      {loading ? (
        <div className="container mx-auto px-4 py-12">
          {/* Grid untuk Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {/* Tampilkan beberapa skeleton card untuk mengisi ruang */}
            {[...Array(4)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPostCard key={post.id} {...post} allPosts={allPosts} />
            ))
          ) : (
            <>
              <div className="flex flex-row items-center justify-center">
                <img
                  src={img404}
                  alt="No posts found"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
                />
                <h1>
                  <span className="text-2xl text-light-text dark:text-dark-text">
                    No posts found
                  </span>
                </h1>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
