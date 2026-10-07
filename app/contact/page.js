import { pageMetadata } from '../../lib/seo';
export const metadata = pageMetadata('Contact', 'Send a topic suggestion, report a problem or request an editorial correction for Nuvora Finds.', '/contact');

export default function ContactPage() {
  return (
    <section className="section prose-page">
      <span className="eyebrow">CONTACT</span>
      <h1>Say hello.</h1>
      <p className="lead">Have a topic suggestion, spotted an error or found a page that is difficult to use? Reach the Nuvora Finds maintainer through the project’s public feedback channel.</p>
      <a className="button button-dark" href="https://github.com/jorluisproyect/nuvora-finds/issues/new?title=Editorial%20feedback">Send feedback on GitHub ↗</a>
      <h2>What to include</h2>
      <p>Share the article URL, describe the problem and explain any correction you suggest. For a display issue, include your device and browser. Topic suggestions are welcome within home, kitchen, organization and small-space living.</p>
      <h2>A public feedback channel</h2>
      <p>GitHub requires an account to submit feedback, and issues are publicly visible. Please do not include passwords, private contact details, order information or sensitive personal data. There is currently no private contact form or newsletter on this site.</p>
      <h2>Product orders</h2>
      <p>Nuvora Finds publishes editorial guides and does not sell products or manage orders. Contact the retailer directly for delivery, returns, warranties or payment questions.</p>
    </section>
  );
}
