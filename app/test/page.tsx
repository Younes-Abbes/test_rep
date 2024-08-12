// pages/account-settings.js

export default function AccountSettings() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Account Settings Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Account settings</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center">
            <img
              src="/default-avatar.png" // Replace with your default image
              alt="Profile Picture"
              className="w-32 h-32 rounded-full object-cover"
            />
            <button className="mt-4 bg-gray-200 px-4 py-2 rounded-md text-sm hover:bg-gray-300">
              Upload Photo
            </button>
            <p className="text-xs text-gray-500 mt-2">
              Image size should be under 1MB and image ratio needs to be 1:1
            </p>
          </div>

          {/* Account Details Form */}
          <div className="flex-1">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Enter your username"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Email address"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Your title, profession or small biography"
                  maxLength={50}
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Change password</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Confirm new password"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
