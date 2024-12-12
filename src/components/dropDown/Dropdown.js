import { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from 'react-aria-components';
import styles from './Dropdown.module.css';
import { I18nProvider } from "@react-aria/i18n";

const Dropdown = (props) => {
  const { label, options = [] } = props; // Accept label and options array as props

  return (
    <I18nProvider locale="en-US">
      <Select className={styles.reactAriaSelect}>
        <Label className={styles.label}>{label}</Label>
        <div className={styles.inputWrapper}>
          <Button className={styles.reactAriaButton}>
            <SelectValue className={styles.reactAriaSelectValue}>
              {({ defaultChildren, isPlaceholder }) => {
                return isPlaceholder ? <>Select</> : defaultChildren;
              }}
            </SelectValue>
            <span aria-hidden="true" className={styles.dropdownIcon}>▼</span>
          </Button>
        </div>
        <Popover className={styles.reactAriaPopover} data-trigger="Select">
          <ListBox className={styles.reactAriaListBox}>
            {options.map((option) => (
              <ListBoxItem
                key={option.value} // Use the `value` as the unique key
                className={styles.reactAriaListBoxItem}
              >
                {option.label} {/* Render the `label` */}
              </ListBoxItem>
            ))}
          </ListBox>
        </Popover>
      </Select>
    </I18nProvider>
  );
};

export default Dropdown;
