export default function ProcessingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4">
      {/* Processing Icon */}
      <div className="mb-6">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414 0L9 11.586 7.707 10.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Processing Text */}
      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold">Processing</h1>
        <p className="text-gray-500">Wait for customer confirmation</p>
      </div>

      {/* Amount */}
      <div className="text-center">
        <p className="text-lg font-semibold">Amount</p>
        <p className="text-3xl font-bold mt-1">
          1800 <span className="text-lg">ETB</span>
        </p>
      </div>

      {/* Loading Spinner */}
      <div className="mt-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
      </div>
    </div>
  );
}
