# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ReactJs

ReactJS ek JavaScript library hai jo mainly UI (User Interface) banane ke liye use hoti hai. Yeh Facebook ke ne banayi thi aur aaj yeh kaafi popular ho chuki hai single-page applications (SPA) banane ke liye.

ReactJS ko Facebook ke ek engineer Jordan Walke ne 2011 mein banaya tha. Us waqt Facebook apni website ke front-end issues face kar raha tha, jisme unko fast aur responsive UI banane mein dikkat aa rahi thi. Jordan Walke ne React ko is problem ko solve karne ke liye develop kiya tha. Pehle React ko Facebook ke newsfeed me use kiya gaya tha, aur baad mein Instagram me bhi implement kiya gaya.

2013 mein, Facebook ne React ko open-source kar diya, taaki baaki developers bhi isse use kar sakein. Aaj React ek widely used library ban chuki hai.

## 1. ReactJS kya hai?

React ek front-end library hai jo UI components ko efficiently banane aur manage karne ke liye use hoti hai. Yeh JavaScript aur JSX (JavaScript XML) ko use karke components create karti hai.

## 2. ReactJS ki zarurat kyun padti hai?

JavaScript frameworks aur libraries, jaise jQuery, use karte waqt code complexity badh jaati thi, especially jab ek large application banana hota tha. Is complexity ko reduce karne aur code ko modular aur maintainable banane ke liye React banayi gayi. Kuch reasons ye hain:

Component-based architecture: React me tumhara UI chhote components me divided hota hai. Har component independent hota hai aur apne aap ko handle kar sakta hai. Jaise buttons, forms, list items sab apne-apne components ban jaate hain.

Virtual DOM: React ek Virtual DOM ko use karta hai, jo ki real DOM ka ek light-weight copy hoti hai. Isse app fast rehti hai, kyunki React sirf wahi parts update karta hai jo change hue hain, poori page ko reload nahi karta.

Declarative syntax: React me tum apne UI ko describe karte ho, aur React us state ke basis pe UI ko update kar deta hai. Tumhe manually DOM manipulation karne ki zarurat nahi padti.

One-way data binding: React ek direction me data flow ko follow karta hai, jo ki bugs aur unexpected behavior ko reduce karta hai.

## 3. ReactJS ke advantages

Fast performance: Virtual DOM ki wajah se React fast rehta hai.
Reusability: Components ko baar baar reuse kar sakte ho, jo development ko faster aur efficient banata hai.
Community support: React ka bahut bada community support hai, to tumhe help easily mil jaati hai.

## 4. React me kaam kaise hota hai?

Tum ek component likhte ho.
Wo component, JSX return karta hai.
React wo JSX ko HTML me convert karta hai aur browser ko dikhata hai.
Agar state ya props change hoti hain, React sirf wahi part update karta hai jo change hua hai, isliye app fast rehti hai.

## 5. ReactJS ke basic concepts

Components: React ka sabse important concept hai "components." Yeh basically reusable building blocks hain jo tumhare UI ka part bante hain. Do tarah ke components hote hain:

Functional Components: Yeh ek simple JavaScript function hota hai jo HTML (JSX) return karta hai.
Class Components: Yeh JavaScript class hoti hai jo React.Component ko extend karti hai aur render method return karti hai. (Modern React me functional components zyada use hote hain with hooks.)
JSX (JavaScript XML): React me tum JavaScript ke andar HTML-like syntax use karte ho, jise JSX kehte hain. Yeh syntax ko more readable aur maintainable banata hai.

```
// jsx
function MyComponent() {
return <h1>Hello, World!</h1>;
}
```

Props (Properties): Props wo data hote hain jo ek component ko doosre component se pass hote hain. Yeh read-only hote hain aur immutable (change nahi hote).

State: State ek component ka internal data hota hai jo change ho sakta hai. Jab state update hoti hai, to component re-render hota hai. State ko handle karne ke liye hooks ka use hota hai jaise useState().

```
// jsx
const [count, setCount] = useState(0);
```

