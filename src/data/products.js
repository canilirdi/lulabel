export const categories = [
  { key: 'girls',       label: 'Girls',       emoji: '👗', color: '#f9c0d8', desc: 'Ages 0–14' },
  { key: 'boys',        label: 'Boys',        emoji: '👕', color: '#b8d8f0', desc: 'Ages 0–14' },
  { key: 'baby',        label: 'Baby',        emoji: '🍼', color: '#fde9b8', desc: 'Ages 0–2'  },
  { key: 'accessories', label: 'Accessories', emoji: '👜', color: '#d8c8f0', desc: 'Bags & More' },
]

export const brands = [
  { name: 'Gucci Kids',   short: 'GUCCI',   color: '#1a1a1a', bg: '#f5f0e8' },
  { name: 'Burberry',     short: 'BURBERRY',color: '#8b4513', bg: '#f5f0e8' },
  { name: 'Moncler Kids', short: 'MONCLER', color: '#1a1a6e', bg: '#eef0f8' },
  { name: 'Fendi Kids',   short: 'FENDI',   color: '#8b6914', bg: '#fdf5e0' },
  { name: 'Versace',      short: 'VERSACE', color: '#8b0000', bg: '#fff0f0' },
  { name: 'D&G Kids',     short: 'D&G',     color: '#2d2d2d', bg: '#f8f8f5' },
  { name: 'Boss Kids',    short: 'BOSS',    color: '#1a1a1a', bg: '#f5f5f5' },
  { name: 'Kenzo Kids',   short: 'KENZO',   color: '#006b3c', bg: '#edf7f1' },
]

export const products = [
  {
    id: 1, brand: 'Gucci Kids', name: 'GG Logo Dress', price: 320, category: 'girls',
    color: '#f9c0d8', badge: 'New In', sizes: ['2Y','4Y','6Y','8Y'],
    emoji: '👗',
  },
  {
    id: 2, brand: 'Burberry', name: 'Nova Check Coat', price: 480, category: 'boys',
    color: '#c8a882', badge: 'Bestseller', sizes: ['3Y','4Y','6Y','8Y','10Y'],
    emoji: '🧥',
  },
  {
    id: 3, brand: 'Moncler', name: 'Puffer Jacket', price: 590, category: 'girls',
    color: '#f4a7b9', badge: 'New In', sizes: ['2Y','4Y','6Y'],
    emoji: '🧥',
  },
  {
    id: 4, brand: 'Fendi Kids', name: 'FF Logo Romper', price: 210, category: 'baby',
    color: '#fde9b8', badge: null, sizes: ['3M','6M','9M','12M','18M'],
    emoji: '👶',
  },
  {
    id: 5, brand: 'Versace', name: 'Medusa Sneakers', price: 270, category: 'boys',
    color: '#b8d0f0', badge: 'Low Stock', sizes: ['24','25','26','27','28'],
    emoji: '👟',
  },
  {
    id: 6, brand: 'D&G Kids', name: 'Leopard Print Set', price: 340, category: 'girls',
    color: '#f5d5a0', badge: 'New In', sizes: ['4Y','6Y','8Y','10Y'],
    emoji: '✨',
  },
  {
    id: 7, brand: 'Gucci Kids', name: 'Mini GG Backpack', price: 450, category: 'accessories',
    color: '#d8c8a0', badge: 'Bestseller', sizes: ['One Size'],
    emoji: '🎒',
  },
  {
    id: 8, brand: 'Boss Kids', name: 'Logo Polo Shirt', price: 120, category: 'boys',
    color: '#b8d8f0', badge: null, sizes: ['4Y','6Y','8Y','10Y','12Y'],
    emoji: '👕',
  },
  {
    id: 9, brand: 'Kenzo Kids', name: 'Tiger Sweatshirt', price: 180, category: 'girls',
    color: '#c8f0d8', badge: 'New In', sizes: ['4Y','6Y','8Y','10Y'],
    emoji: '🐯',
  },
  {
    id: 10, brand: 'Burberry', name: 'Check Hat & Scarf Set', price: 195, category: 'accessories',
    color: '#c8a882', badge: null, sizes: ['One Size'],
    emoji: '🧣',
  },
  {
    id: 11, brand: 'Fendi Kids', name: 'Logo Bodysuit', price: 160, category: 'baby',
    color: '#fde9b8', badge: 'Bestseller', sizes: ['3M','6M','9M','12M'],
    emoji: '👶',
  },
  {
    id: 12, brand: 'Moncler', name: 'Down Snowsuit', price: 650, category: 'baby',
    color: '#f8c8d8', badge: 'New In', sizes: ['6M','9M','12M','18M','24M'],
    emoji: '🌨️',
  },
]
