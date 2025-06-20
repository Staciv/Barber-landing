import { ListItem } from "../../../../ui/ListItem/ListItem";
import services from "./services.json";

export function Services({ selectService, onServiceChange }) {
  return (
    <div className="list  flex flex-col gap-4 min-w-72 ">
      {services.map((service) => {
        return (
          <ListItem
            key={service.id}
            onClick={() => onServiceChange(service.name)}
            selectedItem={selectService}
            isActive={selectService === service.name}
            name={service.name}
            rightText={`${service.price}$`}
          >
            {service.description}
          </ListItem>
        );
      })}
    </div>
  );
}
