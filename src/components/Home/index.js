import BlogList from '../BlogList'
import UserInfo from '../UserInfo'
import './index.css'

const blogsData = [
  {
    id: 1,
    title: 'BFC Technologies, Bangalore',
    description: `Frontend Developer - Remote`,
    publishedDate: 'Nov 2021 - Ongoing',
  },

  {
    id: 2,
    title: 'Nxtwave Disruptive Technologies ',
    description: ` CCBP intensive is an industry ready certification program focused on full stack web development get provides training through an immersive hands-on and reverse engineering curriculum `,
    publishedDate: 'Aug 2021',
  },

  {
    id: 3,
    title: 'Frontend Developer - Remote  ',
    description: `A high quality solution beautifully designed for startups. `,
    publishedDate: 'Nov 2021 - Ongoing',
  },

  {
    id: 4,
    title: 'NORTH EAST FRONTIER TECHNICAL UNIVERSITY',
    description: `B.Com (7.1 CGPA) `,
    publishedDate: 'Feb 2018',
  },
]
const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList blogsData={blogsData} />
  </div>
)

export default Home
