import axios from "axios";
import fileDownload from "js-file-download";
import { useToast } from "@chakra-ui/react";
export const DownloadImage = ({
  publicURL,
  name,
}: {
  publicURL: string;
  name: string;
}) => {
  const toast = useToast();
  const handleDownload = async () => {
    try {
      const res = await axios.get(publicURL, { responseType: "blob" });
      fileDownload(res.data as string, `${name}.png`);
    } catch (e) {
      toast({
        title: "Download failed",
        description: "Something went wrong downloading your image!",
        duration: 5000,
        isClosable: true,
        status: "error",
      });
    }
  };

  return (
    <option value="" onClick={handleDownload}>
      Download
    </option>
  );
};
