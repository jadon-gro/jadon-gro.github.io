import profile from "../assets/profile.jpeg"

export default function Card() {
  return (
    <main className="card">  
      <img src={profile} className="card--profile_photo" />
      <div className="card--content">
        <h1 className="card--name">Jadon Grossberg</h1>
        <h3 className="card--job">Software Engineer</h3>
        <h4 className="card--url"><a href="https://github.com/jadon-gro">jadon-gro.github.io <i class="fa fa-github" aria-hidden="true"></i></a></h4>
        <div className="card--button">
          <a href="mailto:jadon.gro@gmail.com">
            <button className="card--email_btn">
            <i class="fa fa-envelope" aria-hidden="true"></i>
              Mail
            </button>
          </a>
          <a href="https://www.linkedin.com/in/jadon-grossberg/">
            <button className="card--linkedin_btn">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
              LinkedIn
            </button>
          </a>
        </div>
        <h2>About</h2>
        <p>
          I am a computer engineering undergraduate at the Georgia Institute of Technology.
          I love tinkering and learning new skills! I have EE experience but am looking to expand my understanding of SWE.
        </p>
        <h2>Interests</h2>
        <p>
          I love eating, learning how to make things, traveling, listening to new music, and sleeping!
        </p>
      </div>
    </main>
  )
}