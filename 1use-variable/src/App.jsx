const App = () => {
  let a = 12;
  const counter = () => {
    a += 1;
    console.log(a);
  };
  return (
    <>
      <div>
        <h1>Use variable</h1>
        <h1>a = {a}</h1>
        <button onClick={counter}>Counter</button>
      </div>
    </>
  );
};

export default App;

// Yaha a ki value ko sirf console pr hi dekh skte hai ye value document me nhi dikhegi kyuki doc me real-dom kaam krta hai aur hum virtual-dom likhte hai, virtual-dom real-dom se compare krke changes krta hai lekin aisa tabhi krta hai jb react ko pta ho ki changes kya krne hai lekin yaha humne react ko import hi nhi kiya hai, mtlb react ko bataya hi nhi hai ki kya changes huye hai, isliye doc me changes nhi hoge.
// React ka Virtual DOM aur Real DOM ek tarah se synchronize karte hain, lekin React ko jab tak state ya props ke changes ke baare mein pata nahi chalega, tab tak woh Real DOM ko update nahi karega.
