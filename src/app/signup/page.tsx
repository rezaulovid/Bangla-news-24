"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {}from "react";

interface IUserForm {
  name: string;
  email: string;
  password: string;
}

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(
      formData.entries()
    ) as unknown as IUserForm;

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });
// note
    if (data) {
      console.log(data);
      router.push("/");
      return;
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <fieldset className="mt-5 fieldset bg-base-200 
        border-base-300 rounded-box w-xs border p-4">
          <legend className="flex flex-col justify-center 
          fieldset-legend text-red-700 text-2xl">
            সাইন আপ
          </legend>

          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input w-md"
            placeholder="Name"
          />

          <label className="label">ImageURL</label>
          <input
            name="image"
            type="url"
            className="input w-md"
            placeholder="Image"
          />

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button
            type="submit"
            className="btn btn-neutral text-white mt-4 bg-red-700"
          >
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;





// "use client";

// import { authClient } from "@/lib/auth-client";
// import { redirect } from "next/navigation";
// interface IUserForm {
//     name:string
//     email:string
//     password:string

// }
// const onSubmit = async (e)=> {
// e.preventDefault()

// const formData =new FormData(e.target)
// const user = Object.fromEntries(formData.entries()) as unknown as IUserForm

// const {data,error} = await authClient.signUp.email({
//     ...user,
//     callbackURL:"/"
// })
//  if(data){
//     console.log(data);
//     redirect("/")
   
//  }
// if (error){
//     console.log(error)
// }
// }
// const SignUpPage = () => {

//     return (
//         <div>
//            <form onSubmit={onSubmit} >
//             <fieldset className="mt-5 fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
//   <legend className="flex flex-col 
//   justify-center fieldset-legend  text-red-700 text-2xl">সাইন আপ</legend>

//   <label className="label">নাম</label>
//   <input name="name" type="Name" className="input w-md" placeholder="Name" />

//   <label className="label">ImageURL</label>
//   <input name="iamge" type="url" className="input w-md" placeholder="Image" />

//   <label className="label">ইমেইল</label>
//   <input name="email" type="email" className="input w-md" placeholder="Email" />

//   <label className="label">পাসওয়ার্ড</label>
//   <input name="password" type="password" className="input w-md" placeholder="Password" />

//   <button type='submit' className="btn btn-neutral
//    text-white mt-4 bg-red-700">সাইন আপ করুন</button>
// </fieldset>
//            </form>
//         </div>
//     );
// };

// export default SignUpPage;