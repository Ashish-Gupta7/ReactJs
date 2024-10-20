# useEffect()

useEffect() ReactJS ka ek hook hai jo functional components ke andar side effects ko handle karne ke liye use hota hai, jaise ki API calls, timers set karna, ya DOM mein directly kuch changes karna. Yeh functional component ki lifecycle ko manage karne mein madad karta hai.

## lifecycle ke 3 parts hote hai ->

1. component create hone
2. component update hona
3. component delete hona

```jsx
useEffect(() => {
  // jaise hi component create hota hai usi time ye part chal jata hai
  // Yahan aap side effects likh sakte ho, jaise API call ya DOM updates
  return () => {
    // jaise hi component view se hatega yani delete ho jayega usi time se part chalega
    // Jaise event listeners ko remove karna ya timers ko clear karna
  };
}, [dependencies]);
```

### `[dependencies]` -> iske do kaam hote hai

1. agar ye blank hai to iska mtlb ye hai ki poore component ko re-render naa kare jise update kiya jaa rha hai sirf usey hi change karen.
2. `page re-render ya update kb hota hai` -> jab useState me value set krna ho ya useEffect se kuchh create krna ho ya view me kahi kisi tarah se change krna ho.
3. agar aap chahte hai kisi variable ke change hone pr `page update` naa ho `page re-render` ho sirf uss variable ke change pr to aap uss `variable kaa naam iss array ke ander likh de`.
