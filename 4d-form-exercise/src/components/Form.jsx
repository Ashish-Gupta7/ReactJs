import { useForm } from "react-hook-form";

const Form = ({ handleSubmitData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    handleSubmitData(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="h-40">
      <div className="flex items-center gap-4">
        <input
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 4,
              message: "Minimum length of name is 4.",
            },
            maxLength: {
              value: 14,
              message: "Maximum length of name is 14.",
            },
          })}
          className="px-2 py-1 rounded outline-none font-semibold"
          type="text"
          placeholder="Name"
        />
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Please enter a valid email",
            },
          })}
          className="px-2 py-1 rounded outline-none font-semibold"
          type="email"
          placeholder="Email"
        />

        <input
          {...register("bio", {
            maxLength: {
              value: 20,
              message: "Maximum length of Bio is 20.",
            },
          })}
          className="px-2 py-1 rounded outline-none font-semibold"
          type="text"
          placeholder="Bio"
        />
        <input
          {...register("image")}
          className="px-2 py-1 rounded outline-none font-semibold"
          type="text"
          placeholder="Image URL"
        />
        <input
          className="px-4 py-1 rounded bg-blue-500 text-white"
          type="submit"
          value="Submit"
        />
      </div>

      <div className="mt-4">
        {errors.bio && (
          <p className="w-max px-2  bg-red-500 text-white">
            {errors.bio.message}
          </p>
        )}
        {errors.email && (
          <p className="w-max px-2  bg-red-500 text-white">
            {errors.email.message}
          </p>
        )}
        {errors.name && (
          <p className="w-max px-2  bg-red-500 text-white">
            {errors.name.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
