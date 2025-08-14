import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostCard = ({
  slug,
  title,
  category,
  author,
  date,
  excerpt,
  imageUrl,
  authorImageUrl,
  allPosts,
}) => {
  return (
    <Link
      to={`/blog/${slug}`}
      state={{ allPosts: allPosts }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4 group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />

        {/* Glass effect (1/3 top overlay) */}
        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white/30 to-transparent dark:from-dark-card/20 backdrop-blur-md z-10 flex items-end px-4 py-3">
          <div className="flex justify-between w-full text-sm text-black dark:text-white font-medium">
            <span>{author}</span>
            <span>{date}</span>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-dark-card/80 text-light-text dark:text-dark-text text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          {category}
        </div>
      </div>

      <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2 underline transition-transform duration-500 ease-in-out  ">
        {title}
      </h3>
      <p className="text-sm text-light-text/80 dark:text-dark-text/80 flex-grow mb-4">
        {excerpt}
      </p>

      <div className="flex items-center gap-2 text-light-primary dark:text-dark-primary font-semibold text-sm group-hover:underline">
        <span>Read post</span>
        <ArrowRight size={16} />
      </div>
    </Link>
  );
};

export default BlogPostCard;
