/** @type {import('next').NextConfig} */
const nextConfig = {
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
