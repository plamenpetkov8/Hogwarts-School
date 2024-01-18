import { useState } from "react";
import { Box, Stack } from "@mui/material";

import ApplicationSuccessMessage from "./ApplicationSuccessMessage";
import NameField from "./fields/NameField";
import AnimalSelectBox from "./fields/AnimalSelectBox";
import GhostField from "./fields/GhostField";
import CommonRoomField from "./fields/CommonRoomField";
import ButtonBox from "./fields/ButtonBox";

function ApplicationForm() {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("giraffe");
  const [ghost, setGhost] = useState("");
  const [commonRoom, setCommonRoom] = useState("");
  const [isSuccessfull, setIsSuccessfull] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (e.type === "submit") {
      setIsSuccessfull(true);
    }
  }

  return (
    <>
      {(isSuccessfull && (
        <ApplicationSuccessMessage
          name={name}
          animal={animal}
          ghost={ghost}
          commonRoom={commonRoom}
        />
      )) || (
        <form onSubmit={handleSubmit}>
          <Stack direction="column" gap={5}>
            <Box />
            <NameField name={name} setName={setName} />
            <AnimalSelectBox animal={animal} setAnimal={setAnimal} />
            <GhostField ghost={ghost} setGhost={setGhost} />
            <CommonRoomField
              commonRoom={commonRoom}
              setCommonRoom={setCommonRoom}
            />
            <ButtonBox />
          </Stack>
        </form>
      )}
    </>
  );
}

export default ApplicationForm;