Hooks: Yeh React ke functions hain jo functional components me features jaise state aur lifecycle methods ko allow karte hain. Common hooks hain:
useState(): State manage karne ke liye.
useEffect(): Side effects jaise data fetch karne ya DOM updates ko handle karne ke liye.

## 6. Difference between RDOM and VDOM

`1. Real DOM (RDOM):`
Real DOM browser ka asli Document Object Model hai, jo web page ka structure ko represent karta hai.

JavaScript se jab bhi tum DOM ko manipulate karte ho (jaise kisi element ka content change karte ho), to puri DOM re-render hoti hai. Ye process slow hota hai, especially jab bade web pages hote hain.

Problems with RDOM:

Slow updates: RDOM pe har chhoti update ke liye poori DOM re-render hoti hai, jo performance ko degrade karta hai.
Expensive: DOM manipulation karna CPU-intensive hota hai, isliye zyada frequent changes se application slow ho sakta hai.

`2. Virtual DOM (VDOM):`
Virtual DOM ek light-weight copy hai jo React maintain karta hai. Ye DOM ka ek virtual representation hai, jo JavaScript object form mein hota hai.

Jab tum React me koi state ya data change karte ho, React pehle VDOM ko update karta hai, aur uske baad VDOM aur RDOM ke beech difference ko compare karta hai.

Is comparison process ko "diffing algorithm" kehte hain. Iske baad React sirf wahi specific parts update karta hai jo change hue hain, bina poori page ko reload kiye.

Advantages of VDOM:

Fast updates: VDOM efficiently update karta hai, kyunki sirf changed part ko RDOM me reflect karta hai, isliye performance better hoti hai.
Minimized re-renders: React sirf necessary updates karta hai, isse browser me minimum re-renders hote hain.

### Key Differences Between Real DOM and Virtual DOM

| **Feature**      | **Real DOM (RDOM)**                                              | **Virtual DOM (VDOM)**                                            |
| ---------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Nature**       | Browser ki asli DOM                                              | React ka virtual representation of the DOM                        |
| **Speed**        | Slow updates and re-renders                                      | Fast updates, as sirf changed parts update hote hain              |
| **Re-rendering** | Pura DOM re-render hota hai                                      | Sirf jo parts change hue hain, unhi ko update karta hai           |
| **Performance**  | Heavy and slow, especially for large applications                | Efficient aur fast, especially for large applications             |
| **Memory Usage** | Less memory efficient, as every update involves DOM manipulation | More memory efficient, as comparison happens in virtual DOM first |
| **How it works** | Directly interacts with the browser DOM                          | First updates virtual DOM, then compares with real DOM            |

### Reconciliation

Reconciliation ReactJS ka ek process hai jisme Virtual DOM (VDOM) aur Real DOM (RDOM) ke beech differences ko compare karke sirf necessary updates ko apply kiya jata hai, bina poori DOM ko re-render kiye. React ke reconciliation process ki wajah se application fast aur efficient banti hai.

## 7. ReactJs and NextJs

nextJs ek framework hai. reactJs ko framework ke roop me use krne ke liye hi nextJs ka use reactJs ke sath kiya jata hai.

## 8. ReactJs installation and Vite

Phle ke time me reactJs, nextJs ke sath kaam nhi krta tha wo raw reactJs hota tha, lekin ab wo nextJs ke sath kaam krta hai mtlb isme kai saari cheeje extra aa gyi hai. jinki starting me react seekhte samay jarurat nhi hoti hai. to usi raw react ko use krne ke liye hi vite banaya gya.

Vite ek modern build tool hai jo aapke React applications ko aur tez aur efficient banata hai. Jab aap create-react-app use karte ho, toh woh Webpack ka use karta hai, jo thoda slow ho sakta hai bade projects ke liye. Vite usi problem ko solve karne ke liye banaya gaya hai. Yah React ke liye bhi use hota hai aur iska kaafi faayda hai:

