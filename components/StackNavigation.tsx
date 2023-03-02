import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BookingEntity } from "../entities/BookingEntity";
import EditScreen from "../screens/EditScreen";
import ListScreen from "../screens/ListScreen";
import DeleteScreen from "../screens/DeleteScreen";

export type StackMain = {
  Bookings: undefined;
  Edit: { booking: BookingEntity };
  Delete: { booking: BookingEntity };
};

const Stack = createNativeStackNavigator<StackMain>();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bookings" component={ListScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
      <Stack.Screen name="Delete" component={DeleteScreen} />
    </Stack.Navigator>
  );
}
