import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead, Breadcrumbs } from "@/components/seo";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "signs-of-shower-leak",
    title: "5 Warning Signs Your Shower is Leaking",
    excerpt: "Learn how to identify early signs of shower leaks before they cause serious damage to your home. From musty odors to peeling paint, here's what to look for.",
    category: "Shower Repairs",
    author: "Sydney Leak Repairs Pro",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  {
    slug: "epoxy-grout-vs-cement-grout",
    title: "Epoxy Grout vs Cement Grout: Which is Better?",
    excerpt: "A comprehensive comparison of epoxy and cement grouts for bathroom waterproofing. Discover why epoxy grout is the preferred choice for lasting leak repairs.",
    category: "Education",
    author: "Sydney Leak Repairs Pro",
    date: "2024-01-10",
    readTime: "7 min read",
  },
  {
    slug: "concrete-cancer-prevention",
    title: "How to Prevent Concrete Cancer in Your Building",
    excerpt: "Concrete cancer can cause serious structural damage. Learn the causes, warning signs, and prevention strategies to protect your property.",
    category: "Balcony Repairs",
    author: "Sydney Leak Repairs Pro",
    date: "2024-01-05",
    readTime: "6 min read",
  },
  {
    slug: "strata-waterproofing-guide",
    title: "A Strata Manager's Guide to Waterproofing",
    excerpt: "Everything strata managers need to know about maintaining waterproofing in multi-unit buildings. From inspections to compliance requirements.",
    category: "Strata",
    author: "Sydney Leak Repairs Pro",
    date: "2023-12-28",
    readTime: "8 min read",
  },
  {
    slug: "diy-leak-detection",
    title: "DIY Leak Detection: When to Call a Professional",
    excerpt: "Some leaks can be identified at home, but others require professional expertise. Here's how to know when it's time to call in the experts.",
    category: "Tips",
    author: "Sydney Leak Repairs Pro",
    date: "2023-12-20",
    readTime: "4 min read",
  },
  {
    slug: "bathroom-waterproofing-standards",
    title: "Australian Bathroom Waterproofing Standards Explained",
    excerpt: "Understanding AS 3740-2010 and what it means for your bathroom renovation or repair project. A guide to compliance requirements.",
    category: "Education",
    author: "Sydney Leak Repairs Pro",
    date: "2023-12-15",
    readTime: "6 min read",
  },
];

export default function Blog() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <SEOHead
        title="Blog | Leak Repair Tips & Guides"
        description="Expert advice on shower leaks, balcony waterproofing, concrete cancer prevention, and more. Stay informed with Sydney Leak Repairs Pro."
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
                Leak Repair{" "}
                <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert advice, tips, and guides on shower repairs, balcony 
                waterproofing, and protecting your property from water damage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-secondary/50 transition-colors">
                      {/* Placeholder Image */}
                      <div className="aspect-video bg-gradient-to-br from-muted to-card flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Featured Image</span>
                      </div>

                      <div className="p-6">
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

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
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
                Have a Leak Problem?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Don't wait for water damage to get worse. Get a free quote today.
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
