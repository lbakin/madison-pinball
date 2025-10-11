import { sanityClient } from '~/src/lib/client'
import { siteSettingsQ } from '~/src/lib/queries'
import Footer from './Footer'

export const revalidate = 60

export default async function SiteFooterServer() {
  const year = new Date().getFullYear()
  const settings = await sanityClient.fetch(siteSettingsQ)
  return (
    <Footer
      footerValue={settings?.footer  || []}
      siteTitle={settings?.title || 'Madison Pinball'}
    />
  )
}
