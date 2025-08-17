const App = () => {
  let std = [
    {
      name: "shiva",
      sub: "pcm",
    },
    {
      name: "Ankit",
      sub: "pcm",
    },
    {
      name: "Ak",
      sub: "polity",
    },
  ];
  let a = std.map((elm, idx) => {
    return (
      <div key={idx}>
        <p>name: {elm.name}</p>
        <p>sub: {elm.sub}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>{a}</h1>
    </div>
  );
};

export default App;
