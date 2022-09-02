import Posts from './Components/Posts/Posts';


function App() {
  return (
    <section className='container mx-auto bg-slate-200 min-h-screen pt-10 px-20'>
      <div className="bg-white w-full p-5 drop-shadow-sm rounded-xl">
        <h2 className='text-blue-500 text-center text-4xl Captilize font-semibold'>Memories</h2>
      </div>
      <Posts />
    </section>
  );
}

export default App;
