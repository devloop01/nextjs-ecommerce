import { PrismaClient } from '@prisma/client'
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
  const slug = '/' + name.toLowerCase()
  const price = {
    value: faker.datatype.number({ min: 20, max: 80 }),
    currencyCode: 'INR',
  }
  const defaultImage = {
    url: '/fruits/' + name.toLowerCase() + '.jpg',
    alt: name.toLowerCase(),
  }
  const images = [defaultImage]

  const product = {
    name,
    description,
    category,
    discount,
    price,
    defaultImage,
    images,
    slug,
  }

  return product
}

async function seed() {
  const products = Array(20)
    .fill(0)
    .map(() => generateProduct())

  await prisma.$connect()
  console.log('Connected to database! (❤️ ω ❤️)')
  console.log('Seeding data... ☆*: .｡. o(≧▽≦)o .｡.:*☆')

  await prisma.product.createMany({ data: products })
  console.log('data successfully seeded! ╰(*°▽°*)╯')
}

seed()
  .then(async () => {
    await prisma.$disconnect()
    console.log('Disconnected from database! (◑﹏◐)')
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    console.log('\nSomething bad happed!! (◑﹏◐)')
    process.exit(1)
  })
