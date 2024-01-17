import React from 'react';
import styles from './form-render.scss';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TextInput,
  NumberInput,
  Checkbox,
  DatePicker,
  SelectItem,
  RadioButtonGroup,
  RadioButton,
  Tooltip,
  Select,
  FlexGrid,
  Row,
  Column,
  Grid,
} from '@carbon/react';
import { useLayoutType } from '@openmrs/esm-framework';

const rows = [
  {
    id: 'a',
    name: 'Loadbalancer1Loadbalancer1',
    status: 'DisabledDisabledDisabled',
  },
  {
    id: 'b',
    name: 'Loadbalancer2Loadbalancer2',
    status: 'StartingStartingStarting',
  },
  {
    id: 'c',
    name: 'Loadbalancer3Loadbalancer3',
    status: 'ActiveActiveActive',
  },
];

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'status',
    header: 'Status',
  },
  {
    key: 'status',
    header: 'Result 1',
  },
  {
    key: 'status',
    header: 'Result 2',
  },
  {
    key: 'status',
    header: 'Result 3',
  },
];

function FormRenderTest() {
  const layout = useLayoutType();

  console.log(layout);
  return (
    <div className={styles.playground}>
      <div className={styles.textParent}>
        <TextInput id="text-input-1" type="text" labelText="Text input label" helperText="Add a string value" />
      </div>
      <div className={styles.radioParent}>
        <RadioButtonGroup legendText="Group label" name="radio-button-group" defaultSelected="radio-1">
          <RadioButton labelText="Radio button label" value="radio-1" id="radio-1" />
          <RadioButton labelText="Radio button label" value="radio-2" id="radio-2" />
          <RadioButton labelText="Radio button label" value="radio-3" id="radio-3" />
        </RadioButtonGroup>
      </div>
      <br />
      <div className={styles.numberParent}>
        <NumberInput
          id="carbon-number"
          min={0}
          max={100}
          value={50}
          label="NumberInput label"
          helperText="Optional helper text."
          invalidText="Number is not valid"
        />
      </div>
      <br />
      <div className={styles.selectParent}>
        <Select id={`select-1`} labelText="Select an option" helperText="Choose from the following">
          <SelectItem value="" text="" />
          <SelectItem value="option-1" text="Option 1" />
          <SelectItem value="option-2" text="Option 2" />
          <SelectItem value="option-2" text="Option 3" />
          <SelectItem value="option-2" text="Option 4" />
          <SelectItem value="option-2" text="Option 5" />
        </Select>
      </div>
      <br />
      <div className={styles.dataTableParent}>
        <DataTable rows={rows} headers={headers}>
          {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow {...getRowProps({ row })}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </DataTable>
      </div>
      <br />
      <span>
        {' '}
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </span>
      <br />
      <br />
      {/* <div className="container" style={{ width: '100%' }}>
        <div className="row" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <div className="column"></div>
        </div>
      </div> */}
      <Grid>
        <Column sm={4} style={{ background: 'blue' }}>
          <span>Span 25%</span>
        </Column>
        <Column sm={4} style={{ background: 'red' }}>
          <span>Span 25%</span>
        </Column>
        <Column sm={4} style={{ background: 'yellow' }}>
          <span>Span 25%</span>
        </Column>
        <Column sm={4} style={{ background: 'pink' }}>
          <span>Span 25%</span>
        </Column>
      </Grid>
      <br />
      <Grid>
        <Column xs={12} sm={12} md={6} lg={4} style={{ background: 'orange' }}>
          <span>Span 25%</span>
        </Column>
      </Grid>
    </div>
  );
}

export default FormRenderTest;
