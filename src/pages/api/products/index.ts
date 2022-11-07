import { NextApiResponse, NextApiRequest } from 'next'
import products from '../../../../data/products.json'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any[]>
) {
  return res.status(200).json(products)
}
