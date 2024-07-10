/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode:false,
	async rewrites() {
		return [
			{
				source: '/server/:slug*',
				destination: 'http://localhost:8888/:slug*',
			},
		];
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
