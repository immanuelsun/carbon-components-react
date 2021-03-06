import React from 'react';
import { action, storiesOf } from '@storybook/react';
import Checkbox from '../Checkbox';
import Form from '../Form';
import FormGroup from '../FormGroup';
import FileUploader from '../FileUploader';
import NumberInput from '../NumberInput';
import RadioButton from '../RadioButton';
import RadioButtonGroup from '../RadioButtonGroup';
import Button from '../Button';
import Search from '../Search';
import Select from '../Select';
import SelectItem from '../SelectItem';
import Textarea from '../TextArea';
import TextInput from '../TextInput';
import Toggle from '../Toggle';

const additionalProps = {
  className: 'some-class',
};

const checkboxEvents = {
  className: 'some-class',
  labelText: 'Checkbox',
};

const fieldsetCheckboxProps = {
  className: 'some-class',
  legendText: 'Checkbox',
};

const numberInputProps = {
  className: 'some-class',
  id: 'tj-input',
  label: 'Number Input',
  min: 0,
  max: 100,
  value: 50,
  step: 10,
};

const toggleProps = {
  className: 'some-class',
};

const fieldsetToggleProps = {
  className: 'some-class',
  legendText: 'Toggle',
};

const fileUploaderEvents = {
  className: 'some-class',
};

const fieldsetFileUploaderProps = {
  className: 'some-class',
  legendText: 'File Uploader',
};

const radioProps = {
  className: 'some-class',
};

const fieldsetRadioProps = {
  className: 'some-class',
  legendText: 'Radio Button',
};

const searchProps = {
  className: 'some-class',
};

const fieldsetSearchProps = {
  className: 'some-class',
  legendText: 'Search',
};

const selectProps = {
  className: 'some-class',
};

const TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input',
  placeholder: 'Hint text here',
};

const PasswordProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Password',
  placeholder: 'Password',
};

const InvalidPasswordProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Password (invalid)',
  placeholder: 'Password',
  invalid: true,
  invalidText: 'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.',
};

const textareaProps = {
  labelText: 'Text Area',
  className: 'some-class',
  placeholder: 'Hint text here',
  id: 'test2',
  cols: 50,
  rows: 4,
};

const buttonEvents = {
  className: 'some-class',
};

storiesOf('Form', module).addWithInfo(
  'Default',
  `
    Forms are widely used to collect user input.

    Form can have any number of react components enclosed within FormGroup component. FormGroup component
    is a wrapper for legend and fieldset component.

  `,
  () => (
    <Form {...additionalProps}>
      <FormGroup {...fieldsetCheckboxProps}>
        <Checkbox defaultChecked {...checkboxEvents} id="checkbox-0" />
        <Checkbox {...checkboxEvents} id="checkbox-1" />
        <Checkbox disabled {...checkboxEvents} id="checkbox-2" />
      </FormGroup>

      <NumberInput {...numberInputProps} />

      <FormGroup {...fieldsetToggleProps}>
        <Toggle {...toggleProps} id="toggle-1" />
        <Toggle disabled {...toggleProps} id="toggle-2" />
      </FormGroup>

      <FormGroup {...fieldsetFileUploaderProps}>
        <FileUploader
          {...fileUploaderEvents}
          id="file-1"
          labelDescription="Choose Files..."
        />
      </FormGroup>

      <FormGroup {...fieldsetRadioProps}>
        <RadioButtonGroup
          onChange={action('onChange')}
          name="radio-button-group"
          defaultSelected="default-selected"
        >
          <RadioButton
            value="standard"
            id="radio-1"
            labelText="Standard Radio Button"
            {...radioProps}
          />
          <RadioButton
            value="default-selected"
            labelText="Default Selected Radio Button"
            id="radio-2"
            {...radioProps}
          />
          <RadioButton
            value="disabled"
            labelText="Disabled Radio Button"
            id="radio-3"
            disabled
            {...radioProps}
          />
        </RadioButtonGroup>
      </FormGroup>

      <FormGroup {...fieldsetSearchProps}>
        <Search
          {...searchProps}
          id="search-1"
          labelText="Search"
          placeHolderText="Search Bluemix Offerings"
        />
      </FormGroup>

      <Select {...selectProps} id="select-1" defaultValue="placeholder-item">
        <SelectItem
          disabled
          hidden
          value="placeholder-item"
          text="Pick an option"
        />
        <SelectItem value="option-1" text="Option 1" />
        <SelectItem value="option-2" text="Option 2" />
        <SelectItem value="option-3" text="Option 3" />
      </Select>

      <TextInput {...TextInputProps} />

      <TextInput
        type="password"
        required
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
        {...PasswordProps}
      />

      <TextInput
        type="password"
        required
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
        {...InvalidPasswordProps}
      />

      <Textarea {...textareaProps} />

      <Button type="submit" className="some-class" {...buttonEvents}>
        Submit
      </Button>
    </Form>
  )
);
