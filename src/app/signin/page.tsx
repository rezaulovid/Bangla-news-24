
const SignInPage = () => {
    return (
        <div>
           <form>
            <fieldset className="mt-5 fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="flex flex-col justify-center fieldset-legend 
   text-red-700 text-2xl">সাইন ইন</legend>


  <label className="label">ইমেইল</label>
  <input name="email" type="email" className="input w-md" placeholder="Email" />

  <label className="label">পাসওয়ার্ড</label>
  <input name="password" type="password" className="input w-md" placeholder="Password" />

  <button className="btn btn-neutral text-white mt-4 bg-red-700">সাইন ইন করুন</button>
</fieldset>
           </form>
        </div>
    );
};

export default SignInPage;