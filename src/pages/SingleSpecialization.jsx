import { useParams } from "react-router";
import { Categories } from "../shared/data/Categories";
import { SpecializationContainer } from "../components/SpecializationContainer";

export const SingleSpecialization = () => {
  const { id } = useParams();
  const item = Categories.find((item) => item.value === id);
  return (
    <SpecializationContainer item={item}>
      <div>Doctors grid view</div>
    </SpecializationContainer>
  );
};
