import {Inter, Lusitana, Exo} from 'next/font/google'

// export const inter = Inter({subsets: ['latin']})

export const inter = Inter({
    weight: ['500', '900'],
    subsets: ['latin']
})


export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
})

export const exo = Exo({
    weight: ['400', '700'],
    subsets: ['latin-ext']
})