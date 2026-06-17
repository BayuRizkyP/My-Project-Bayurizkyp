import { useState } from 'react'
import styles from './Contact.module.css'

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* Left: Info */}
          <div className={styles.infoSide}>
            <p className={styles.eyebrow}>GET IN TOUCH</p>
            <h1 className={styles.title}>Contact Me</h1>
            <div className={styles.titleLine} />
            <p className={styles.sub}>
              Have a project in mind or just want to say hi?<br />
              I'd love to hear from you!
            </p>

            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>
                  <MailIcon />
                </span>
                <a href="mailto: bayurizkyprayinusa@gmail.com">bayurizkyprayinusa@gmail.com</a>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.36 6.36l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <span>+62 896-3783-7726</span>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>Bekasi, Indonesia</span>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span>Available for freelance & full-time</span>
              </li>
            </ul>

            <div className={styles.socials}>
              <a href="https://github.com/BayuRizkyP" target="_blank" rel="noreferrer" className={styles.social} aria-label="GitHub"><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/bayurizkyprayinusa/" target="_blank" rel="noreferrer" className={styles.social} aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="mailto: bayurizkyprayinusa@gmail.com" className={styles.social} aria-label="Email"><MailIcon /></a>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formSide}>
            {sent ? (
              <div className={styles.success}>
                <span>✅</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon!</p>
                <button className={styles.resetBtn} onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send Message →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}