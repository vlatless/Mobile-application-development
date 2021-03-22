import React from "react"
import { Button, Platform, StyleSheet, Text, View } from "react-native"
import BankOtkritie from './src/components/templates/BankOtkritie'
import LoginForm from "./src/components/templates/LoginForm"
import Messages from "./src/components/templates/Messages"

export interface Props {

}

interface State {

}


class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }


  render() {
    return (
      <BankOtkritie/>
      //<LoginForm/>
      //<Messages/>
    )
  }
}

// styles

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row",
    minHeight: 70,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: "#999",
    fontWeight: "bold"
  }
})

export default App;
