import * as React from "react";
import { Drawer } from "react-native-paper";

//font = Averia Libre
const DrawerNav = () => {
  const [active, setActive] = React.useState("");

  return (
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="usuario@dominio.com"
        active={active === "first"}
        onPress={() => setActive("first")}
      />
      <Drawer.Item
        icon={"file-document-outline"}
        label="Pesquisa"
        active={active === "second"}
        onPress={() => setActive("second")}
      />
    </Drawer.Section>
  );
};

export default DrawerNav;
