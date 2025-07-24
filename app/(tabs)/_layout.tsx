import { Tabs } from "expo-router";
import { ShoppingCart } from "lucide-react-native";
import React from "react";

import Colors from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Product Comparison",
          tabBarIcon: ({ color }) => <ShoppingCart color={color} />,
          tabBarLabel: "Compare",
        }}
      />
    </Tabs>
  );
}