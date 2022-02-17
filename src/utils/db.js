export default {
	findProductBySlug: (slug) => {
		const prds = products.filter((product) => product.slug === slug);
		if (prds.length !== 1) {
			return null;
		} else {
			return prds[0];
		}
	}
};

const products = [
	{
		id: 1,
		name: 'Keyboard Mechanical Custom',
		slug: 'keyboard-mechanical-custom-31230213212',
		storeId: 2,
		sold: 4050,
		price: 700000,
		rating: 4.9,
		numRating: 3200,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya Bangunan',
			image: 'https://placeimg.com/640/480/2',
			sold: 23000,
			rating: 4.5,
			numRating: 8750,
			lastActive: 450,
			note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere vero libero veniam quisquam dolor voluptatibus illum fugiat magnam soluta. Neque odio alias possimus, necessitatibus'
		},
		type: {
			variants: [
				{
					name: 'Color',
					options: ['Merah', 'Biru', 'Hijau', 'Orange', 'Kuning']
				},
				{
					name: 'Size',
					options: ['S', 'M', 'L', 'XL']
				}
			],
			priceMapping: [
				{
					choice: ['any', 'S'],
					price: 700000
				},
				{
					choice: ['any', 'M'],
					price: 730000
				},
				{
					choice: ['any', 'L'],
					price: 760000
				},
				{
					choice: ['any', 'XL'],
					price: 800000
				}
			]
		},
		images: [
			{
				url: 'https://placeimg.com/640/480/1',
				caption: 'Photo 1'
			},
			{
				url: 'https://placeimg.com/640/480/2',
				caption: 'Photo 2'
			},
			{
				url: 'https://placeimg.com/640/480/3',
				caption: 'Photo 3'
			}
		],
		description: {
			specifications: [
				{
					title: 'Kondisi',
					value: 'Baru'
				},
				{
					title: 'Garansi',
					value: '1 Tahun'
				},
				{
					title: 'Tegangan',
					value: '12v'
				}
			],
			text: `
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit, vero est, reiciendis repellat, accusantium officia illo voluptatibus eum repellendus corporis iure cumque sunt molestias quisquam qui aliquid rerum dolorem?
                <br/>
                <br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit, vero est, reiciendis repellat, accusantium officia illo voluptatibus eum repellendus corporis iure cumque sunt molestias quisquam qui aliquid rerum dolorem?
                <br/>
                <br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit, vero est, reiciendis repellat, accusantium officia illo voluptatibus eum repellendus corporis iure cumque sunt molestias quisquam qui aliquid rerum dolorem?
                <br/>
                <br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit, vero est, reiciendis repellat, accusantium officia illo voluptatibus eum repellendus corporis iure cumque sunt molestias quisquam qui aliquid rerum dolorem?ss
                <br/>
            `
		}
	},
	{
		id: 2,
		name: 'DIY Lampu Tidur Acrilic',
		slug: 'diy-lampu-tidur-acrilic-31230213212',
		storeId: 2,
		sold: 100,
		price: 100000,
		rating: 4.8,
		numRating: 80,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya Bangunan',
			image: 'https://placeimg.com/640/480/2',
			sold: 23000,
			rating: 4.5,
			numRating: 8750,
			lastActive: 450,
			note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere vero libero veniam quisquam dolor voluptatibus illum fugiat magnam soluta. Neque odio alias possimus, necessitatibus'
		},
		type: {
			variants: [
				{
					name: 'Color',
					options: ['Merah', 'Biru', 'Hijau']
				},
				{
					name: 'Size',
					options: ['S', 'M']
				}
			],
			priceMapping: [
				{
					choice: ['any', 'S'],
					price: 100000
				},
				{
					choice: ['any', 'M'],
					price: 120000
				}
			]
		},

		images: [
			{
				url: 'https://picsum.photos/id/1/200/300',
				caption: 'Photo 1'
			},
			{
				url: 'https://picsum.photos/id/2/200/300',
				caption: 'Photo 2'
			},
			{
				url: 'https://picsum.photos/id/3/200/300',
				caption: 'Photo 3'
			}
		],
		description: {
			specifications: [
				{
					title: 'Kondisi',
					value: 'Baru'
				},
				{
					title: 'Garansi',
					value: '1 Tahun'
				},
				{
					title: 'Tegangan',
					value: '5v'
				}
			],
			text: `
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit, vero est, reiciendis repellat, accusantium officia illo voluptatibus eum repellendus corporis iure cumque sunt molestias quisquam qui aliquid rerum dolorem?
                <br/>
                <br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit, vero est, reiciendis repellat, accusantium officia illo voluptatibus eum repellendus corporis iure cumque sunt molestias quisquam qui aliquid rerum dolorem?
                <br/>
                <br/>
            `
		}
	},
	{
		id: 3,
		name: 'Custom Gitar',
		slug: 'custom-gitar-31230213212',
		storeId: 2,
		sold: 1200,
		price: 400000,
		rating: 4.6,
		numRating: 990,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya Bangunan',
			image: 'https://placeimg.com/640/480/2',
			sold: 23000,
			rating: 4.5,
			numRating: 8750,
			lastActive: 450,
			note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere vero libero veniam quisquam dolor voluptatibus illum fugiat magnam soluta. Neque odio alias possimus, necessitatibus'
		},
		images: [
			{
				url: 'https://picsum.photos/id/4/200/300',
				caption: 'Photo 1'
			},
			{
				url: 'https://picsum.photos/id/5/200/300',
				caption: 'Photo 2'
			},
			{
				url: 'https://picsum.photos/id/5/200/300',
				caption: 'Photo 3'
			}
		],
		description: {
			specifications: [
				{
					title: 'Kondisi',
					value: 'Baru'
				},
				{
					title: 'Garansi',
					value: '1 Tahun'
				},
				{
					title: 'Tegangan',
					value: '5v'
				}
			],
			text: `
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit, vero est, reiciendis repellat, accusantium officia illo voluptatibus eum repellendus corporis iure cumque sunt molestias quisquam qui aliquid rerum dolorem?
                <br/>
                <br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit, vero est, reiciendis repellat, accusantium officia illo voluptatibus eum repellendus corporis iure cumque sunt molestias quisquam qui aliquid rerum dolorem?
                <br/>
                <br/>
            `
		}
	}
];
