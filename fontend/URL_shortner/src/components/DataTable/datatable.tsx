import * as React from "react";
import { UrlData } from "../interface/urlData";
import { Link } from "react-router-dom";
import { serverurl } from "../Helpers/constants";
import axios from "axios";

interface DataTableProps {
  data: UrlData[];
  updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<DataTableProps> = (props) => {
  const { data, updateReloadState } = props;

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(`${serverurl}/shorturl/${url}`);
      alert(`URL copied: ${serverurl}/shorturl/${url}`);
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUrl = async (id: string) => {
    const response = await axios.delete(`${serverurl}/shorturl/${id}`);
    console.log(response);
    updateReloadState();
  };

  const renderTableData = () => {
    return data.map((item) => {
      return (
        <tr
          key={item._id}
          className="border-b text-white bg-gray-600 hover:bg-white hover:text-gray-800"
        >
          <td className="px-2 py-2 md:px-6 md:py-3 break-words md:w-3/6">
            <Link to={item.Url} target="_blank" rel="noreferrer noopener">
              {item.Url}
            </Link>
          </td>
          <td className="px-2 py-2 md:px-6 md:py-3 whitespace-nowrap overflow-hidden overflow-ellipsis md:w-1/4">
            <Link
              to={`${serverurl}/shorturl/${item.shortUrl}`}
              target="_blank"
              rel="noreferrer noopener"
              className="block"
            >
              {item.shortUrl}
            </Link>
          </td>
          <td className="px-2 py-2 md:px-6 md:py-3 md:w-1/6">{item.clicks}</td>
          <td className="px-2 py-2 md:px-6 md:py-3">
            <div className="flex justify-center items-center space-x-2">
              <button
                className="cursor-pointer"
                onClick={() => {
                  copyToClipboard(item.shortUrl);
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                  clipRule="evenodd"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button
                className="cursor-pointer"
                onClick={() => deleteUrl(item._id)}
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                  clipRule="evenodd"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 fill-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container mx-auto pt-2 pb-10 overflow-x-auto">
      <div className="relative shadow-sm sm:rounded-lg">
        <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500 ">
          <thead className=" text-md uppercase text-gray-50 bg-gray-700">
            <tr>
              <th scope="col" className="px-2 py-2 md:px-6 md:py-3 md:w-3/6">
                FullUrl
              </th>
              <th scope="col" className="px-2 py-2 md:px-6 md:py-3 md:w-1/4">
                ShortUrl
              </th>
              <th scope="col" className="px-2 py-2 md:px-6 md:py-3 md:w-1/6">
                Clicks
              </th>
              <th scope="col" className="px-2 py-2 md:px-6 md:py-3 md:w-1/6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
