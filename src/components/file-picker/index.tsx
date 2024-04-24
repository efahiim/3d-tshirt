import React, { Dispatch, SetStateAction } from "react";

import { Button } from "@components/index";

interface Props {
  file: Blob | string;
  setFile: Dispatch<SetStateAction<string | Blob>>;
  readFile: (type: 'logo' | 'full') => void;
}

const FilePicker: React.FunctionComponent<Props> = ({
  ...props
}: Props): React.JSX.Element => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files && props.setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {!props.file ? "No file selected" : (props.file as File).name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          type="outline"
          title="Logo"
          handleClick={() => props.readFile("logo")}
          customStyles="text-xs"
        />
        <Button
          type="filled"
          title="Full"
          handleClick={() => props.readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
