import React from "react";
import { IconButton } from "@material-ui/core";
import ReloadIcon from "@material-ui/icons/Replay";
import { useHeaderStyle } from "../../styles";
// import { useAction } from "../../../../hooks/useAction";

type PropsType = {
  classes: ReturnType<typeof useHeaderStyle>;
};

export const ReloadButton: React.FC<PropsType> = ({
  classes,
}: PropsType): React.ReactElement => {
  // const { GetData } = useAction();

  return (
    <IconButton className={classes.reloadBtn}>
      <ReloadIcon />
    </IconButton>
  );
};
