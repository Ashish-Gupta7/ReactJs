function App() {
  return (
    <div className='bg-black h-screen'>
      <h1 className='text-3xl text-white font-bold underline'>Hello world!</h1>
      <h1 className='text-emerald-800 font-semibold'>Api Key = {import.meta.env.VITE_API_KEY}</h1>
    </div>
  )
}

export default App
