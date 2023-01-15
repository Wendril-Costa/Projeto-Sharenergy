import jwt from 'jsonwebtoken'
const SECRET = process.env.JWT_SECRET as string

const creatToken = async (data: object): Promise<object> => {
  const token = jwt.sign(data, SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256'
  })

  return { token }
}

export default creatToken
