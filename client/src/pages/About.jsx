export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-300 mb-8">
          About GetSetExplore
        </h1>
        <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
          <p>
            Welcome to <span className="font-bold text-[#4398ba]">GetSetExplore Blog</span>! This blog was created by <a href="https://github.com/sanjeetbth7"><span className="font-bold text-[#4398ba]">Sanjeet Kumar </span></a>
            as a personal project to share his thoughts and ideas with the world. Sanjeet is a passionate developer who loves to write about technology, coding, and everything in between.
          </p>
          <p>
            On this blog, you'll find weekly articles and tutorials on topics such as web development, software engineering, data structures, algorithms, and programming languages. Sanjeet is always learning and exploring new technologies, so be sure to check back often for new content!
          </p>
          <p>
            We encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. We believe that a community of learners can help each other grow and improve.
          </p>
        </div>
      </div>
    </div>
  );
}
