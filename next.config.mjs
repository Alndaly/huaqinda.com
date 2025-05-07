import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = '1'
    import('velite').then(m => m.build({ watch: isDev, clean: !isDev }))
}

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'oss.kinda.info',
                port: '',
                pathname: '/image/**',
            },
            {
                protocol: 'https',
                hostname: 'oss.kinda.info',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

// const withMDX = createMDX({
//     extension: /\.(md|mdx)$/,
// })

// Merge MDX config with Next.js config
export default nextConfig