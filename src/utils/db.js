export default {
	findProductBySlug: (slug) => {
		const prds = products.filter((product) => product.slug === slug);
		if (prds.length === 0) {
			return null;
		} else {
			return prds[0];
		}
	},
	findAllProduct: () => {
		return products;
	}
};

const products = [
	{
		id: 1,
		name: 'Keyboard Mechanical Custom',
		slug: 'keyboard-mechanical-custom-31230213212',
		storeId: 2,
		sold: 4050,
		price: 525000,
		rating: 4.9,
		numRating: 3200,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya',
			image: '/img/keyboard1.jpg',
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
					options: ['White', 'Black']
				},
				{
					name: 'Switch',
					options: ['Red', 'Brown', 'Black']
				}
			],
			priceMapping: []
		},
		images: [
			{
				url: '/img/keyboard0.jpg',
				caption: 'Photo 1'
			},
			{
				url: '/img/keyboard1.jpg',
				caption: 'Photo 2'
			},
			{
				url: '/img/keyboard2.jpg',
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
		name: 'DIY Lampu Tidur',
		slug: 'diy-lampu-tidur-31230213212',
		storeId: 2,
		sold: 100,
		price: 124000,
		rating: 4.8,
		numRating: 80,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya',
			image: '/img/keyboard1.jpg',
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
					price: 124000
				},
				{
					choice: ['any', 'M'],
					price: 120000
				}
			]
		},

		images: [
			{
				url: '/img/lamp0.jpg',
				caption: 'Mood Lamp'
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
		price: 750000,
		rating: 4.6,
		numRating: 990,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya',
			image: '/img/keyboard1.jpg',
			sold: 23000,
			rating: 4.5,
			numRating: 8750,
			lastActive: 450,
			note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere vero libero veniam quisquam dolor voluptatibus illum fugiat magnam soluta. Neque odio alias possimus, necessitatibus'
		},
		images: [
			{
				url: '/img/guitar0.jpg',
				caption: 'Guitar 1'
			},
			{
				url: '/img/guitar1.jpg',
				caption: 'Guitar 2'
			},
			{
				url: '/img/guitar2.jpg',
				caption: 'Guitar 3'
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
		price: 750000,
		rating: 4.6,
		numRating: 990,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya',
			image: '/img/keyboard1.jpg',
			sold: 23000,
			rating: 4.5,
			numRating: 8750,
			lastActive: 450,
			note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere vero libero veniam quisquam dolor voluptatibus illum fugiat magnam soluta. Neque odio alias possimus, necessitatibus'
		},
		images: [
			{
				url: '/img/guitar0.jpg',
				caption: 'Guitar 1'
			},
			{
				url: '/img/guitar1.jpg',
				caption: 'Guitar 2'
			},
			{
				url: '/img/guitar2.jpg',
				caption: 'Guitar 3'
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
		id: 1,
		name: 'Keyboard Mechanical Custom',
		slug: 'keyboard-mechanical-custom-31230213212',
		storeId: 2,
		sold: 4050,
		price: 525000,
		rating: 4.9,
		numRating: 3200,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya',
			image: '/img/keyboard1.jpg',
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
					options: ['White', 'Black']
				},
				{
					name: 'Switch',
					options: ['Red', 'Brown', 'Black']
				}
			],
			priceMapping: []
		},
		images: [
			{
				url: '/img/keyboard0.jpg',
				caption: 'Photo 1'
			},
			{
				url: '/img/keyboard1.jpg',
				caption: 'Photo 2'
			},
			{
				url: '/img/keyboard2.jpg',
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
		id: 1,
		name: 'Keyboard Mechanical Custom',
		slug: 'keyboard-mechanical-custom-31230213212',
		storeId: 2,
		sold: 4050,
		price: 525000,
		rating: 4.9,
		numRating: 3200,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya',
			image: '/img/keyboard1.jpg',
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
					options: ['White', 'Black']
				},
				{
					name: 'Switch',
					options: ['Red', 'Brown', 'Black']
				}
			],
			priceMapping: []
		},
		images: [
			{
				url: '/img/keyboard0.jpg',
				caption: 'Photo 1'
			},
			{
				url: '/img/keyboard1.jpg',
				caption: 'Photo 2'
			},
			{
				url: '/img/keyboard2.jpg',
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
		id: 3,
		name: 'Custom Gitar',
		slug: 'custom-gitar-31230213212',
		storeId: 2,
		sold: 1200,
		price: 750000,
		rating: 4.6,
		numRating: 990,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya',
			image: '/img/keyboard1.jpg',
			sold: 23000,
			rating: 4.5,
			numRating: 8750,
			lastActive: 450,
			note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere vero libero veniam quisquam dolor voluptatibus illum fugiat magnam soluta. Neque odio alias possimus, necessitatibus'
		},
		images: [
			{
				url: '/img/guitar0.jpg',
				caption: 'Guitar 1'
			},
			{
				url: '/img/guitar1.jpg',
				caption: 'Guitar 2'
			},
			{
				url: '/img/guitar2.jpg',
				caption: 'Guitar 3'
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
		price: 750000,
		rating: 4.6,
		numRating: 990,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya',
			image: '/img/keyboard1.jpg',
			sold: 23000,
			rating: 4.5,
			numRating: 8750,
			lastActive: 450,
			note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere vero libero veniam quisquam dolor voluptatibus illum fugiat magnam soluta. Neque odio alias possimus, necessitatibus'
		},
		images: [
			{
				url: '/img/guitar0.jpg',
				caption: 'Guitar 1'
			},
			{
				url: '/img/guitar1.jpg',
				caption: 'Guitar 2'
			},
			{
				url: '/img/guitar2.jpg',
				caption: 'Guitar 3'
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
		id: 1,
		name: 'Keyboard Mechanical Custom',
		slug: 'keyboard-mechanical-custom-31230213212',
		storeId: 2,
		sold: 4050,
		price: 525000,
		rating: 4.9,
		numRating: 3200,
		address: {
			city: 'Kota Surabaya'
		},
		store: {
			name: 'Toko Jaya',
			image: '/img/keyboard1.jpg',
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
					options: ['White', 'Black']
				},
				{
					name: 'Switch',
					options: ['Red', 'Brown', 'Black']
				}
			],
			priceMapping: []
		},
		images: [
			{
				url: '/img/keyboard0.jpg',
				caption: 'Photo 1'
			},
			{
				url: '/img/keyboard1.jpg',
				caption: 'Photo 2'
			},
			{
				url: '/img/keyboard2.jpg',
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
	}
];
