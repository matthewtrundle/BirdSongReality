"use client"

/**
 * IDX Search Widget - Placeholder
 *
 * This component will be replaced with an actual IDX search integration
 * when Patrick selects an IDX vendor (IDX Broker, Showcase IDX, or Ultimate IDX)
 * and configures MLS access through ACTRIS / Unlock MLS.
 *
 * For now, it displays a placeholder that directs users to contact the team.
 */

import Link from "next/link"
import { Container } from "@/components/layout"
import { Button } from "@/components/ui"

interface IDXSearchWidgetProps {
  className?: string
  title?: string
}

export function IDXSearchWidget({
  className = "",
  title = "Search Austin Properties",
}: IDXSearchWidgetProps) {
  return (
    <div className={`bg-neutral-50 rounded-2xl p-8 lg:p-12 border border-neutral-100 ${className}`}>
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-fluid-2xl font-display text-neutral-900 mb-4">
            {title}
          </h3>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            MLS property search is coming soon. In the meantime, contact Patrick
            Birdsong and the Birdsong Realty Team for personalized property
            recommendations tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact">Contact Us for Listings</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
