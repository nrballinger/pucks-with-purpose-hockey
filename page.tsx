import { CalendarDays, HeartHandshake, Trophy, Shirt, Users, MapPin, Mail, ShieldCheck } from 'lucide-react';

const features = [
  { icon: Trophy, title: 'Competitive Adult Tournaments', text: 'Organized events built for adult hockey players who want a great experience on and off the ice.' },
  { icon: HeartHandshake, title: 'Local Charity Impact', text: 'A portion of proceeds from every tournament supports a local charity, foundation, family, or community cause.' },
  { icon: Users, title: 'Community First', text: 'Players, sponsors, volunteers, and families come together for something bigger than the scoreboard.' }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">Pucks With Purpose</a>
          <div className="nav-links">
            <a href="#tournament">Tournament</a><a href="#mission">Mission</a><a href="#sponsors">Sponsors</a><a href="#register">Register</a>
          </div>
          <a className="btn btn-primary" href="#register">Register</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="container">
          <div className="eyebrow">Adult Hockey Tournaments Benefiting Local Charities</div>
          <h1>Play Hard.<br />Give Back.</h1>
          <p>Pucks With Purpose Hockey hosts competitive adult hockey tournaments where players battle for the cup while helping make a real impact in the local community.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#register">Register Your Team</a>
            <a className="btn btn-secondary" href="#sponsors">Become a Sponsor</a>
          </div>
          <div className="stats">
            <div className="stat"><strong>16</strong><span>Team Target</span></div>
            <div className="stat"><strong>3+</strong><span>Games Guaranteed</span></div>
            <div className="stat"><strong>$1,200</strong><span>Team Entry</span></div>
            <div className="stat"><strong>1</strong><span>Local Cause</span></div>
          </div>
        </div>
      </section>

      <section id="tournament" className="section">
        <div className="container event">
          <div>
            <div className="eyebrow">Upcoming Tournament</div>
            <h2>Labor Day Charity Classic</h2>
            <p className="lead">A one-day adult 3v3 hockey tournament presented by Pucks With Purpose Hockey, supporting the Team Trippy Foundation.</p>
            <div className="hero-actions"><a className="btn btn-primary" href="#register">Claim a Team Spot</a><a className="btn btn-secondary" href="#contact">Ask a Question</a></div>
          </div>
          <div className="event-panel">
            <div className="details">
              <div className="detail"><span>Date</span><strong>September 7, 2026</strong></div>
              <div className="detail"><span>Location</span><strong>Polk Athletic Complex</strong></div>
              <div className="detail"><span>Format</span><strong>3v3 Adult Hockey</strong></div>
              <div className="detail"><span>Games</span><strong>3 Guaranteed + Playoffs</strong></div>
              <div className="detail"><span>Entry</span><strong>$1,200 / Team</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="section">
        <div className="container">
          <div className="eyebrow">Why We Exist</div>
          <h2>Built for hockey. Driven by purpose.</h2>
          <p className="lead">Pucks With Purpose was created to bring adult hockey players together for fun, competitive, well-run tournaments while using the game we love to support local charities and good causes.</p>
          <div className="grid">
            {features.map(({ icon: Icon, title, text }) => <div className="card" key={title}><Icon size={34}/><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Tournament Experience</div>
          <h2>More than just games.</h2>
          <div className="grid">
            <div className="card"><CalendarDays/><h3>Organized Schedule</h3><p>Clear schedule, guaranteed games, playoffs, and championship energy.</p></div>
            <div className="card"><Shirt/><h3>Event Merchandise</h3><p>Limited run tournament shirts, hats, hoodies, pucks, and future player gear.</p></div>
            <div className="card"><ShieldCheck/><h3>Cause Transparency</h3><p>Each event highlights the beneficiary and the impact created by the tournament.</p></div>
          </div>
        </div>
      </section>

      <section id="impact" className="section">
        <div className="container">
          <div className="eyebrow">Charity Impact</div>
          <h2>Every tournament leaves a mark.</h2>
          <div className="impact">$0+</div>
          <p className="lead">This counter starts at launch and grows with every Pucks With Purpose event. First featured cause: Team Trippy Foundation.</p>
        </div>
      </section>

      <section id="sponsors" className="section">
        <div className="container">
          <div className="eyebrow">Sponsor Opportunities</div>
          <h2>Put your business behind the cause.</h2>
          <p className="lead">Sponsors help improve the player experience, increase the donation amount, and connect their business with the local hockey community.</p>
          <div className="sponsors">
            <div className="sponsor">Presenting</div><div className="sponsor">Gold</div><div className="sponsor">Silver</div><div className="sponsor">Community</div><div className="sponsor">Merch</div>
          </div>
        </div>
      </section>

      <section id="register" className="section">
        <div className="container">
          <div className="eyebrow">Register / Contact</div>
          <h2>Ready to play with purpose?</h2>
          <p className="lead">Use this form section as the public call-to-action. Connect it later to Google Forms, Jotform, Stripe, Square, or a custom backend.</p>
          <form className="form" action="mailto:info@puckswithpurposehockey.com" method="post" encType="text/plain">
            <input name="name" placeholder="Name" required />
            <input name="email" placeholder="Email" type="email" required />
            <select name="interest" defaultValue="Team Registration">
              <option>Team Registration</option><option>Sponsor Inquiry</option><option>Merchandise</option><option>Volunteer</option><option>General Question</option>
            </select>
            <textarea name="message" placeholder="Message" />
            <button className="btn btn-primary" type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <p><strong>Pucks With Purpose Hockey</strong> — Play Hard. Give Back.</p>
          <p><MapPin size={15}/> Central Florida &nbsp; <Mail size={15}/> info@puckswithpurposehockey.com</p>
        </div>
      </footer>
    </main>
  );
}
