import { useSelector } from "react-redux";
import { RootStoreType } from "../../../Store/store";
import { nat } from "../nationality";

export const FilterData = () => {
  const { data } = useSelector((state: RootStoreType) => state.contacts);
  const { nameValue, natValue, genderValue } = useSelector(
    (state: RootStoreType) => state.filter
  );

  return data.filter((el) => {
    const userName = `${el.name.title} ${el.name.first} ${el.name.last}`;
    const gender = genderValue === "" ? el.gender : el.gender === genderValue;

    return (
      nat[el.nat].toLowerCase().includes(natValue.toLowerCase()) &&
      userName.toLowerCase().includes(nameValue.toLowerCase()) &&
      gender
    );
  });
};