Vite Install Karne ke Reasons:
Faster Development: Vite development server ko instantaneously start karta hai, kyunki ye modules ko lazily load karta hai (sirf wahi files load hoti hain jo aapke code mein zarurat hoti hain). Jab ki Webpack-based tools poori application bundle karte hain, jo time leta hai.

Hot Module Replacement (HMR): Vite ka HMR kaafi fast hota hai, matlab jab aap code mein koi changes karte ho, toh woh turant browser mein reflect hota hai bina poori page ko reload kiye. Isse development experience kaafi smooth ho jata hai.

Faster Build Time: Vite build process mein bhi efficient hai. Ye modern ES module browser support ka faayda uthata hai aur optimized output generate karta hai, jo aapki production build ko kaafi fast banata hai.

Minimal Configuration: Vite ka configuration simple hota hai. Aapko Webpack jaisi heavy configuration files manage karne ki zarurat nahi padti.

1. [Open this website](https://vitejs.dev/guide/)
2. copy here.
   ```
   npm create vite@latest
   ```
3. create a folder
4. select react
5. select javascript
6. cd folder_name
7. npm install
8. code . (for move ito vs code)
9. npm run dev

# 9. JSX file

jsx is very similar to HTML but with superpowers.

## What is a JSX File?

JSX stands for JavaScript XML.
It's a way to write HTML-like code in JavaScript.
It's mainly used with React to build user interfaces.
Jab hum JSX likhte hain, toh woh actual me JavaScript ka ek syntax extension hota hai jo React ke createElement function me convert hotta hai. Yani, React ka render method JavaScript ke code ko samajhta hai, aur JSX ko plain JavaScript code me compile kiya jaata hai.

```jsx
const element = <h1>Hello, world!</h1>;
```

convert into...

```js
const element = React.createElement("h1", null, "Hello, world!");
```

## Why Use JSX?

Readability: It looks like HTML, so it's easier to understand.

# 10. Deployment on `Render`

1. Create an Account on Render
   - Visit Render.com and sign up or log in to your account.
2. Prepare Your React Project
3. Push Your Project to GitHub
4. Deploy the Project on Render
   - Log in to your Render dashboard.
   - Click the "New +" button and select "Static Site".
   - Choose Connect Repository and select the GitHub repository where your React project is stored.
   - Set up the following configuration:
     > Branch: Choose the branch to deploy (usually main or master).
     > Build Command: Set it to npm run build.
     > Publish Directory: Set this to dist (which is the folder Vite generates after building).
5. Set Environment Variables (if any)
   - If your project uses any environment variables, such as API keys, add them under the Environment Variables section in Render.
6. Start the Deployment

- Once you fill in the details, click Create Static Site.
- Render will pull the code from your repository, build the project using npm run build, and deploy the files from the dist folder.
- After the build is successful, you’ll get a live URL to access your deployed React app.

7. Test Your Deployed Site

- Visit the live URL provided by Render to check if everything works properly.

## Static Site and Web Services

### Static Site

Definition: Static site ek aisi website hoti hai jisme sirf HTML, CSS, JavaScript files hote hain jo browser directly load karta hai. Isme backend processing nahi hoti.

1. Content Type: Fixed content, jo pre-generated hota hai. Users jo content dekhte hain, wo same hota hai (koi dynamic change nahi hota server pe based on user input).

2. Use Cases:
   Portfolio websites
   Blogs (jaise Jekyll ya Gatsby se generated static blogs)
   Landing pages
   Documentation sites

3. Example: Agar aap ek simple informational page bana rahe ho jisme koi form ya user input processing nahi hai, to static site ka use sahi rahega.

4. Benefits:
   - Fast loading speed because it’s just static files.
   - Low cost because no backend server is needed.
   - Easy to deploy on platforms like Render, Netlify, Vercel, etc.

### Web Service (Dynamic Site)

Definition: Web service ek application hoti hai jo server-side logic use karti hai. Server pe backend code (Node.js, Python, Java, etc.) run hota hai, jo database ke sath interact kar sakta hai aur dynamically data process karta hai based on user input.

1. Content Type: Dynamic content jo user input ya server ke state pe depend karta hai. Server se data fetch karke pages dynamically change hote hain.

2. Use Cases:
   E-commerce websites (jaise Amazon, Flipkart) jaha products, prices, etc., change hote hain.
   Social media platforms (jaise Facebook, Instagram) jaha user data dynamically load hota hai.
   SaaS applications (Software as a Service) like Trello, Slack.
   Chat applications, login systems, and APIs.

3. Example: Agar aap ek app bana rahe ho jisme users apne data ko save, retrieve, ya update kar sakte hain, to aapko web service chahiye hogi.

4. Benefits:
   Dynamic content generation.
   Can interact with databases, APIs, and handle complex logic.
   Suitable for interactive websites.

# 11. How to add prettier.

1. Install
   ```terminal
   npm i prettier
   ```
2. create file -> .prettierrc
3. in this file you can add your rules.

# 12. How to add tailwindcss

1. (Open tailwindcss Framework)[https://tailwindcss.com/docs/installation/framework-guides]
2. select vite.
3. Follow all 6 steps. (if you already create your project, then you can move to next command.)

# 13. How to use .env file in vite

1. in .env file

   ```
   VITE_API_KEY=your_api_key
   ```

2. koi si bhi key likhne ke liye VITE\_ likhna jaruri hai.
3. How to use this key.

   ```
   {import.meta.env.VITE_API_KEY}
   ```

# 14. How code works in reactJs

## ReactJS Structure:

1. src Folder: ReactJS projects me src folder main code rakhne ke liye hota hai.
   components Folder: Yeh folder React ke reusable components ko rakhne ke liye use hota hai, jaise About, Home, etc.
2. App.js:
   Yeh component React application ka main component hota hai. Yahan se aap apne application ki primary structure aur routing define karte hain.
3. index.js (Usually main.js in some setups):
   Yeh file React application ko DOM me render karne ke liye use hoti hai. index.js me aap App component ko ReactDOM.render() function ke through HTML document me inject karte hain.
4. Document Structure:
   index.html file (usually public/index.html) me ek `<div id="root"></div>` hota hai jahan React application ko render kiya jata hai. Yeh `<div>` ke andar ka content index.js se aata hai.
5. Aap .jsx extension bhi use kar sakte ho for clarity, lekin React me .js bhi JSX ko support karta hai.

App.js component application ka main component hai, aur index.js (ya main.js) isse DOM me render karta hai. index.html me body ke andar ka code React ke through update hota hai, lekin actual code index.js me hota hai jo App.js ko render karta hai.

## Import and Export

- for example hamare paas do files hain a.js and b.js
- a.js se hum "let a = 14" ko export krna chahte hai aur b.js me import krna chahte hai.
- to iske liye a.js me export ke liye "export default a" likhna hoga aur b.js me import krne ke liye "import a from 'a.js'" likhna hoga.
- export default ka mtlb hota hai sirf kisi ek ko hi export krna hoga.
- multiple cheejo ko export krne ke liye.
- export const a; export const b; ... likhte hai aur inhe import krne ke liye "import {a, b} from 'b.js'" aise likhna padta hai.
- ek cheej aur jab hum multiple export krte hai to jis naam se export kiya gya hai usi naam se import bhi kiya jayega jabki default export me hum kisi bhi naam se import kr skte hai.

## main.jsx

```
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

- isme '<App />' ye ek "self closing tag" hai. jab bhi koi information show krni hoti hai to aise tag ka use krte hai. jaise image tag hota hai input tags hote hai.
- yaha hum '<App />' ki jagah pr App() aisa bhi likh skte hai kyuki App.jsx se to App fnc hi aa rha hai pr phir bhi aisa likha nhi jata hai wo accha nhi mana jata hai.
- isme jo strictMode ka opening aur closing tag laga hai ye sirf development ke liye lagaya jata hai production pr ye nhi hota hai.

## App.jsx

```
function App() {
  return (
    <div className='bg-black h-screen'>
      <h1 className='text-3xl text-white font-bold underline'>Hello world!</h1>
      <h1 className='text-emerald-800 font-semibold'>Api Key = {import.meta.env.VITE_API_KEY}</h1>
    </div>
  )
}

export default App
```

- return ke uper aap koi bhi js logic likh skte hai.
- isme hum ek baar me sirf ek cheej hi return kr skte hai. jo ki ek div ke ander hi hoti hai. aise me hum Fragment tag ka use krte hai ji unnecessary div ko naa lagana pade usse bachata hai.
- ye Fragment tag ek dummy tag hota hai jo sirf ek rapper ka kaam krta hai ye actual document me nhi rhta hai ye sirf return krne me madad krta hai.

```
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <div className='bg-black h-screen'>
        <h1 className='text-3xl text-white font-bold underline'>Hello world!</h1>
        <h1 className='text-emerald-800 font-semibold'>Api Key = {import.meta.env.VITE_API_KEY}</h1>
      </div>
    </Fragment>
  )
}

