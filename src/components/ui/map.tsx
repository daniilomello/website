'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

export const MapCard = () => {
    const { theme } = useTheme()
    return (
        <Image
            className="w-full h-full object-cover saturate-[0.1] opacity-50"
            width={1080}
            height={1080}
            src="/map-dark.png"
            alt="map image"
        />
    )
}
