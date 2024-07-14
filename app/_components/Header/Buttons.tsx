export default function Buttons() {
  return (
    <div className="flex items-center">
      <div className="mr-10 space-x-2 align-middle">
        <button>
          <img src="\assets\others/Bell.png" alt="Bell" />
        </button>
        <button>
          <img src="\assets\others/Heart.png" alt="Heart" />
        </button>
        <button>
          <img
            src="\assets\others/ShoppingCartSimple.png"
            alt="Shopping cart"
          />
        </button>
      </div>
      <div className="mr-4 space-x-4">
        <button className="bg-red-400 p-2 text-red-800">Create Account</button>
        <button className="bg-orange-400 p-2 text-orange-800">Sign Up</button>
      </div>
    </div>
  );
}
