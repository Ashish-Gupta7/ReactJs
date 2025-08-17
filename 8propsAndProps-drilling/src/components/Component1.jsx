const Component1 = (lalal) => {
  // normally yaha lalal nhi props likha jata hai
  console.log(lalal);

  return (
    <div>
      <h1>c1</h1>
      <button>{lalal.data}</button>
    </div>
  );
};

export default Component1;
