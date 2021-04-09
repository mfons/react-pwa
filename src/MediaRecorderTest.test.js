import React from 'react';
import { render, fireEvent, queryByLabelText, screen } from '@testing-library/react';
import MediaRecorderTest from './Views/MediaRecorderTest';

let promptSpy;
let mediaDevicesMock;
let mediaRecorderMock;
beforeAll(() => {
    promptSpy = jest.spyOn(window, 'prompt');
    promptSpy.mockImplementation(jest.fn(() => 'My unnamed clip' ));
    mediaDevicesMock = {
        getUserMedia: jest.fn(() => new Promise((resolve, reject) => {})),
    };
    global.navigator.mediaDevices = mediaDevicesMock;
    mediaRecorderMock = jest.fn().mockImplementation(() => ({
        start: jest.fn(),
        stop: jest.fn()
    }));
    global.MediaRecorder = mediaRecorderMock;
});

afterAll(() => {
    promptSpy.mockRestore();
});

test('renders Record/Stop buttons', () => {
  const { getByText } = render(<MediaRecorderTest />);
  expect(getByText(/Record/)).toBeInTheDocument();
  expect(getByText(/Stop/)).toBeInTheDocument();
});

test('click on the record button', () => {
    const { getByText, getByLabelText } = render(<MediaRecorderTest />);
    expect(screen.queryByLabelText('My unnamed clip')).toBeNull();
    expect(getByText(/Record/)).toBeEnabled();
    expect(getByText(/Stop/)).toBeDisabled();
    console.log("about to click Record...");
    //fireEvent.click(getByText(/Record/)); 
    // expect(getByText(/Record/)).toBeDisabled();
    // expect(getByText(/Stop/)).toBeEnabled();
    // fireEvent.click(getByText(/Stop/)); 
    // expect(promptSpy).toBeCalled();
    // expect(getByText(/Record/)).toBeEnabled();
    // expect(getByText(/Stop/)).toBeDisabled();
    // getByLabelText(/My unnamed clip/);
});
