import { PrismaClient, ProductReview } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const generateProduct = () => {
  const name = faker.helpers.arrayElement([
    'Apple',
    'PineApple',
    'Banana',
    'Grapes',
  ])
  const description = 'This is ' + name
  const category = {
    name: 'Fruits',
    description: 'beautiful fuits haha!',
  }
  const discount = {
    name: 'Fruit Discount',
    description: 'Discount for fruits!',
    discountPercent: faker.datatype.number({ min: 5, max: 20 }),
    active: faker.datatype.boolean(),
  }
  const price = {
    value: faker.datatype.number({ min: 20, max: 80 }),
    currencyCode: 'INR',
  }
  const defaultImage = {
    url: '/fruits/' + name.toLowerCase() + '.jpg',
    alt: name.toLowerCase(),
  }
  const images = [defaultImage]
  const countInStock = faker.datatype.number({ min: 0, max: 20 })
  const reviews: ProductReview[] = [
    { rating: 4.5, title: 'good', review: 'good product' },
    { rating: 1, title: 'bad', review: 'bad product' },
    { rating: 3, title: 'avg', review: 'ok product' },
  ]
  const totalReviews = reviews.length
  const avgRating = reviews.reduce(
    (t, review) => (t + review.rating) / totalReviews,
    0
  )
  const slug = '/' + name.toLowerCase()

  const product = {
    name,
    description,
    category,
    discount,
    price,
    defaultImage,
    images,
    countInStock,
    reviews,
    totalReviews,
    avgRating,
    slug,
  }

  return product
}

async function seed() {
  const products = Array(20)
    .fill(0)
    .map(() => generateProduct())

  console.log('Connecting to database... ⏳')
  await prisma.$connect()
  console.log('Connected to database! ✅')
  console.log('Seeding data... ⏳')

  await prisma.product.createMany({ data: products })
  console.log('data seeded successfully! ✅👌')
}

seed()
  .then(async () => {
    console.log('Disconnecting from database... ⏳')
    await prisma.$disconnect()
    console.log('Disconnected successfully! ✅')
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    console.log('\nSomething bad happed!! ❌❌❌')
    process.exit(1)
  })
