import React from 'react';
import '../styles/BookingSteps.css';

const steps = ['Выбор номера', 'Гость', 'Подтверждение'];

const BookingSteps = ({ currentStep = 1 }) => {
  return (
    <div className="booking-steps">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <div key={index} className={`step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
            <div className="circle">{stepNumber}</div>
            <div className="label">{label}</div>
            {stepNumber < steps.length && <div className="line" />}
          </div>
        );
      })}
    </div>
  );
};

export default BookingSteps;
