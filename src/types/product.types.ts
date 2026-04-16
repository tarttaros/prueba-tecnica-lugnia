// ── Producto ──────────────────────────────────────────────────────────

export interface product {
  id: number
  name: string
  description: string
  price: number
  material: string
  category: {
    id: number
  }
}

//---- Producto con categoria -------------------------------------------
export interface productWCategory {
  id: number
  name: string
  description: string
  price: number
  material: string
  category: {
    id: number
    title: string
  }
}