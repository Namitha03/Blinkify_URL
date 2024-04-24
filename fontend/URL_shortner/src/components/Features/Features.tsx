const FeatureContainer = () => {
  return (
    <div id="features" className="container mx-auto py-8">
      <div>
        <h1 className="text-center text-3xl font-semibold mb-8">Features</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* First Box */}
        <div className="group bg-white border-4 border-gray-900 p-6 rounded-lg shadow-lg hover:bg-slate-900  hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-2 group-hover:text-white">
            Short URLs
          </h3>
          <p className="text-gray-600 group-hover:text-white text-justify">
            Condense lengthy web addresses into concise, memorable links for
            streamlined sharing and improved user experience.
          </p>
        </div>

        {/* Second Box */}
        <div className="group bg-white border-4 border-gray-900 p-6 rounded-lg shadow-lg hover:bg-slate-900  hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9 group-hover:text-white"
            >
              <path
                fillRule="evenodd"
                d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-2  group-hover:text-white">
            Secure & Reliable Links
          </h3>
          <p className="text-gray-600 group-hover:text-white">
            Utilize advanced encryption and robust infrastructure to ensure the
            safety and reliability of every generated link, instilling trust and
            confidence in users.
          </p>
        </div>

        {/* Third Box */}
        <div className="group bg-white border-4 border-gray-900 p-6 rounded-lg shadow-lg hover:bg-slate-900 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9  group-hover:text-white"
            >
              <path
                fillRule="evenodd"
                d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 1 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                clipRule="evenodd"
              />
              <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
              <path
                fillRule="evenodd"
                d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-2  group-hover:text-white">
            URL Management
          </h3>
          <p className="text-gray-600 group-hover:text-white">
            Effortlessly organize and control your portfolio of links with
            intuitive management tools, enabling easy tracking, customization,
            and sharing for enhanced productivity and effectiveness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureContainer;
