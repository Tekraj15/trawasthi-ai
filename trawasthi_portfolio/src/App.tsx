import AboutMe from './components/About'
import Blogs from './components/Blogs'
import Home from './components/Home'
import Navbar from './components/NavBar'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'

const App = () => {
  return (
    <div className="relative">
    <Navbar/>
      <main>
    <Home/>
    <AboutMe/>
    <WorkExperience/>
    <Projects/>
    <Blogs/>
    </main>
    </div>
    
  )
}
export default App