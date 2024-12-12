import React, { useState, useEffect } from "react";
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
import { pets } from "../../constants/index";

const LocationPicker = (props) => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const uniqueLocations = [...new Set(pets.map((pet) => pet.location))];

  const handleSelect = (location) => {
    if (location) {
      setSelectedLocation(location);
      // console.log("Selected Location:", location);
      if (props.onChange) {
        props.onChange(location);
      }
    }
  };

  useEffect(() => {
    setSelectedLocation("");
  }, [props.resetKey]);

  return (
    <div className={styles.container}>
      <ComboBox
        className={styles.reactAriaComboBox}
        selectedKey={selectedLocation}
        onSelectionChange={handleSelect}
      >
        <Label className={styles.label}>{props.label}</Label>
        <div className={styles.inputWrapper}>
          <Input
            className={styles.reactAriaInput}
            placeholder="Select a location"
          />
          <Button className={styles.reactAriaButton}>▼</Button>
        </div>
        <Popover className={styles.reactAriaPopover}>
          <ListBox className={styles.reactAriaListBox}>
            {uniqueLocations.map((location) => (
              <ListBoxItem
                key={location}
                textValue={location}
                className={styles.reactAriaListBoxItem}
              >
                {location}
              </ListBoxItem>
            ))}
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
};

export default LocationPicker;
