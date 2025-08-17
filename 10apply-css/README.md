# css

1. `App.css` iss tarah ki file ko aap kahi bhi components ya direct App.jsx me import kare ye ek baar kahi bhi import krne ke baad automatic hi sabhi relative files me apply ho jata hai, aur iski wajah se conflict create hote hai, isliye kisi element ko same naam dene se bachna chahiye yadi unn elements kaa kaam same hai to class me same naam de skte hai. naam dene ke liye ek acchi approach ye hai ki aap `BEM(Block Element Modifier)` ka use kare.
2. `BEM` -> componentName_elementName_modifierName
3. `Nav.module.css` ye bhi ek normal css ki tarah hi likhi jati hai, pr iska use sirf wahi hota hai jaha jaha ise import kiya jata hai. generally hum jis bhi component kee liye ise banate hai uska hi naam use krte hai.
