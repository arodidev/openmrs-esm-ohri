import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act, screen, render, waitFor } from '@testing-library/react';
import { PatientList } from './patient-list.component';
import { usePatientList } from '../../hooks/usePatientList';

// jest.useFakeTimers();
jest.mock('../../hooks/usePatientList');

describe('patient list component', () => {
  it('should display a loading state on component mount', async () => {
    const mockPatients = [];
    usePatientList.mockReturnValue({
      patients: mockPatients,
      isLoading: true,
      error: null,
      total: 0,
    });

    render(<PatientList />);

    const loadingSkeleton = screen.getByTestId('data-skeleton-id');
    expect(loadingSkeleton).toBeInTheDocument();
  });
  it('renders empty state message when no patients are found', async () => {
    const mockPatients = [];
    usePatientList.mockReturnValue({
      patients: mockPatients,
      isLoading: false,
      error: null,
      total: 0,
    });

    render(<PatientList />);

    await waitFor(() => {
      const emptyStateMessage = screen.getByText(/There are no patient list to display for this patient/i);
      expect(emptyStateMessage).toBeInTheDocument();
    });
  });
  it('renders patient data when loading is complete', async () => {
    const mockPatients = [
      [
        { id: 1, value: 'John Doe', gender: 'Male', age: 30 },
        { id: 2, value: 'Jane Smith', gender: 'Female', age: 25 },
      ],
    ];
    usePatientList.mockReturnValue({
      patients: mockPatients,
      isLoading: false,
      error: null,
      total: 2,
    });

    render(<PatientList />);

    await waitFor(() => {
      expect(screen.getByText(/Patient List/i)).toBeInTheDocument();

      const names = screen.getAllByText(/Name/i);
      names.forEach((element) => {
        expect(element).toBeInTheDocument();
      });

      const gender = screen.getAllByText(/Gender/i);
      gender.forEach((element) => {
        expect(element).toBeInTheDocument();
      });

      // expect(screen.getAllByText(/John Doe/i)).toBeInTheDocument();

      // expect(tableCells.some((cell) => cell.textContent === 'John Doe')).toBe(true);
      // expect(tableCells.some((cell) => cell.textContent === 'Jane Smith')).toBe(true);

      // expect(screen.getAllByText(/Age/i)).toBeInTheDocument();
      // expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
      // expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
    });
  });
});
