import { Metadata } from "next"
import { notFound } from "next/navigation"
import { ActivityTemplate } from "@/components/seo/templates"
import { getActivityBySlug, generateActivityStaticParams } from "@/data"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return generateActivityStaticParams()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const activity = getActivityBySlug(slug)

  if (!activity) {
    return {
      title: "Activity Not Found | Austin",
    }
  }

  return {
    title: `${activity.name} | Things to Do in Austin`,
    description: activity.description,
    keywords: activity.seoKeywords,
    openGraph: {
      title: `${activity.name} | Austin Activities`,
      description: activity.description,
      type: "website",
    },
  }
}

export default async function ActivityPage({ params }: PageProps) {
  const { slug } = await params
  const activity = getActivityBySlug(slug)

  if (!activity) {
    notFound()
  }

  return <ActivityTemplate activity={activity} />
}
