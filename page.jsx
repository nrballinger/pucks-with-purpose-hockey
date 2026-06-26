const tournaments = [
  {
    title: 'Labor Day Charity Classic',
    date: 'September 7, 2026',
    location: 'Polk Athletic Complex',
    details: ['16 Teams', '3 Games Guaranteed', 'Playoffs', 'Team Trippy Foundation']
  },
  {
    title: 'Veterans Cup',
    date: 'Coming Soon',
    location: 'Central Florida',
    details: ['Adult Divisions', 'Local Charity Partner', 'Sponsor Opportunities']
  },
  {
    title: 'Holiday Hockey Classic',
    date: 'Coming Soon',
    location: 'Florida',
    details: ['Tournament Weekend', 'Merchandise', 'Community Impact']
  }
];

const sponsorLevels = [
  ['Presenting Sponsor', '$5,000+', 'Naming rights, top logo placement, social posts, banner placement, booth/table, and tournament recognition.'],
  ['Gold Sponsor', '$2,500', 'Premium logo placement, rink signage, sponsor spotlight, and social media recognition.'],
  ['Silver Sponsor', '$1,000', 'Website logo placement, social media thank-you, and event signage.'],
  ['Community Sponsor', '$500', 'Sponsor wall placement and public event recognition.']
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">
          <img src="/images/pwp-logo.png" alt="Pucks With Purpose logo" />
          <span>Pucks With Purpose</span>
        </a>
        <div className="links">
          <a href="#about">About</a>
          <a href="#tournaments">Tournaments</a>
          <a href="#impact">Impact</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="heroText">
          <p className="eyebrow">Adult Charity Hockey Tournaments</p>
          <h1>Play Hard.<br />Give Back.</h1>
          <p className="lead">Pucks With Purpose Hockey organizes competitive adult hockey tournaments where a portion of proceeds supports local charities, foundations, families, and community causes.</p>
          <div className="actions">
            <a className="button primary" href="mailto:register@puckswithpurposehockey.com?subject=Team Registration">Register a Team</a>
            <a className="button secondary" href="mailto:sponsors@puckswithpurposehockey.com?subject=Sponsorship Inquiry">Become a Sponsor</a>
          </div>
        </div>
        <div className="heroCard">
          <img src="/images/pwp-logo.png" alt="Pucks With Purpose Hockey" />
          <div className="eventMini">
            <span>Next Event</span>
            <strong>Labor Day Charity Classic</strong>
            <p>September 7, 2026 • Polk Athletic Complex</p>
          </div>
        </div>
      </section>

      <section id="about" className="section split">
        <div>
          <p className="eyebrow">Our Mission</p>
          <h2>More than a tournament.</h2>
        </div>
        <div className="copy">
          <p>Pucks With Purpose was created to bring adult hockey players together for competitive, professionally organized events while making a real impact off the ice.</p>
          <p>Every tournament supports a local charity partner, nonprofit, family in need, or community organization. Players, sponsors, volunteers, and fans all become part of something bigger than the final score.</p>
        </div>
      </section>

      <section id="tournaments" className="section darkPanel">
        <div className="sectionHeader">
          <p className="eyebrow">Upcoming Events</p>
          <h2>Tournaments built around competition, community, and purpose.</h2>
        </div>
        <div className="cards">
          {tournaments.map((event) => (
            <article className="card" key={event.title}>
              <p className="eyebrow">{event.date}</p>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <ul>
                {event.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <a href="mailto:register@puckswithpurposehockey.com?subject=Tournament Registration">Request Info</a>
            </article>
          ))}
        </div>
      </section>

      <section id="impact" className="section stats">
        <div className="stat"><strong>$0</strong><span>Raised so far</span></div>
        <div className="stat"><strong>1</strong><span>Featured charity</span></div>
        <div className="stat"><strong>16</strong><span>Team target</span></div>
        <div className="stat"><strong>3+</strong><span>Games guaranteed</span></div>
      </section>

      <section className="section split charity">
        <div>
          <p className="eyebrow">Featured Cause</p>
          <h2>Team Trippy Foundation</h2>
          <p className="lead small">Our first featured event is being built to support the Team Trippy Foundation and create a memorable day for the hockey community.</p>
        </div>
        <div className="flyerWrap">
          <img src="/images/tournament-flyer.png" alt="Pucks With Purpose tournament flyer" />
        </div>
      </section>

      <section id="sponsors" className="section darkPanel">
        <div className="sectionHeader">
          <p className="eyebrow">Partner With Us</p>
          <h2>Sponsorship packages for businesses that want to support local impact.</h2>
        </div>
        <div className="sponsorGrid">
          {sponsorLevels.map(([level, price, description]) => (
            <div className="sponsor" key={level}>
              <h3>{level}</h3>
              <strong>{price}</strong>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className="centered"><a className="button primary" href="mailto:sponsors@puckswithpurposehockey.com?subject=Pucks With Purpose Sponsorship">Ask About Sponsorship</a></div>
      </section>

      <section id="merch" className="section merch">
        <p className="eyebrow">Merchandise</p>
        <h2>Tournament apparel coming soon.</h2>
        <p className="lead small">Shirts, hoodies, hats, stickers, and event-specific gear will be available at tournaments and online as the brand grows.</p>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">Contact</p>
        <h2>Ready to play, sponsor, volunteer, or partner with us?</h2>
        <div className="actions centerActions">
          <a className="button primary" href="mailto:info@puckswithpurposehockey.com">Email Us</a>
          <a className="button secondary" href="mailto:register@puckswithpurposehockey.com?subject=Team Registration">Register Interest</a>
        </div>
      </section>

      <footer>
        <strong>Pucks With Purpose Hockey</strong>
        <span>Play Hard. Give Back.</span>
        <span>puckswithpurposehockey.com</span>
      </footer>
    </main>
  );
}
