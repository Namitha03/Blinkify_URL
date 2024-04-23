import * as React from "react";
import { serverurl } from "../Helpers/constants";
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
    <div className="conatiner mx-auto p-2">
      <div className="bg-formimage my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50 ">
          <h2 className="text-white font-bold text-center text-5xl pb-8 font-sans">
            Blinkify
          </h2>
          <p className="text-white  text-center text-2xl pb-2 font-sans">
            paste your untindy link here
          </p>
          <p className="text-white text-center text-sm pb-8 font-sans">
            get the short and tidy url from here ...
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800"></div>
                <input
                  type="text"
                  placeholder="Add  your link here..."
                  required
                  className="block w-full p-4  text-sm border-gray-300 rounded-lg bg-white"
                  value={fullurl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setfullurl(e.target.value)
                  }
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 "
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
