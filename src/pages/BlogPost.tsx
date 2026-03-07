import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead, Breadcrumbs, FAQSchema } from "@/components/seo";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blog-posts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.relatedPosts);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://sydneyleakrepairspro.com.au",
    },
    publisher: {
      "@type": "Organization",
      name: "Sydney Leak Repairs Pro",
      url: "https://sydneyleakrepairspro.com.au",
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sydneyleakrepairspro.com.au/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <SEOHead
        title={post.metaTitle.replace(" | Sydney Leak Repairs Pro", "")}
        description={post.metaDescription}
        type="article"
        canonical={`https://sydneyleakrepairspro.com.au/blog/${post.slug}`}
      />
      <FAQSchema faqs={post.faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="pt-24 lg:pt-32 pb-8 lg:pb-12 relative">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="section-container relative">
            <Breadcrumbs items={breadcrumbItems} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-AU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-8 lg:py-12">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              {post.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="mb-8"
                >
                  {section.headingLevel === "h2" ? (
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {section.heading}
                    </h2>
                  ) : (
                    <h3 className="font-heading text-xl lg:text-2xl font-semibold text-foreground mb-3">
                      {section.heading}
                    </h3>
                  )}
                  <div
                    className="prose prose-lg max-w-none text-muted-foreground
                      prose-headings:text-foreground
                      prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-foreground
                      prose-li:text-muted-foreground
                      prose-table:text-sm
                      prose-th:bg-muted prose-th:p-3 prose-th:text-foreground prose-th:font-semibold
                      prose-td:p-3 prose-td:border-border
                      prose-ul:space-y-1
                      prose-ol:space-y-1"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </motion.div>
              ))}

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 mb-8"
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  People Also Ask
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {post.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-card border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-secondary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

              {/* Keywords/Tags */}
              <div className="flex flex-wrap gap-2 mt-8 mb-12">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                  >
                    <Tag className="w-3 h-3" />
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 lg:py-16 bg-muted/30">
            <div className="section-container">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="group"
                  >
                    <div className="bg-card border border-border rounded-lg p-6 hover:border-secondary/50 transition-colors h-full">
                      <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded">
                        {related.category}
                      </span>
                      <h3 className="font-heading font-bold text-foreground mt-3 mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {related.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-3 text-sm text-secondary group-hover:gap-2 transition-all">
                        Read more
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Need Professional Help With a Leak?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our experienced team provides free inspections and honest advice
                across all Sydney suburbs. No obligation, no pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                >
                  Get Free Inspection
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
