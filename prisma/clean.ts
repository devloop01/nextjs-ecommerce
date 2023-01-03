import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function clean() {
  console.log('Connecting to database... ⏳')
  await prisma.$connect()
  console.log('Connected to database! ✅')
  console.log('cleaning data... ⏳')

  await prisma.product.deleteMany()
  console.log('database cleaned successfully! ✅👌')
}

clean()
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
