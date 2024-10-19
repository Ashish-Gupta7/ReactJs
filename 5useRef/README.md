# useRef - Hook

## once rendering

```
const App = () => {
  const head = useRef(null);
  console.log(head);

  return (
    <div>
      <h1>Hooks in React Just like Js document.queryselecter()</h1>
      <h2 ref={head}>Lets try hooks.</h2>
      {/* <button onClick={Handler}>Select</button> */}
    </div>
  );
};
```

## select tag

```
const App = () => {
  const head = useRef(null);

  const Handler = () => {
    console.log(head);
    head.current.innerHTML = "changed";
    head.current.style.color = "red";
    console.log(head.current);
  };

  return (
    <div>
      <h1>Hooks in React Just like Js document.queryselecter()</h1>
      <h2 ref={head}>Lets try hooks.</h2>
      <button onClick={Handler}>Select</button>
    </div>
  );
};
```

## Explaination

### Correct Behavior of useRef:

1. Jab React component render hota hai, useRef(null) ek reference object return karta hai jisme ek current property hoti hai. Initially, ye current property null hoti hai.
2. Jab component render hota hai, ref={head} ka kaam hota hai ke React ko batana ki jo <h2> element hai, uska reference head.current me assign karo. Yani, render ke baad, head.current me <h2> DOM element ka reference hota hai. Iska matlab hai, jab component render ho jata hai, tab head.current me <h2> assign hota hai, not before rendering.
3. UseRef does not cause re-render: Jab bhi aap useRef ke saath kaam karte ho, React component ko dubara render nahi karta, kyunki useRef state update nahi karta. Yeh sirf DOM element ka reference store karta hai jo page ke render hone ke baad accessible hota hai.
4. useRef ke current property me ek baar DOM element assign ho jata hai, wo change nahi hota jab tak aap manually usse change nahi karte. React kabhi bhi useRef ke reference ko null se replace nahi karta jab tak component unmount nahi hota.

5. Jab page render hota hai, tab VDOM (Virtual DOM) me changes hoti hain, lekin head kabhi bhi null se wapas revert nahi hota. Jab ref={head} wala element render hota hai, head.current me <h2> element ka reference assign ho jata hai, aur wo reference stable rahta hai jab tak component mounted hai.

6. Aapka yeh statement, "jaise hi useRef(null) call hota hai to head me null assign ho jata hai", galat hai. Ek baar DOM element assign ho gaya, to head.current me <h2> ka reference hi rahega, unless component unmount hota hai.

7. Jab aap button click karte ho, Handler function call hota hai. Usme head.current already <h2> element ka reference hold kar raha hota hai, to aap head.current.innerHTML aur head.current.style.color ko update kar paate ho. Yeh bilkul waise hi kaam karta hai jaise aap directly JavaScript me document.querySelector() ke through DOM element ko modify karte ho.

8. Button click hone ke baad, <h2> ka content change ho jata hai aur uska color "red" ho jata hai, as expected.

#### Conclusion:

1. useRef initially null hota hai, lekin render ke baad head.current me <h2> DOM element ka reference store ho jata hai, aur yeh kabhi null wapas nahi hota unless component unmount ho jaye.
2. Aapka second example (select tag) bilkul sahi hai, aur useRef se aap DOM ke saath interact kar ke usko modify kar sakte ho, jaise aapne head.current.innerHTML aur head.current.style ko change kiya.
