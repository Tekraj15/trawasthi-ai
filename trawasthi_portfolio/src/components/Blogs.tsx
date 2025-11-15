import { BLOG_POSTS } from "../constants/blogs.ts"; // Your blog data

const Blogs = () => {
  return (
    <section id="blog" className="pt-10 max-w-5xl mx-auto px-6 ">
      <div className="mb-12">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-gray-600 mt-1">Thoughts, ideas, and tutorials.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 border rounded-xl hover:shadow-lg transition-all duration-300 hover:border-gray-400"
          >
            <div className="flex flex-col h-full">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>

              <p className="mt-2 text-gray-600 ">{post.description}</p>

              <span className="mt-4 text-sm font-medium text-blue-600 group-hover:underline">
                Read more →
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* No Posts Fallback */}
      {BLOG_POSTS.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          No blog posts yet. Check back soon!
        </p>
      )}
    </section>
  );
};

export default Blogs;
