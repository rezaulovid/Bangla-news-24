
"use client"
import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const SignInPage =  () => {
    const onSubmit =async (e:React.SubmitEvent<HTMLElement>)=>{
        e.preventDefault()

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())as 
        {email:string , password:string}
       
        console.log(user)
        const {data,error}= await authClient.signIn.email({
            ...user,
           callbackURL: "/"
        })
        if(data){
            toast.success("Sign-in successful!");
            console.log(data)
        }
        if(error){
          toast.error("Invalid email or password");
            console.log(error)
        }

    }

    const handleGoogleSignIn = async () =>{
       const data = await authClient.signIn.social({
          provider: "google",
       });
       console.log(data)
    }
    
    return (
        <div>
           <form onSubmit={onSubmit}>
            <fieldset className="mt-5 fieldset bg-base-200 
            border-base-300 rounded-box w-xs border p-4">
  <legend className="flex flex-col justify-center fieldset-legend 
   text-red-700 text-2xl">সাইন ইন</legend>


  <label className="label">ইমেইল</label>
  <input name="email" type="email" className="input w-md" placeholder="Email" />

  <label className="label">পাসওয়ার্ড</label>
  <input name="password" type="password" className="input w-md" placeholder="Password" />
  
  <button type="submit" className="btn btn-neutral
   text-white mt-4 bg-red-700">সাইন ইন করুন</button>
</fieldset>
           </form>
           <button onClick={handleGoogleSignIn} className="btn">
            Sign In With Google</button>
        </div>
    );
};

export default SignInPage;

