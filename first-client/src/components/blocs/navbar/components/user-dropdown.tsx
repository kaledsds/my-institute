import { useAuth } from "../../../../models/auth/hooks";

export const UserDropdown = () => {
  const { signOut, signOutStatus } = useAuth();

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <button
            type="submit"
            onClick={signOut}
            disabled={signOutStatus === "pending"}
          >
            {signOutStatus === "pending" && (
              <span className="loading loading-spinner"></span>
            )}
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
