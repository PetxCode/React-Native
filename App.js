import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";

const data = [
  { id: 1, name: "Peter" },
  { id: 2, name: "Bukky" },
  { id: 3, name: "Sam" },
  { id: 4, name: "Malush" },
  { id: 5, name: "Ola" },
  { id: 6, name: "Emma" },
  { id: 7, name: "S. Sam" },
  { id: 8, name: "Gideon" },
  { id: 9, name: "Josh" },
  { id: 10, name: "Tim" },
];

const App = () => {
  const [name, setName] = useState("");
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            margin: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {" "}
          </View>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={{
              height: 30,
              borderBottomColor: "red",
            }}
          />
          <Text style={{ margin: 20 }}>{name}</Text>

          <Button
            title="Click"
            style={{ backgroundColor: "red" }}
            onPress={() => {
              console.log("Tap", name);
            }}
          />

          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "red",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              console.log("Tapped", name);
            }}
          >
            <Text
              style={{
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Click
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "tomato",
              height: 50,
              width: 50,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              border: "4px solid lightgray",
            }}
            onPress={() => {
              console.log("Tapped", name);
            }}
          >
            <MaterialCommunityIcons
              name="pen"
              style={{
                color: "white",
                fontSize: 30,
              }}
            />
          </TouchableOpacity>

          <Image
            resizeMode="contain"
            source={require("./assets/peter.jpg")}
            style={{
              marginTop: 20,
              width: 200,
              height: 100,
            }}
          />

          {data.map(({ id, name }) => (
            <View>
              <Text> {name} </Text>
            </View>
          ))}

          <View style={{ marginTop: 30 }}>
            <FlatList
              data={data}
              keyExtractor={(data) => data.id.toString()}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row" }}>
                  <Text>{item.id} </Text>
                  <Text>{item.name} </Text>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
  },
  container1: {
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
    margin: 5,
  },
});

export default App;
