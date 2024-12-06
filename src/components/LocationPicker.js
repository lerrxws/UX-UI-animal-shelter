import React from "react";
import { Button, ComboBox, Input, Label, ListBox, ListBoxItem, Popover } from "react-aria-components";

import styles from "./styles/LocationPicker.module.css"; // Importing your custom CSS module

const LocationPicker = () => {
  return (
    <div className={styles.container}>
      <ComboBox className={styles.reactAriaComboBox}>
        <Label className={styles.label}>Loaction</Label>
        <div className={styles.inputWrapper}>
          <Input className={styles.reactAriaInput} />
          <Button className={styles.reactAriaButton}>▼</Button>
        </div>
        <Popover className={styles.reactAriaPopover}>
          <ListBox className={styles.reactAriaListBox}>
            <ListBoxItem className={styles.reactAriaListBoxItem}>Blah</ListBoxItem>
            <ListBoxItem className={styles.reactAriaListBoxItem}>Blah</ListBoxItem>
            <ListBoxItem className={styles.reactAriaListBoxItem}>Blah</ListBoxItem>
            <ListBoxItem className={styles.reactAriaListBoxItem}>Blah</ListBoxItem>
            <ListBoxItem className={styles.reactAriaListBoxItem}>Blah</ListBoxItem>
            <ListBoxItem className={styles.reactAriaListBoxItem}>Blah</ListBoxItem>
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
};

export default LocationPicker;
