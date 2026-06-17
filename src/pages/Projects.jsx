import { useState, useEffect, useRef } from 'react'
import styles from './Projects.module.css'
import linkPacificImg from '../assets/imagelinkpasific.png'
import DimcargoImg from '../assets/imagedimcargo.png'
import PbsiImg from '../assets/imagepbsi.png'
import AdmincbmImg from '../assets/imageadmincbm.png'
import AdminsequreImg from '../assets/imageadminsequre.png'
import AhmoilSpartImg from '../assets/imageahmoilsparepart.png'
import CbmImg from '../assets/imagecbmdashboard.png'
import SequreImg from '../assets/imagesequre.png'
import WmsImg from '../assets/imagewms.png'

const projects = [
  // {
  //   id: 1,
  //   title: 'Analytics Dashboard',
  //   desc: 'Dashboard untuk analisis data dengan visualisasi interaktif.',
  //   tags: ['Next.js', 'Tailwind CSS', 'Chart.js'],
  //   category: 'Dashboard',
  //   color: '#e8edf5',
  //   textColor: '#3b82f6',
  // },
  {
    id: 2,
    title: 'Link Pacific Logistics',
    desc: 'Website company profile perusahaan logistik dengan layanan Air Freight, Export & Import, SOC, dan fitur tracking pengiriman secara real-time.',
    tags: ['WordPress', 'WooCommerce', 'Elementor'],
    category: 'Landing Page',
    color: '#10b981',
    images: linkPacificImg,
    url: 'https://linkpasipik.com/'
  },
  {
    id: 3,
    title: 'PBSI',
    desc: 'Sistem e-commerce untuk pemesanan shuttlecock, dilengkapi fitur manajemen produk, transaksi, dan pemantauan pesanan.',
    tags: ['Laravel', 'Figma', 'Tailwind CSS'],
    category: 'E-Commerce',
    color: '#f59e0b',
    images: PbsiImg,
    url: 'https://sadmin.sequre.id/'
  },
  {
    id: 4,
    title: 'Dim-cargo',
    desc: 'Landing page perusahaan logistik dengan fitur tracking dan informasi layanan.',
    tags: ['WordPress', 'Elementor', 'SEO'],
    category: 'Landing Page',
    color: '#10b981',
    images: DimcargoImg,
    url: 'https://dim-cargo.co.id/'
  },
  {
    id: 5,
    title: 'CBM Dashboard',
    desc: 'Dashboard monitoring kondisi mesin berbasis data sensor real-time.',
    tags: ['React', 'Recharts', 'Tailwind CSS', 'REST API'],
    category: 'Dashboard',
    color: '#6366f1',
    images: CbmImg,
    url: 'https://sahm-cbm.qtrust.id/highlight'
  },
  {
    id: 6,
    title: 'Admin CBM',
    desc: 'Panel admin untuk manajemen perangkat dan konfigurasi sistem CBM.',
    tags: ['React', 'Bootstrap', 'Tailwind CSS', 'REST API'],
    category: 'Dashboard',
    color: '#0ea5e9',
    images: AdmincbmImg,
    url: 'https://scbm-admin.qtrust.id/highlight'
  },
  {
    id: 7,
    title: 'Sequre',
    desc: 'Platform keamanan digital dengan fitur monitoring akses dan audit trail.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'E-Commerce',
    color: '#8b5cf6',
    images: SequreImg,
    url: 'https://sconnect.sequre.id/'
  },
  {
    id: 8,
    title: 'Admin Sequre',
    desc: 'Dashboard admin untuk manajemen user, role, dan konfigurasi sistem Sequre.',
    tags: ['Laravel', 'Tailwind CSS', 'Alpine.js'],
    category: 'Dashboard',
    color: '#7c3aed',
    images: AdminsequreImg,
    url: 'https://sadmin.sequre.id/login'
  },
  {
    id: 9,
    title: 'WMS',
    desc: 'Warehouse Management System untuk pengelolaan stok, inbound, dan outbound barang.',
    tags: ['Yii', 'MySQL', 'Bootstrap'],
    category: 'Web App',
    color: '#f97316',
    images: WmsImg,
    url: 'https://wms.ethix.id/index.php?r=site/login'
  },
  {
    id: 10,
    title: 'Ahmoil Sparepart',
    desc: 'Sistem kasir dan manajemen stok untuk toko sparepart otomotif.',
    tags: ['Laravel', 'Bootstrap', 'jQuery'],
    category: 'Web App',
    color: '#ef4444',
    images: AhmoilSpartImg,
    url: 'https://ahmoil.com/sparepart'
  },
]

const categories = ['All', 'Web App', 'Landing Page', 'E-Commerce', 'Dashboard']

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div
        className={styles.cardThumb}
        style={{ '--card-color': project.color, background: project.images ? '#f5f5f7' : project.color }}
      >
        {project.images ? (
          <img
            src={project.images}
            alt={project.title}
            className={styles.thumbImg}
          />
        ) : (
          <div className={styles.thumbInner}>
            <span
              className={styles.thumbLabel}
              style={{ color: project.textColor || 'rgba(255,255,255,0.85)' }}
            >
              {project.title[0]}
            </span>
          </div>
        )}
      </div>

      <div className={styles.cardBody}>
        <span className={styles.categoryBadge}>{project.category}</span>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.desc}</p>
        <div className={styles.cardTags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            View Project <span className={styles.linkArrow}>→</span>
          </a>
        ) : (
          <span className={styles.comingSoon}>Coming soon</span>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const [animKey, setAnimKey] = useState(0)

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  function handleFilter(cat) {
    setActive(cat)
    setAnimKey(k => k + 1)
  }

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
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid} key={animKey}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className={styles.center}>
          <button className={styles.loadMore}>View More Projects</button>
        </div>

      </div>
    </div>
  )
}