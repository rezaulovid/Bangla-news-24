"use client"

import { authClient } from "@/lib/auth-client";

const UserInfo = () => {
  const session = authClient.useSession()
  console.log(session)


    return (
         <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3 text-sm">
            <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700 font-medium">
              সাইন ইন
            </button>
            <button className="btn bg-red-700 px-4 py-1.5 font-semibold text-white hover:bg-red-800 rounded">
              সাইন আপ
            </button>
          </div>
       
    );
};

export default UserInfo;