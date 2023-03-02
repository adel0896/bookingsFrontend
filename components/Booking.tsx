import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BookingEntity } from "../entities/BookingEntity";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackMain } from "./StackNavigation";
import { StyleSheet } from "react-native";

type bookingScreenProp = StackNavigationProp<StackMain, "Edit">;

export default function Booking({ booking }: { booking: BookingEntity }) {
  const navigation = useNavigation<bookingScreenProp>();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Edit", { booking })}>
      <Text style={styles.text}>{booking.name}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "pink",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
