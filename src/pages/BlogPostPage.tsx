import { useParams, Link, Navigate } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { ArrowLeft, Calendar, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find((p) => p.slug === slug);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <main className="bg-slate-50 dark:bg-[#0b1b33] min-h-screen text-slate-600 dark:text-gray-300 font-sans transition-colors duration-1000">
        
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0b1b33]" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <div>
              <Link
                to="/#blog"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Retour au blog
              </Link>

              <div className="flex items-center gap-2 text-white/50 text-sm mb-6 flex-wrap">
                <Link to="/" className="hover:text-white/80 transition-colors">Accueil</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link to="/#blog" className="hover:text-white/80 transition-colors">Blog</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-white">{post.category}</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="inline-flex items-center gap-2 text-sky-400 text-sm font-semibold mb-6 px-3 py-1 bg-sky-500/20 rounded-full backdrop-blur-sm border border-sky-500/30">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-sm">
              
              <div className="prose prose-lg dark:prose-invert prose-sky max-w-none">
                <p className="text-xl md:text-2xl text-slate-700 dark:text-gray-200 font-medium mb-10 leading-relaxed italic border-l-4 border-sky-500 pl-6">
                  {post.excerpt}
                </p>
                
                <div className="space-y-6 text-slate-600 dark:text-gray-300 leading-relaxed">
                  {post.content.map((paragraph, index) => {
                    // Si le paragraphe commence par "**", on le met en gras (basique markdown parser)
                    if (paragraph.startsWith("**") && paragraph.includes("**", 2)) {
                      const endBoldIdx = paragraph.indexOf("**", 2);
                      const boldText = paragraph.substring(2, endBoldIdx);
                      const restText = paragraph.substring(endBoldIdx + 2);
                      return (
                        <p key={index} className="text-lg">
                          <strong className="text-slate-800 dark:text-white">{boldText}</strong>
                          {restText}
                        </p>
                      );
                    }
                    return <p key={index} className="text-lg">{paragraph}</p>;
                  })}
                </div>
              </div>

              {/* Tags / Share (Optional) */}
              <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex gap-3">
                  <span className="px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 text-sm font-medium text-slate-600 dark:text-gray-400">
                    #{post.category.toLowerCase()}
                  </span>
                  <span className="px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 text-sm font-medium text-slate-600 dark:text-gray-400">
                    #dentismart
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};
