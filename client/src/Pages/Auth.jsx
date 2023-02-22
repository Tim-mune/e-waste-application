import { FormRow } from "../components";
const Auth = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
  };
  return (
    <section className="p-6 mx-auto my-auto w-[600px] bg-slate-300">
      <div></div>
      <div>
        <form action="" className="flex flex-col">
          <FormRow
            type="Text"
            name="name"
            // value={values.email}
            // handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            // value={values.email}
            // handleChange={handleChange}
          />
          <FormRow
            type="password"
            name="password"
            // value={values.email}
            // handleChange={handleChange}
          />
        </form>
      </div>
    </section>
  );
};

export default Auth;
