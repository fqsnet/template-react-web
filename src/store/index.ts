import { create } from 'zustand'
// import { persist } from 'zustand/middleware'

interface BearState {
  bears: number
  increase: (by: number) => void
}

export const useBearStore = create<BearState>()(set => ({
  bears: 0,
  increase: by => set(state => ({ bears: state.bears + by }))
}))
