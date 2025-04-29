import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header'

function App() {

  return (
    <div>
      <Header />
      <main className='container pt-5'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
