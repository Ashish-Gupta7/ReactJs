// Form Handling Using React-Hook-Form

import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();
  // console.log(register());   ye register hume onChange, onBlur, ref ye teen cheeje deta hai.

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {/* jo register 3 cheeje deta hai wo hum har ek input me kuchh aise spread kr dete hai. */}
      {/* jaise hum name attribute me value dete hai kuchh usi tarah se yaha register ko bhi naam dete hai. */}
      <input {...register("name")} type="text" placeholder="name" />
      <input {...register("email")} type="email" placeholder="email" />
      <input type="submit" value="submit" />
    </form>
  );
};

export default App;
