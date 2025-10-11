/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.postimg.cc',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'i.pinimg.com',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
