import { useState } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    desc: 'Dashboard untuk analisis data dengan visualisasi interaktif.',
    tags: ['Next.js', 'Tailwind CSS', 'Chart.js'],
    category: 'Dashboard',
    color: '#3b82f6',
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    desc: 'Website toko online dengan fitur keranjang, pembayaran, dan manajemen produk.',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'E-Commerce',
    color: '#10b981',
  },
  {
    id: 3,
    title: 'Task Management App',
    desc: 'Aplikasi manajemen tugas dengan fitur drag & drop dan status.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'Web App',
    color: '#8b5cf6',
  },
  {
    id: 4,
    title: 'Landing Page SaaS',
    desc: 'Landing page modern untuk produk SaaS dengan animasi halus dan CTA optimal.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    category: 'Landing Page',
    color: '#f59e0b',
  },
  {
    id: 5,
    title: 'Blog Platform',
    desc: 'Platform blog dengan CMS custom, markdown support, dan SEO optimization.',
    tags: ['Next.js', 'MDX', 'PostgreSQL'],
    category: 'Web App',
    color: '#ef4444',
  },
  {
    id: 6,
    title: 'Portfolio Template',
    desc: 'Template portofolio yang dapat dikustomisasi untuk developer dan desainer.',
    tags: ['React', 'CSS Modules', 'Vite'],
    category: 'Landing Page',
    color: '#06b6d4',
  },
]

const categories = ['All', 'Web App', 'Landing Page', 'E-Commerce', 'Dashboard']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>MY WORK</p>
          <h1 className={styles.title}>My Projects</h1>
          <p className={styles.sub}>Here are some of the projects I've worked on.</p>
        </div>

        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map(project => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardThumb} style={{ '--card-color': project.color }}>
                <div className={styles.thumbInner}>
                  <span className={styles.thumbLabel}>{project.title[0]}</span>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>
                <div className={styles.cardTags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <a href="#" className={styles.cardLink}>
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.center}>
          <button className={styles.loadMore}>View More Projects</button>
        </div>
      </div>
    </div>
  )
}
