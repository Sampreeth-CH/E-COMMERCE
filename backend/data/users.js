import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Sampreeth C H',
    email: 'sampreeth@skymart.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'User1',
    email: 'user1@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'User2',
    email: 'user2@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users
