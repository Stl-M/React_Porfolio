import {createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom';



//Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
/* import Mern from './Pages/mern/Mern'; */
import Erates from './Pages/Projects/Erates';
import ShoppingList from './Pages/Projects/ShoppingList';
import TicTacToe from './Pages/Projects/TicTacToe';
import Resume from './Pages/Resume/Resume';
/* import Signup from './Pages/mern/pages/Signup'; */
/* import Login from './Pages/mern/pages/Login'; */
import NotFound from './Pages/NotFound';

//layouts
import RootLayout from './Layouts/RootLayout';
import ProjectsLayout from './Layouts/ProjectsLayout';
/* import MernLayout from './Layouts/MernLayout'; */
import ResumeLayout from './Layouts/ResumeLayout';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='resume' element={<About />} />

    
      {/* <Route path='mern' element={<MernLayout />}>
        <Route index element={<Mern />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route> */}
   
     <Route path='about' element={<ResumeLayout />}>
        <Route index element={ <Resume /> }/>

     </Route>

      <Route path='projects' element={<ProjectsLayout />}>
        <Route path='erates' element={<Erates />} />
        <Route path='shoppinglist' element={<ShoppingList />} />
        <Route path='tictactoe' element={<TicTacToe />} />
     
      </Route>
      <Route path='contact' element={<Contacts />} />
      <Route path='*' element={<NotFound />} />
      
    </Route>
  )
)

function App() {
  return ( 
     <RouterProvider router={router} />
  );
}

export default App;
