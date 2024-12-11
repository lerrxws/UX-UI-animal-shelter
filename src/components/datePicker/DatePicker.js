import React from 'react';
import { 
  Button, Calendar, CalendarCell, CalendarGrid, DateInput, DatePicker, DateSegment, Dialog, Group, Heading, Label, Popover 
} from 'react-aria-components';
import { I18nProvider } from '@react-aria/i18n'; // Import I18nProvider for setting locale
import styles from './DatePicker.module.css'; // Import your custom CSS module
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const DatePickerComponent = () => {
  return (
    <I18nProvider locale="en-US"> {/* Set locale explicitly to English */}
      <DatePicker className={styles.datePicker}>
        <Label className={styles.label}>Date</Label>
        <Group className={styles.inputGroup}>
          <DateInput className={styles.dateInput} placeholder="Date">
            {(segment) => (
              <DateSegment segment={segment} className={styles.dateSegment} />
            )}
          </DateInput>
          <Button className={styles.dropdownButton} aria-label="Open calendar">
            <span className={styles.icon}>
              <CalendarTodayIcon />
            </span>
          </Button>
        </Group>
        <Popover className={styles.popover}>
          <Dialog className={styles.dialog}>
            <Calendar className={styles.calendar}>
              <header className={styles.header}>
                <Button slot="previous" className={styles.navButton}>
                  ◀
                </Button>
                <Heading className={styles.heading} />
                <Button slot="next" className={styles.navButton}>
                  ▶
                </Button>
              </header>
              <CalendarGrid>
                {(date) => (
                  <CalendarCell date={date} className={styles.calendarCell} />
                )}
              </CalendarGrid>
            </Calendar>
          </Dialog>
        </Popover>
      </DatePicker>
    </I18nProvider>
  );
};

export default DatePickerComponent;
