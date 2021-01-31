import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import GridIcon from "@material-ui/icons/Apps";

const icons: Array<React.ReactElement> = [<GridIcon />, <ListIcon />];

export const ViewButton: React.FC = (): React.ReactElement => {
  const [active, setActive] = React.useState<number | null>(1);

  const handleActiveClick = (index: number): void => {
    setActive(index);
  };

  return (
    <ButtonGroup variant="contained" aria-label="view buttons">
      {icons.map((icon: React.ReactElement, index: number) => (
        <Button
          key={`${index}-${Math.random() * 10}`}
          onClick={() => handleActiveClick(index)}
          color={active === index ? "primary" : "default"}>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
};
