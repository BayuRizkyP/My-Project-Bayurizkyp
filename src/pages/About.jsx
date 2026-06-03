import styles from './About.module.css'

const stats = [
  {
    value: '2+',
    label: 'Years Experience',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    value: '15+',
    label: 'Projects Completed',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    value: '10+',
    label: 'Happy Clients',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 13s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    value: 'Always',
    label: 'Learning',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
]

const skills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'UI/UX', level: 80 },
]

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Top: Bio + Photo */}
        <div className={styles.topGrid}>
          <div className={styles.bioSide}>
            <p className={styles.eyebrow}>GET TO KNOW ME</p>
            <h1 className={styles.title}>About Me</h1>
            <div className={styles.titleLine} />
            <p className={styles.desc}>
              I'm a passionate web developer with experience in building
              modern web applications using JavaScript, React, Next.js,
              and more.
            </p>
            <p className={styles.desc}>
              I love turning complex problems into simple, beautiful and
              intuitive solutions.
            </p>
            <p className={styles.desc}>
              When I'm not coding, you can find me learning something
              new, exploring UI/UX design, or enjoying a good cup of coffee.
            </p>
          </div>
          <div className={styles.photoSide}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&crop=face"
              alt="Profile"
              className={styles.photo}
            />
          </div>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statIconWrap}>{s.icon}</div>
              <div className={styles.statText}>
                <strong className={styles.statValue}>{s.value}</strong>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className={styles.skillsSection}>
          <p className={styles.skillsLabel}>SKILLS</p>
          <div className={styles.skillsRow}>
            {skills.map(skill => (
              <div key={skill.name} className={styles.skillItem}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPct}>{skill.level}%</span>
                </div>
                <div className={styles.bar}>
                  <div className={styles.barFill} style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}