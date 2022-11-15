import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const products = [
  {
    name: 'Apple',
    slug: '/apple',
    price: {
      value: 20,
    },
    defaultImage: {
      url: '/product-images/Red_Apple.jpg',
      alt: 'default image',
    },
    images: [
      {
        url: '/product-images/Red_Apple.jpg',
      },
    ],
  },
  {
    name: 'Banana',
    slug: '/banana',
    price: {
      value: 20,
    },
    defaultImage: {
      url: '/product-images/320px-Bananas_white_background_DS.jpg',
      alt: 'default image',
    },
    images: [
      {
        url: '/product-images/320px-Bananas_white_background_DS.jpg',
      },
    ],
  },
  {
    name: 'Grapes',
    slug: '/grapes',
    price: {
      value: 20,
    },
    defaultImage: {
      url: '/product-images/320px-Table_grapes_on_white.jpg',
      alt: 'default image',
    },
    images: [
      {
        url: '/product-images/320px-Table_grapes_on_white.jpg',
      },
    ],
  },
  {
    name: 'PineApple',
    slug: '/pineapple',
    price: {
      value: 20,
    },
    defaultImage: {
      url: '/product-images/286px-Pineapple_and_cross_section.jpg',
      alt: 'default image',
    },
    images: [
      {
        url: '/product-images/286px-Pineapple_and_cross_section.jpg',
      },
    ],
  },
]

async function seed() {
  await prisma.$connect()
  await prisma.product.createMany({ data: products })
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
