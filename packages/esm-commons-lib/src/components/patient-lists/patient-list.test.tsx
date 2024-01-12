import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act, screen, render } from '@testing-library/react';
import { PatientList } from './patient-list.component';

describe('patient list component', () => {
  it('should display a loading state on component mount', () => {
    render(<PatientList />);
  });
});
