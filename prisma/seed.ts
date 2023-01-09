import { PrismaClient, ProductReview } from '@prisma/client'
// import { faker } from '@faker-js/faker'
import products from '../data/products.json'

const prisma = new PrismaClient()

// const categories = ['vegetables', 'fruits', 'seasonal', 'exotics', 'leafs']

// const generateProduct = () => {
//   const title = faker.helpers.arrayElement([
//     'Apple',
//     'PineApple',
//     'Banana',
//     'Grapes',
//   ])
//   const description = 'This is ' + title
//   const category = "Fruits"
//   const discount = faker.datatype.number({ min: 5, max: 20 })
//   const pricePerUnit = {
//     price: {
//       value: faker.datatype.number({ min: 20, max: 80 }),
//     },
//     unit: "kg"
//   }
//   const packs = [
//     {
//       amount: 500,
//       unit: 'g'
//     },
//     {
//       amount: 1,
//       unit: 'kg'
//     }
//   ]
//   const defaultImage = {
//     url: '/fruits/' + title.toLowerCase() + '.jpg',
//     alt: title.toLowerCase(),
//   }
//   const images = [defaultImage]
//   const available = faker.datatype.boolean()
//   const reviews: ProductReview[] = [
//     { rating: 4.5, title: 'good', review: 'good product' },
//     { rating: 1, title: 'bad', review: 'bad product' },
//     { rating: 3, title: 'avg', review: 'ok product' },
//   ]
//   const totalReviews = reviews.length
//   const avgRating = reviews.reduce(
//     (t, review) => (t + review.rating) / totalReviews,
//     0
//   )
//   const slug = '/' + title.toLowerCase()

//   const product = {
//     title,
//     description,
//     category,
//     discount,
//     pricePerUnit,
//     packs,
//     defaultImage,
//     images,
//     available,
//     reviews,
//     totalReviews,
//     avgRating,
//     slug,
//   }

//   return product
// }

async function seed() {
  // const products = Array(20)
  // .fill(0)
  // .map(() => generateProduct())

  console.log('Connecting to database... ⏳')
  await prisma.$connect()
  console.log('Connected to database! ✅')

  console.log('Cleaning database...')
  await prisma.product.deleteMany()
  console.log('Database clean complete!')

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
