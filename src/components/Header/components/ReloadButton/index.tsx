import React from "react";
import { IconButton } from "@material-ui/core";
import ReloadIcon from "@material-ui/icons/Replay";
import { useHeaderStyle } from "../../styles";
import { useAction } from "../../../../hooks/useAction";
import { useSelector } from "react-redux";
import { RootStoreType } from "../../../../Store/store";

type PropsType = {
  classes: ReturnType<typeof useHeaderStyle>;
};

export const ReloadButton: React.FC<PropsType> = ({
  classes,
}: PropsType): React.ReactElement => {
  const { GetData, FilterClear } = useAction();
  const { total, pageCapacity } = useSelector(
    (state: RootStoreType) => state.contacts
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    GetData(total, pageCapacity);
    FilterClear();
  };

  return (
    <IconButton className={classes.reloadBtn} onClick={handleClick}>
      <ReloadIcon />
    </IconButton>
  );
};
