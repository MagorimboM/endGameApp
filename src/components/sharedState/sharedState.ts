import { create } from 'zustand'; 

type globalState = {
    update: boolean,
    setUpdate: () => void, 
    resetState: ()=>void
}; 

const Update = create<globalState>()((set) => ({
    update:false,
    setUpdate: () => set((state: any) => ({ update: true })),
    resetState: () => set((state: any) => ({ update: false }))
})); 

export {Update }; 

