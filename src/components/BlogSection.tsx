import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-white dark:bg-[#0b1b33] relative overflow-hidden transition-colors duration-1000">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-100/40 dark:bg-sky-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-800 dark:text-white tracking-tight">
            Notre <span className="text-sky-500">Blog</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Conseils, actualités et astuces pour garder un sourire éclatant et une santé bucco-dentaire irréprochable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <Link to={`/blog/${post.slug}`} className="relative h-56 overflow-hidden block">
                <div className="absolute inset-0 bg-sky-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-[#0b1b33]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-sky-500 uppercase tracking-wide">
                  {post.category}
                </div>
              </Link>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 line-clamp-2 group-hover:text-sky-500 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sky-500 font-semibold hover:text-sky-600 transition-colors group/link">
                    Lire l'article
                    <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

