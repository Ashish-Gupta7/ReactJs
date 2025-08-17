# How to render Array of objects

## Key in vueJs:

Agar aap console mein dekh rahe hain ki key ki value nahi dikh rahi, to iska reason hai ki React me key ek special prop hoti hai, jo sirf React ke internal rendering mechanism ke liye use hoti hai. Ye prop DOM mein ya JSX ke andar nahi dikhayi jaati.

### key prop ka purpose:

React ko batana hota hai ki kaunse elements list ke andar unique hain, taki jab elements ko update ya re-render kare, toh efficiently kaam ho sake. React is key prop ko apne under-the-hood process ke liye use karta hai, lekin ye key value DOM ya console output mein nahi dikhti.

### element ko key naa dene pr:

Jab user element ko key nhi deta hai to vueJs by default hi ek key set kr deta hai jo har element ke liye unique hoti hai aur console pr ek error bhi show kr deta hai.
