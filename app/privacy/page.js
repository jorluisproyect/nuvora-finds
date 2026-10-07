import Link from 'next/link';
import { pageMetadata } from '../../lib/seo';
export const metadata = pageMetadata('Privacy Policy', 'How Nuvora Finds handles hosting data, on-site search, analytics and external links.', '/privacy');

export default function PrivacyPage() {
  return (
    <section className="section prose-page">
      <span className="eyebrow">LEGAL</span>
      <h1>Privacy Policy</h1>
      <p>Last updated: October 7, 2026.</p>
      <h2>Information we collect</h2>
      <p>Nuvora Finds currently operates as a content website and does not require visitors to create accounts or submit personal information.</p>
      <h2>Analytics and hosting</h2>
      <p>Our hosting provider may process standard technical information such as IP address, device type, browser information and request logs for security, reliability and performance.</p>
      <h2>Search and site storage</h2>
      <p>On-site search runs in your browser against the article index. Search text is not sent to a server or stored by Nuvora Finds. This site does not use account cookies, advertising cookies or a newsletter database.</p>
      <h2>Optional audience measurement</h2>
      <p>When enabled, Vercel Web Analytics measures page visits and aggregate usage to help us understand which guides are useful. It does not use cookies for visitor identification. Our integration strips URL query strings and fragments and skips collection when your browser sends the Do Not Track preference. Hosting request logs are separate from this setting.</p>
      <p>Read <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel’s analytics privacy information</a> for details about its processing. The site does not enable paid custom-event analytics.</p>
      <h2>Future services</h2>
      <p>When you follow an external link, that website processes information under its own policy. Future Amazon links will include an affiliate tracking tag so Amazon can attribute qualifying purchases. No Amazon affiliate links are currently active, and Nuvora Finds does not receive your Amazon payment or order details.</p>
      <h2>Feedback and your choices</h2>
      <p>Our public feedback channel is hosted by GitHub. Information you submit there is visible publicly and handled under GitHub’s terms and privacy policy. Do not include sensitive information. You can choose not to submit feedback or follow external links. Contact us about a privacy concern through the channel described on our contact page.</p>
      <h2>Questions</h2>
      <p><Link href="/contact">Visit Contact</Link> for the current feedback channel. This policy will be updated when our data practices change.</p>
    </section>
  );
}