export default App
```

- aap fragment ki jagah pr aisa bhi kr skte hai.

```
function App() {
  return (
    <>
      <div className='bg-black h-screen'>
        <h1 className='text-3xl text-white font-bold underline'>Hello world!</h1>
        <h1 className='text-emerald-800 font-semibold'>Api Key = {import.meta.env.VITE_API_KEY}</h1>
      </div>
    </>
  )
}

export default App
```

# 15. Statement & Expression

## 1. What is a Statement?

A statement is a complete line of code that performs some action. Statements in programming usually don't return any value directly. They are like instructions telling the computer what to do.

```js
let x = 10; // This is a statement because it assigns a value to x.
if (x > 5) {
  console.log("X is greater than 5"); // This is a statement because it performs an action based on a condition.
}
```

## 2. What is an Expression?

An expression is a piece of code that evaluates to a value. This means it can be executed and will always return some result. Expressions are often part of statements.

```js
let y = 5 + 10; // `5 + 10` is an expression because it evaluates to 15.
let z = x; // `x` is an expression because it evaluates to its value.
```

## 3. Why forEach is not suitable in ReactJS?

ReactJS relies heavily on rendering UI based on data changes. When rendering lists, React expects a method that returns a new array of elements. The forEach method in JavaScript does not return anything (undefined); it only performs an action on each element, which makes it unsuitable for rendering in React components.

forEach is mainly used for side effects like logging or modifying something outside the function, but it doesn’t produce new values.
In contrast, map is better suited for React because it creates and returns a new array of JSX elements, which React can then render in the DOM.

```js
const App = () => {
  let std = ["shiva", "Ankit", "Ak"];

  // Using forEach (NOT suitable because it doesn't return anything)
  std.forEach((name) => <p>{name}</p>); // Doesn't return an array of JSX elements.

  // Using map (SUITABLE for React rendering)
  return (
    <div>
      {std.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
};
```

map returns a new array of JSX elements, allowing React to render them.
forEach doesn’t return anything, making it not suitable for rendering JSX in React.

## 4. Why We Use map and filter More Often in React

map is often used because it allows you to transform an array into a new array of JSX elements. This is crucial in React, where rendering lists of data (like a list of users or products) is common.
filter is also used because it lets you filter out elements from an array and return a new array. This is useful when you want to conditionally render some elements based on criteria.
Both map and filter return new arrays, which is key for React rendering.

## 5. Do We Write Statements or Expressions Inside {}?

In JSX, only expressions can be written inside {}. Statements are not allowed.

Example of valid expressions inside {}:

```js
const App = () => {
  let x = 5;
  return (
    <div>
      <p>{x + 10}</p> {/* This is an expression that evaluates to 15 */}
    </div>
  );
};
```

Invalid use of a statement inside {}:

```js
const App = () => {
  let x = 5;
  return (
    <div>
      {if (x > 5) { console.log(x); }} {/* This is a statement, so it will throw an error */}
    </div>
  );
};
```

Statements like if-else, for, and let are not expressions and cannot be used inside {} in JSX.
