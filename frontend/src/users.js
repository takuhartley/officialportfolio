import projects from './projects'

const users = [
  {
    userId: 101,
    admin: true,
    email: 'robert.taku.hartley@gmail.com',
    firstName: 'Robert',
    lastName: 'Hartley',
    location: 'New York, USA',
    projects: [projects[0].id, projects[1].id, projects[2].id, projects[3].id]
  },
  {
    userId: 102,
    admin: false,
    email: 'taku.imanishi@gmail.com',
    firstName: 'Taku',
    lastName: 'Imanishi',
    location: 'Los Angeles, USA'
  },
  {
    userId: 103,
    admin: false,
    email: 'robin.hart@gmail.com',
    firstName: 'Robin',
    lastName: 'Hart',
    location: 'San Francisco, USA'
  },
  {
    userId: 104,
    email: 'bob.lee@gmail.com',
    admin: false,
    firstName: 'Bob',
    lastName: 'Lee',
    location: 'Chicago, USA'
  }
]

export default users
