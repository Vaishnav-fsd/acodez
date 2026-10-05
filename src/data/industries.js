// src/data/industries.js
//
// All images live in:  public/images/industries/   (all .jpeg)
//
// `tab`  = which bottom tab selects this industry (null = no tab)
// `icon` = key into the ICONS map in Industries.jsx
// `color`/`bw` = image paths (root paths from the Vite /public folder, no imports needed)
//
// If an industry has no `bw` file, the hover effect falls back to a CSS grayscale filter.
// To use a real b/w photo later, just add:  bw: '/images/industries/<name>-bw.jpeg'

export const industries = [
  {
    id: 'agriculture',
    label: 'Agriculture & Irrigation',
    tab: 'Agriculture',
    icon: 'tractor',
    color: '/images/industries/agriculture.jpeg',
  },
  {
    id: 'mining',
    label: 'Mining',
    tab: 'Mining',
    icon: 'mine',
    color: '/images/industries/mining-color.png',
    bw: '/images/industries/mining-bw.png',
  },
  {
    id: 'defence',
    label: 'Defence',
    tab: null,
    icon: 'shield',
    color: '/images/industries/defence.jpeg',
  },
  {
    id: 'architecture',
    label: 'Architecture',
    tab: 'Building',
    icon: 'building',
    color: '/images/industries/architecture.jpeg',
  },
  {
    id: 'transport',
    label: 'Transport & Infrastructure',
    tab: 'Transport & Infrastructure',
    icon: 'bus',
    color: '/images/industries/transport.jpeg',
  },
  {
    id: 'civil',
    label: 'Civil',
    tab: 'Civil',
    icon: 'hardhat',
    color: '/images/industries/civil.jpeg',
  },
];