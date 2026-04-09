import { MetadataRoute } from 'next'
import localTrades from './data/localTrades.json'

const BASE_URL = 'https://novark-agency.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
    const tradeRoutes: MetadataRoute.Sitemap = localTrades.map((trade) => ({
        url: `${BASE_URL}/trades/${trade.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...tradeRoutes,
    ]
}