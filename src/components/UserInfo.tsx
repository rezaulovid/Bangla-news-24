"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(session)
  const [mounted, setMounted] = useState(false);

  // Hydrate with the same shell the server rendered (signed-out state) so the
  // client tree matches the server HTML. The real session is reconciled after
  // hydration to avoid a React 19 hydration mismatch.
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSignout = async () => {
    await authClient.signOut({});
  };

  const signedOut = (
    <div className="flex items-center gap-3 text-sm">
      <Link href="/signin">
        <button
          className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700 font-medium"
        >
          সাইন ইন
        </button>
      </Link>
      <Link href="/signup">
        <button
          className="btn bg-red-700 px-4 py-1.5 font-semibold text-white hover:bg-red-800 rounded"
        >
          সাইন আপ
        </button>
      </Link>
    </div>
  );

  if (!mounted) {
    return signedOut;
  }

  return (
    <>
      {user ? (
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3 text-sm"
        >
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user.image as string}
              />
            </div>
            <h2>{user.name}</h2>
            <button onClick={handleSignout} className="btn btn-error">
              SignOut
            </button>
          </div>
        </div>
      ) : (
        signedOut
      )}
    </>
  );
};

export default UserInfo;
