import * as React from "react";
import FormContainer from "../FormContainer/FormContainer";
import { UrlData } from "../interface/urlData";
import { serverurl } from "../Helpers/constants";
import axios from "axios";
import DataTable from "../DataTable/datatable";
import TextContainer from "../TextContainer/TextContainer";
import FeatureContainer from "../Features/Features";

interface conatinerProps {}

const conatiner: React.FunctionComponent<conatinerProps> = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = React.useState<UrlData[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [reload, setreload] = React.useState<boolean>(false);

  const updateReloadState = (): void => {
    setreload(true);
  };
  const fetchData = async () => {
    const response = await axios.get(`${serverurl}/shorturl`);

    setData(response.data);

    setreload(false);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    fetchData();
  }, [reload]);
  return (
    <>
      <FormContainer updateReloadState={updateReloadState} />
      <DataTable updateReloadState={updateReloadState} data={data} />
      <TextContainer />
      <FeatureContainer />
    </>
  );
};

export default conatiner;
