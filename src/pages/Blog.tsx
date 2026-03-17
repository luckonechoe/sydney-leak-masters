import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead, Breadcrumbs } from "@/components/seo";
import { blogPostsData } from "@/data/blog-posts";

export default function Blog() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <SEOHead
        title="Blog | Leak Repair Tips & Guides"
        description="Expert advice on shower leaks, balcony waterproofing, epoxy regrouting, tile sealing, and concrete degradation prevention. Stay informed with Sydney Leak Repairs Pro."
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 relative">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="section-container relative">
            <Breadcrumbs items={breadcrumbItems} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Practical Advice for{" "}
                <span className="gradient-text">Sydney Homeowners</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Straightforward guides on shower leaks, balcony repairs, waterproofing 
                and long-term property care — written by the team that fixes them every day.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Pillar Guide */}
        <section className="pb-8">
          <div className="section-container">
            <Link to="/guides/complete-guide-leak-repairs-sydney" className="group block">
              <div className="bg-card border-2 border-secondary/30 rounded-lg overflow-hidden hover:border-secondary/60 transition-colors p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded">COMPREHENSIVE GUIDE</span>
                  <span className="text-xs text-muted-foreground">25 min read</span>
                </div>
                <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                  The Complete Guide to Shower &amp; Balcony Leak Repairs in Sydney
                </h2>
                <p className="text-muted-foreground mb-4">
                  What causes leaks, how to spot the warning signs early, and which repair methods actually deliver long-term results. A practical resource for Sydney homeowners and property managers.
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-secondary group-hover:gap-2 transition-all font-medium">
                  Read the full guide
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPostsData.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 6) * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-secondary/50 transition-colors h-full flex flex-col">
                      {post.image ? (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-muted to-card flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">Featured Image</span>
                        </div>
                      )}

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h2 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString("en-AU", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </div>
                          <span className="flex items-center gap-1 text-secondary group-hover:gap-2 transition-all">
                            Read more
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Need a Professional Opinion?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you've noticed signs of a leak, we're happy to take a look. Free inspections, honest advice, no obligation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
