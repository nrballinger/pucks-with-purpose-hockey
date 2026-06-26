const tournaments = [
  {
    title: 'Labor Day Charity Classic',
    date: 'September 7, 2026',
    location: 'Polk Athletic Complex',
    details: ['16 Teams', '3 Games Guaranteed', 'Playoffs', '$1,200 Team Entry'],
    charity: 'Benefiting Team Trippy Foundation'
  },
  {
    title: 'Veterans Cup',
    date: 'Coming Soon',
    location: 'Central Florida',
    details: ['Adult Divisions', 'Sponsor Opportunities', 'Community Impact'],
    charity: 'Charity partner to be announced'
  },
  {
    title: 'Holiday Hockey Classic',
    date: 'Coming Soon',
    location: 'Central Florida',
    details: ['Tournament Weekend', 'Merchandise', 'Giving Back'],
    charity: 'Charity partner to be announced'
  }
];

const sponsorTiers = [
  ['Presenting Sponsor', 'Top billing, logo on event marketing, rink signage, social media features, and website placement.'],
  ['Gold Sponsor', 'Premium logo placement, event recognition, and social media promotion.'],
  ['Community Sponsor', 'Website sponsor wall, tournament shoutout, and community recognition.']
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">
          <img src="/images/pwp-logo.png" alt="Pucks With Purpose logo" />
          <span>Pucks With Purpose</span>
        </a>
        <div className="navLinks">
          <a href="#tournaments">Tournaments</a>
          <a href="#impact">Impact</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="iceGlow" />
        <div className="heroContent">
          <p className="eyebrow">Adult Hockey Tournaments • Central Florida</p>
          <h1>Pucks With Purpose Hockey</h1>
          <h2>Play Hard. Give Back.</h2>
          <p className="heroText">Competitive adult hockey tournaments built around community, charity, and an unforgettable player experience.</p>
          <div className="buttons">
            <a className="button primary" href="#register">Register Your Team</a>
            <a className="button secondary" href="#sponsors">Become a Sponsor</a>
          </div>
        </div>
      </section>

      <section className="featureBand">
        <div><strong>3</strong><span>Games Guaranteed</span></div>
        <div><strong>16</strong><span>Team Target</span></div>
        <div><strong>100%</strong><span>Community Driven</span></div>
        <div><strong>$</strong><span>Proceeds Support Charity</span></div>
      </section>

      <section id="about" className="section twoCol">
        <div>
          <p className="eyebrow">Our Mission</p>
          <h2>More than another tournament.</h2>
        </div>
        <div className="copy">
          <p>Pucks With Purpose exists to unite adult hockey players through competitive, professionally organized tournaments that give back to local charities, families, foundations, and community causes.</p>
          <p>Every event is built to create a first-class experience on the ice while making a real impact off the ice.</p>
        </div>
      </section>

      <section id="tournaments" className="section darkSection">
        <div className="sectionHeader">
          <p className="eyebrow">Upcoming Events</p>
          <h2>Tournament Series</h2>
        </div>
        <div className="cards">
          {tournaments.map((event) => (
            <article className="card" key={event.title}>
              <p className="cardDate">{event.date}</p>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <ul>
                {event.details.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <strong>{event.charity}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="impact" className="section impact">
        <div className="sectionHeader">
          <p className="eyebrow">Hall of Impact</p>
          <h2>Every tournament tells a bigger story.</h2>
          <p>As events are completed, this section will track charities supported, dollars donated, tournament champions, sponsors, photos, and memories.</p>
        </div>
        <div className="impactGrid">
          <div><strong>$0</strong><span>Raised so far</span></div>
          <div><strong>0</strong><span>Tournaments hosted</span></div>
          <div><strong>0</strong><span>Charities supported</span></div>
          <div><strong>0</strong><span>Players served</span></div>
        </div>
      </section>

      <section id="experience" className="section twoCol">
        <div>
          <p className="eyebrow">Player Experience</p>
          <h2>Built like a real event.</h2>
        </div>
        <div className="experienceList">
          <span>Competitive divisions</span>
          <span>Championship trophy</span>
          <span>Merchandise</span>
          <span>Food and entertainment</span>
          <span>Professional photos</span>
          <span>Charity spotlight</span>
        </div>
      </section>

      <section id="sponsors" className="section darkSection">
        <div className="sectionHeader">
          <p className="eyebrow">Partner With Us</p>
          <h2>Sponsor a tournament. Support a cause.</h2>
          <p>Sponsors help create a better tournament experience while increasing the donation impact for each featured charity.</p>
        </div>
        <div className="sponsorGrid">
          {sponsorTiers.map(([tier, text]) => (
            <div className="sponsor" key={tier}>
              <h3>{tier}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="register" className="section register">
        <div>
          <p className="eyebrow">Registration</p>
          <h2>Ready to play?</h2>
          <p>Team registration, sponsor registration, and volunteer forms can be connected here. For launch, this button opens an email so teams can reserve their spot.</p>
        </div>
        <a className="button primary large" href="mailto:info@puckswithpurposehockey.com?subject=Team Registration Inquiry">Reserve a Team Spot</a>
      </section>

      <section id="contact" className="section contact">
        <div className="contactCard">
          <p className="eyebrow">Contact</p>
          <h2>Bring your team. Bring your business. Bring your purpose.</h2>
          <p>Email: <a href="mailto:info@puckswithpurposehockey.com">info@puckswithpurposehockey.com</a></p>
          <p>Website: puckswithpurposehockey.com</p>
        </div>
      </section>

      <footer>
        <img src="/images/pwp-logo.png" alt="Pucks With Purpose logo" />
        <p>© 2026 Pucks With Purpose Hockey. Play Hard. Give Back.</p>
      </footer>
    </main>
  );
}
