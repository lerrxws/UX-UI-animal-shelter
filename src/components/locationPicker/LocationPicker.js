import React, { useState } from "react";
import {
  Button,
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";

import styles from "./LocationPicker.module.css";

const LocationPicker = ({ onChange }) => {
  // Local state to track the selected location
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSelect = (location) => {
    setSelectedLocation(location); // Update local state
    if (onChange) {
      onChange(location); // Notify parent of the change
    }
  };

  return (
    <div className={styles.container}>
      <ComboBox
        className={styles.reactAriaComboBox}
        selectedKey={selectedLocation}
        onSelectionChange={handleSelect} // Handle location selection
      >
        <Label className={styles.label}>Location</Label>
        <div className={styles.inputWrapper}>
          <Input className={styles.reactAriaInput} />
          <Button className={styles.reactAriaButton}>▼</Button>
        </div>
        <Popover className={styles.reactAriaPopover}>
          <ListBox className={styles.reactAriaListBox}>
            <ListBoxItem
              className={styles.reactAriaListBoxItem}
              key="New York"
            >
              New York
            </ListBoxItem>
            <ListBoxItem
              className={styles.reactAriaListBoxItem}
              key="Los Angeles"
            >
              Los Angeles
            </ListBoxItem>
            <ListBoxItem className={styles.reactAriaListBoxItem} key="Chicago">
              Chicago
            </ListBoxItem>
            <ListBoxItem className={styles.reactAriaListBoxItem} key="Houston">
              Houston
            </ListBoxItem>
            <ListBoxItem className={styles.reactAriaListBoxItem} key="Miami">
              Miami
            </ListBoxItem>
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
};

export default LocationPicker;
