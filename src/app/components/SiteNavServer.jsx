import { sanityClient } from '~/src/lib/client'
import { siteSettingsQ, allLocationSlugsQuery } from '~/src/lib/queries'
import { urlFor } from '~/src/lib/image'
import Nav from './Nav'

// Revalidate sometimes so changes in Sanity flow through
export const revalidate = 60

export default async function SiteNavServer() {
  const [settings, locs] = await Promise.all([
    sanityClient.fetch(siteSettingsQ),
    sanityClient.fetch(allLocationSlugsQuery),
  ])

  // Fallbacks so the page never crashes
  const navItems = settings?.nav?.length
    ? settings.nav
    : [
        { href: '/', label: 'Home' },
        { href: '/locations', label: 'Locations' },
        { href: '/monthly-meetups', label: 'Monthly Meetups' },
        { href: '/killer-queen-arcade', label: 'Killer Queen Arcade' },
        { href: '/report-a-problem', label: 'Report a Problem' },
        { href: '/buy-sell-fix-contact', label: 'Buy/Sell/Fix/Contact' },
      ]

  const logoUrl = settings?.logo ? urlFor(settings.logo).width(200).height(50).fit('max').url() : '/images/logo.png'

  return <Nav items={navItems} locs={locs || []} logoUrl={logoUrl} siteTitle={settings?.title || 'Madison Pinball'} />
}
