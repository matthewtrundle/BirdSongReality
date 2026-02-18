import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Container, Section } from "@/components/layout"
import { Breadcrumbs, SEOPageHero } from "@/components/seo"
import blogData from "@/data/blog-posts.json"

export const metadata: Metadata = {
  title: "Real Estate Blog | Austin Market Insights & Tips",
  description:
    "Stay informed with Austin real estate news, market updates, buying tips, and living insights from the experts at Birdsong Realty Team.",
  keywords: [
    "Austin real estate blog",
    "Texas property news",
    "Austin market updates",
    "home buying tips Austin",
  ],
  openGraph: {
    title: "Real Estate Blog | Birdsong Realty Team",
    description: "Market insights, buying tips, and living guides from Austin real estate experts.",
  },
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  const { posts, categories } = blogData
  const featuredPosts = posts.filter((post) => post.featured)
  const recentPosts = posts.filter((post) => !post.featured)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ]

  return (
    <>
      <SEOPageHero
        title="Real Estate Blog"
        subtitle="Market insights, buying tips, and living guides from Austin experts."
        backgroundImage="/images/hero/blog-bg.jpg"
      />

      <Section className="bg-white">
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          {/* Featured Posts */}
          <div className="mt-8 mb-16">
            <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video relative bg-neutral-100 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-accent-500 text-primary-950 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          {recentPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-8">Recent Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex gap-6 p-4 bg-white border border-neutral-200 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-32 h-32 flex-shrink-0 bg-neutral-100 rounded-lg overflow-hidden relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="128px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium text-accent-600 mb-2 block">{post.category}</span>
                      <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-neutral-600 text-sm line-clamp-2 mb-2">{post.excerpt}</p>
                      <div className="text-sm text-neutral-500">
                        {formatDate(post.publishedAt)} &middot; {post.readTime} min read
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Categories */}
          <div className="mt-16 p-8 bg-primary-50 rounded-2xl">
            <h2 className="text-xl font-display font-semibold text-neutral-900 mb-4">Browse by Category</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-white text-neutral-700 rounded-full text-sm border border-neutral-200"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-display font-semibold text-neutral-900 mb-4">
              Stay Updated on Austin Real Estate
            </h2>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Get market updates, new listings, and living tips delivered to your inbox.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Subscribe to Updates
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
