import * as React from "react";
import { serverurl } from "../Helpers/constants";
import "./FormContainer.css";
import axios from "axios";

interface FormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<FormContainerProps> = (props) => {
  const { updateReloadState } = props;
  const [fullurl, setfullurl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverurl}/shorturl`, {
        Url: fullurl,
      });
      setfullurl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-2">
      <div className="bg-formimage my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full rounded-xl p-8 lg:p-20 backdrop-brightness-50 ">
          <h2 className="text-white font-bold text-center text-5xl pb-4 lg:pb-8 font-sans">
            Blinkify
          </h2>
          <p className="text-white text-center text-lg pb-2 lg:text-2xl font-sans">
            Paste your untidy link here
          </p>
          <p className="text-white text-center text-sm pb-8 lg:text-lg font-sans">
            Get the short and tidy URL from here...
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row">
              <div className="relative w-full lg:w-5/6">
                <input
                  type="text"
                  placeholder="Add your link here..."
                  required
                  className="block w-full p-3 text-sm justify-center border-gray-300 rounded-lg bg-white"
                  value={fullurl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setfullurl(e.target.value)
                  }
                />
              </div>
              <div className="mt-2 lg:mt-0 lg:pl-4">
                <button
                  type="submit"
                  className="block w-full lg:w-auto p-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700"
                >
                  Shorten URL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
