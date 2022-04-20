export default function Enter() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex h-[500px] w-[448px] flex-col items-center space-y-8 rounded-lg border">
        <div className="mt-10 space-y-4 text-center text-white">
          <div className="text-2xl">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
          </div>
          <p className="text-2xl font-medium">Sign in</p>
          <p>to continue to YouTube</p>
        </div>
        <div className="space-y-10">
          <div>
            <form action="">
              <input
                type="text"
                placeholder="Email or phone"
                className="h-12 w-96 rounded-md p-4"
              />
            </form>
            <div className="pt-2">
              <a href="#" className="text-sm text-blue-500">
                Forgot email?
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm text-white">
              Not your computer? Use Guest mode to sign in privately.
            </p>
            <p className="text-sm text-blue-500">Learn more</p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-light text-blue-500">Create account</p>
              <button className="rounded-md bg-blue-500 px-6 py-2 text-sm text-white hover:bg-blue-600">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-[448px] items-center justify-between text-xs text-white">
        <div>
          <p>English (United States)</p>
        </div>
        <div className="space-x-8">
          <span>Help</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </div>
  );
}
