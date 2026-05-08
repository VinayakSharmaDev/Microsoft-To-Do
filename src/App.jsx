import Header from './components/Header/Header';
import Taskbar from './components/Taskbar/Taskbar';
import './App.css'

function App() {
  return (
    <div className='h-screen flex flex-col text-[#a1a1a1] bg-[#f5f2ed]'>
      <Header></Header>

      <div className='flex flex-1 min-h-0'>

        <aside>
          <Taskbar />
          </aside>

            <main className='flex-1'>
              <div>ssssss</div>
            </main>

          </div>
      </div>
      );
};

      export default App;
