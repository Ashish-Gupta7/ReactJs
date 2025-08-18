# Redux Toolkit

### Redux Toolkit kya hota hai ?

Redux Toolkit ek official, recommended package hai Redux ke liye jo Redux use karna easy, fast aur boilerplate-free banata hai.
Redux normal use karte time bahut code likhna padta tha (reducers, action creators, constants etc.), uss sabko simplify karne ke liye RTK banaya gaya.

### Kyun Use Karte Hain Redux Toolkit?

1. Less Boilerplate → Kam code likhna padta hai compared to raw Redux.
2. Simplified Logic → createSlice, configureStore jaise functions ka use karke state aur reducers easily bana lete ho.
3. Built-in Middleware → Jaise redux-thunk async logic ke liye.
4. Best Practices → Redux ka recommended way hai state management karne ka.
5. Scalability → Large applications me data flow aur state ko manage karna easy ho jata hai.

### Redux Toolkit Install Kaise Kare?

```
npm install @reduxjs/toolkit react-redux
```

### Redux Toolkit Kaise Use Karte Hain?

#### Step 1: Store Banana

```
// store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})
```

#### Step 2: Slice Banana

```
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

#### Step 3: Store Ko React App Me Connect Karna

```
// main.jsx ya index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

#### Step 4: Component Me Use Karna

```
// Counter.jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  )
}
```

![alt text](<./public/images/Screenshot%20(60).png>)

### Flow Explanation (Based on Diagram)

#### 1. Store

1. Ye ek global container hai jo poore app ka state store karta hai.
2. Jaise users data, products data, cart data sab store ke andar hote hain.
3. Store ko tum `configureStore` se banate ho (agar RTK use karte ho).

```
store → stores the global state
```

#### 2. Reducers

1. Reducers wo functions hote hain jo decide karte hain state kaise update hoga.
2. Har ek feature (users, products, carts) ka apna ek reducer hota hai.
3. RTK me hum reducers ko slice ke andar likhte hain using createSlice().

```
reducers → users state, products state, carts state
```

#### 3. Actions

1. React component agar state change karna chahta hai to directly state ko update nahi kar sakta.
2. Usko ek action dispatch karna padta hai.
3. Action ek signal hai jo bolta hai “ye kaam karna hai” (jaise increment, addToCart, removeUser).

```
App.jsx → actions → reducers
```

#### 4. App.jsx / React Components

1. Tumhare React components (chahe wo App.jsx ho ya koi aur component) Redux store ke data ko consume karte hain.
2. Ye do kaam karte hain:
   - Data Read karna → useSelector() hook ke through
     - Ye read-only hota hai (mutable nahi hota).
   - Data Update karna → useDispatch() hook ke through action bhejna.

```
useSelector() hook → read only / not mutable
```

#### Pure Flow

1. Component me tum useSelector() se state padhte ho.
2. Agar state change karna ho to tum useDispatch() se ek action fire karte ho.
3. Action reducers tak jata hai.
4. Reducers state ko update kar dete hain (immutably).
5. Store me new state save ho jata hai.
6. React component automatically re-render ho jata hai (kyunki state change ho gayi).
