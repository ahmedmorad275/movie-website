import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <header className='relative'>
        <div className='absolute -z-10 top-0 w-full bg-black h-full'></div>
        <Navbar />
      </header>
    </>
  );
}

export default App;
